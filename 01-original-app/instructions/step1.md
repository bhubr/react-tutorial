# 01 Introduction

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

## Ajouter du contenu

Sans écrire encore de composant, tu vas rajouter un élément `<footer>` au bon endroit - plutôt à la fin quoi.
Le contenu à l'intérieur des balises doit être `Coming soon!` très exactement, en tenant compte des majuscules et de la ponctuation.

Bla bla