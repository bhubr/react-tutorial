# 01. Introduction

Tu as sous les yeux l'apparence d'une application, telle qu'elle est générée via `create-react-app`.

C'est surtout le dossier `src/` qui va t'intéresser dans chacun des exercices de cette série.

## index.js

Dans cet exemple, regarde comment on affiche toute l'application React, dans `index.js` :

```javascript
...
ReactDOM.render(<App />, document.getElementById('root'));
...
```

Cette partie-là ne changera pas trop, d'une application à l'autre : c'est toujours *un* composant
qu'on affiche via `ReactDOM.render`, et on l'appelle souvent `App`.

## App.js

Reporte toi au cours sur [http://course.jsx.fr/react/toc](http://course.jsx.fr/react/toc) si besoin.

La méthode render() d'un composant permet de définir ce qu'il affichera :

```
render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
```

Il est important de voir que, si plusieurs éléments de même niveau doivent être affichés (ici `header` et `p`),
on doit les englober avec un élément (ici une `div`).

## &Eacute;noncé - Ajouter du contenu

* Sans écrire encore de composant, tu vas rajouter un élément `<footer>` au bon endroit - plutôt à la fin quoi.
* Inspire toi du header, mais tu n'as pas besoin de mettre d'image, ni de mettre d'attribut `className` sur le tag `<footer>`.
* Le contenu à l'intérieur des balises doit être `Coming soon!` très exactement, en tenant compte des majuscules et de la ponctuation.

## Lancer le test

Si ce n'est déjà fait, lance `npm test` à partir du répertoire `01-original-app`.
Quand les tests passent, c'est que tu as bien répondu à l'énoncé, tu peux alors
passer à l'exercice suivant, pour cela :
* Laisse tourner le serveur Express
* Interromps les `npm start` et `npm test`, et relance les mêmes commandes à partir
du répertoire de l'exercice suivant (`02-add-components`).
