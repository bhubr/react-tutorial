# 03. Propriétés d'un composant

L'exemple précédent t'a fait regrouper des parties du HTML original dans trois
composants distincts, `Header`, `Paragraph` et `Footer`.

On va maintenant reprendre chacun de ces composants, et les rendre "paramétrables",
dans le sens où on va leur transmettre des *propriétés* qui vont influer sur ce qu'ils
affichent.

## Explications

Chaque composant React écrit sous forme de classe, doit hériter de la classe
`React.Component`. On écrit donc quelque chose de semblable à ceci :

```jsx
class MyComponent extends React.Component {
  // ... Code de la classe
  render() {
    return <div>{this.props.label}</div>
  }
}
```

Du fait même du mécanisme d'[héritage en POO](http://course.jsx.fr/courses/javascript-poo/heritage),
une instance de `MyComponent` va disposer de tous les attributs donnés à l'objet
par le constructeur de la classe `React.Component`.

C'est quelque chose qu'on ne voit pas, mais quand on crée une instance de `MyComponent`
en insérant `<MyComponent />` dans le code JSX, le constructeur de `React.Component`
est forcément appelé. Si tu veux voir à quoi il ressemble, [ouvre ce lien dans un nouvel onglet](https://github.com/facebook/react/blob/e8857918422b5ce8505ba5ce4a2d153e509c17a1/packages/react/src/ReactBaseClasses.js#L17-L24).

De ce fait, dans n'importe quelle méthode d'un composant React écrit avec la syntaxe
ci-dessus, on peut accéder à l'attribut `props` via `this.props`.

Pour passer des *propriétés* au composant, qu'il pourra récupérer via `this.props`,
on va utiliser le composant comme ceci :
```jsx
class App extends React.Component {
  // ... Code de la classe
  render() {
    return <MyComponent label="This is the value of label property" />
  }
}
```

Ici, le composant parent `App` fait appel au composant `MyComponent`, et lui passe *une* propriété,
la *clé* de cette propriété étant `label`, et la *valeur* qui lui est associée, la chaîne `This is the value of label property`.

Du point de vue du composant enfant `MyComponent`, celui-ci peut accéder à *toutes* ses propriétés via `this.props`,
qui est un objet. Dans cet objet, on trouve *une propriété pour chaque propriété passée par le composant parent*.

Donc dans l'exemple ci-dessus, à l'intérieur de `MyComponent`, si on affiche les propriétés dans la console, via `console.log(this.props)`,
on verra :

```javascript
{
  label: "This is the value of label property"
}
```

## Enoncé

* Reprendre le code des trois composants `Header`, `Paragraph` et `Footer` de l'exercice précédent,
en copiant leurs fichiers vers `03-component-props/src/`.
* Dans chacun de ces fichiers, au lieu d'avoir du texte "en dur" à l'intérieur des
balises, utiliser la propriété `content` via `this.props.content`.
* Pour refléter ce changement, dans `App.js`, insérer les trois composants, en passant
à chacun une propriété `content`. Voici les valeurs à passer dans la propriété
`content` pour chaque composant :
    * Pour le header : `Variable content with component props`
    * Pour le paragraphe : `The paragraph content is variable, just like the header's content. So far we used only one property (content).`
    * Pour le footer : `Coming soon: more properties!`
