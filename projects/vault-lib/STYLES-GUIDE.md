# Guide d'utilisation des styles partagés vault-lib

## 📦 Structure créée

```
src/lib/styles/
├── _variables.scss    # Variables SCSS (couleurs, espacements, etc.)
├── _colors.scss    # Variables SCSS (couleurs, espacements, etc.)
├── _mixins.scss       # Mixins réutilisables
├── index.scss         # Point d'entrée principal
└── README.md          # Documentation détaillée
```

## 🚀 Utilisation

### Dans les composants de la bibliothèque

```scss
@import '../../lib/styles/index';

.my-component {
  background: $primary-color;
  padding: $spacing-md;
  @include flex-center;
}
```

### Dans une application Angular consommant vault-lib

**Option 1: Dans angular.json**

```json
{
  "styles": ["node_modules/vault-lib/styles/index.scss"]
}
```

**Option 2: Dans styles.scss global**

```scss
@import '~vault-lib/styles/index';
```

**Option 3: Dans un composant**

```scss
@import '~vault-lib/styles/variables';

.my-component {
  color: $primary-color;
}
```

## 📝 Exemples mis à jour

Les composants [button.scss](src/stories/composents/button/button.scss) et [fieldset.scss](src/stories/composents/fieldset/fieldset.scss) ont été mis à jour pour utiliser les styles partagés.

## 🛠️ Configuration

Le fichier [ng-package.json](ng-package.json) a été configuré pour exporter les fichiers SCSS avec la bibliothèque :

- `styleIncludePaths` permet d'utiliser des chemins courts dans la lib
- `assets` exporte les fichiers SCSS pour les consommateurs

## 📚 Documentation complète

Voir [src/lib/styles/README.md](src/lib/styles/README.md) pour la liste complète des variables, mixins et fonctions disponibles.
