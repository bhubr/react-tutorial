# Premiers composants

On va transformer le contenu et la structure de l'application originale.

Par rapport à celui du précédent, le `App.js` de cet exercice ajoute un
footer à l'appli, mais *sous forme d'un composant* appelé tout simplement `Footer`.

## Import

La première chose est d'importer le composant, ce qui se fait dans les premières lignes,
où sont regroupés les imports :

```javascript
import Footer from './Footer'
```

Note la différence entre `import React from 'react' et import Footer from './Footer'`.
Dans le premier cas, on met juste le nom du package `react`, car il se trouve dans
`node_modules`, et c'est là que l'outil qui "build" l'application va le chercher.
Dans le 2ème cas, c'est un fichier JS écrit par nous-mêmes, et on doit préciser le chemin
où il se trouve (sinon le "build" va le chercher dans `node_modules` et échoue à le trouver).
On précède donc le nom du fichier à importer par `./`, `.` signifiant le répertoire courant,
et `/` le séparateur de répertoires, qui doit aussi être écrit après des noms de répertoires comme `.` ou `..`.

## Utilisation

L'ajout du composant se fait en insérant `<Footer />` à l'intérieur de la `div`
englobante, dans le `render()` du composant `App`.
