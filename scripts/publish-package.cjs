const { execSync } = require("child_process");
const { resolve } = require("path");
const githubToken = process.env.GH_TOKEN;
const path = require('path');
const owner = process.env.OWNER;
const repo = process.env.REPO;
const fs = require('fs');
const { readFileSync, writeFileSync } = fs;
(async () => {
    const libPath = path.join(process.cwd(), 'projects', 'vault-lib');
    const { Octokit } = await import("octokit");
    const octokit = new Octokit({ auth: githubToken });
    publishLib();

    async function publishLib() {

        try {
            console.log('updating version...');
            await updateVersion();

            console.log('build lib...');
            console.log(`📂 Répertoire de travail: ${process.cwd()}`);
            try {
                await execSync("npm run build",
                    {
                        cwd: process.cwd(),
                        stdio: "inherit",
                    });

                // Vérifier que le build a bien créé le dossier dist
                const distPath = path.resolve(process.cwd(), 'dist', 'vault-lib');
                if (!fs.existsSync(distPath)) {
                    throw new Error(`❌ Le build n'a pas créé le dossier dist: ${distPath}`);
                }
                console.log(`✅ Build réussi dans: ${distPath}`);

            } catch (error) {
                console.error('❌ build lib error :', error);
                throw error; // Arrêter le processus si le build échoue
            }



            console.log('getting pull requests...');
            const pullRequests = await getPullRequests();

            if (pullRequests && pullRequests.length > 0) {
                console.log('writing changes...');
                await writeChanges(pullRequests[0]);
            } else {
                console.log('⚠️  No pull requests found, skipping changelog update');
            }

            console.log('publishing lib...');

            const distPath = path.resolve(process.cwd(), 'dist', 'vault-lib');

            // Vérifier si le répertoire existe
            if (!fs.existsSync(distPath)) {
                throw new Error(`Le répertoire dist n'existe pas: ${distPath}`);
            }

            const packageJsonPath = path.join(distPath, 'package.json');
            if (!fs.existsSync(packageJsonPath)) {
                throw new Error(`package.json introuvable dans: ${distPath}`);
            }

            console.log(`📦 Publication depuis: ${distPath}`);

            // Lire la version du package
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
            console.log(`📌 Version à publier: ${packageJson.name}@${packageJson.version}`);

            try {
                // npm publish avec provenance et accès public
                execSync("npm publish --provenance --access public",
                    {
                        cwd: distPath,
                        stdio: "inherit",
                    });

                console.log('🎊 publishing lib done 🎊');
            } catch (error) {
                console.error('❌ publish lib error :', error);
                console.error('Code de sortie:', error.status);

                // Si la version existe déjà, c'est pas une vraie erreur
                if (error.stderr && error.stderr.toString().includes('cannot publish over existing version')) {
                    console.log('⚠️  Package déjà publié avec cette version');
                } else {
                    throw error; // Arrêter le workflow si erreur réelle
                }
            }

        } catch (error) {
            console.error('❌ updateVersion error :', error);
        }
    }


    /**
     * Updates the version of the library by executing the npm version patch command.
     *
     * @async
     * @function updateVersion
     * @return {void}
     */
    async function updateVersion() {
        try {
            execSync("npm version patch",
                {
                    cwd: libPath,
                    stdio: "inherit",
                });
        } catch (error) {
            console.error('❌ update version error :', error);
        }
    }

    async function getPullRequests() {

        const { data: pullRequests } = await octokit.rest.pulls.list({
            owner,
            repo,
            state: "closed",
            base: "master",
            sort: "updated",
            direction: "desc",
            per_page: 1,
        });

        return pullRequests;
    }


    /**
     * Writes changes to the CHANGELOG.md file based on the provided pull request.
     *
     * @param {object} pullRequest - The pull request object containing information about the changes.
     * @return {void}
     */
    async function writeChanges(pullRequest) {
        if (!pullRequest) {
            console.log('⚠️  No pull request provided, skipping changelog update');
            return;
        }

        let version
        const changesLogPath = path.join(process.cwd(), 'projects', 'vault-lib', 'CHANGELOG.md');
        const packageJsPath = path.join(process.cwd(), 'projects', 'vault-lib', 'package.json');

        try {
            const packageJsContent = fs.readFileSync(packageJsPath, 'utf-8');
            const packageJs = JSON.parse(packageJsContent);
            version = packageJs.version;
        } catch (error) {
            console.error('❌ get package version error :', error);
            return;
        }

        try {
            // Créer le fichier CHANGELOG s'il n'existe pas
            if (!fs.existsSync(changesLogPath)) {
                console.log('📝 Creating CHANGELOG.md...');
                fs.writeFileSync(changesLogPath, '# Changelog\n\nAll notable changes to this project will be documented in this file.\n\n---\n', 'utf-8');
            }

            const changesLogContent = fs.readFileSync(changesLogPath, 'utf-8');
            const newChangeLog = getChangesLog(version, pullRequest);
            const newChangesLogContent = changesLogContent + newChangeLog;
            await writeFileSync(changesLogPath, newChangesLogContent, "utf8");
            console.log('✅ Changelog updated');

        } catch (error) {
            console.error('❌ write changes error :', error);
        }

        try {
            if (fs.existsSync('scripts/update-readme.cjs')) {
                execSync("node scripts/update-readme.cjs", { stdio: "inherit" });
            }
        } catch (error) {
            console.log('❌ write changes in README error :', error);
        }
    }

})();


function getChangesLog(version, pullRequest) {
    return `
### [ ${version} ] - ${pullRequest.closed_at.split('T')[0]}
author: ${pullRequest.user.login} 
${pullRequest.body}
---`;
}