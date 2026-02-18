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
            try {
                await execSync("cd " + process.cwd() + " && npm run build",
                    {
                        stdio: "inherit",
                    });


            } catch (error) {
                console.error('❌ build lib error :', error);
            }



            console.log('getting pull requests...');
            const pullRequests = await getPullRequests();

            console.log('writing changes...');
            await writeChanges(pullRequests[0]);

            console.log('publishing lib...');
            try {

                const distPath = path.join(process.cwd(), 'dist', 'vault-lib');

                await execSync("cd " + distPath + " && npm publish",
                    {
                        stdio: "inherit",
                    });

                console.log('🎊 publishing lib done 🎊');
            } catch (error) {
                console.error('❌ publish lib error :', error);
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
            execSync("cd " + libPath + " && npm version patch",
                {
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
        let version
        const changesLogPath = path.join(process.cwd(), 'projects', 'vault-lib', 'CHANGELOG.md');
        const packageJsPath = path.join(process.cwd(), 'projects', 'vault-lib', 'package.json');

        try {
            const packageJsContent = fs.readFileSync(packageJsPath, 'utf-8');
            const packageJs = JSON.parse(packageJsContent);
            version = packageJs.version;
        } catch (error) {
            console.error('❌ get package version error :', error);
        }


        try {
            const changesLogContent = fs.readFileSync(changesLogPath, 'utf-8');
            const newChangeLog = getChangesLog(version, pullRequest);
            const newChangesLogContent = changesLogContent + newChangeLog;
            await writeFileSync(changesLogPath, newChangesLogContent, "utf8");

        } catch (error) {
            console.error('❌ write changes error :', error);
        }

        try {
            const changesLogContent = fs.readFileSync(changesLogPath, 'utf-8');
            execSync("node scripts/update-readme.cjs", { stdio: "inherit" });

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