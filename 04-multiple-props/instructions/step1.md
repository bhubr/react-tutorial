# 04. Propriétés multiples

On va voir maintenant  qu'on peut passer autant de propriétés qu'on veut à un composant.

Un exemple d'abord, avec un composant `BlogArticle`, qui permet de mettre en forme
un article de blog :

```jsx
class BlogArticle extends React.Component {
  // ... Code de la classe
  render() {
    return <article>
      <header>
        <h2>{this.props.title}</h2>
      </header>
      <p>{this.props.text}</p>
    </article>
  }
}
```

Dans le code ci-dessus, on utilise deux propriétés, qui doivent être passées au composant
quand on l'utilise, par exemple :

```jsx
<BlogArticle
  title="Learn React.js in 5 minutes"
  text="This tutorial will give you a basic understanding of React.js through building a very simple application." />
```

Remarque qu'ici on a mis chaque propriété sur une ligne : c'est juste une question de clarté,
et cela ne change rien, car les retours à la lignes sont dans ce cas équivalents à de simples espaces.

## Enoncé

En utilisant l'exemple ci-dessus comme base :
* Crée le fichier pour le composant `BlogArticle` ci-dessus.
* À l'intérieur du tag `<header>`, et juste sous le titre, ajoute un tag `<p>`.
* Comme contenu, ce tag doit afficher la concaténation de :
    * la propriété `authorName`
    * la chaîne ` - ` (espace, tiret haut, espace)
    * la propriété `date`
* Ces propriétés devront être passées, en plus de `title` et `text`, quand on utilise
le composant
* Pour vérifier que tout fonctionne bien, utilise blog `BlogArticle`
dans le `render()` du composant `App`. Cet article recevra les propriétés suivantes :
    * `title` : 'React'
    * `text` : 'Use multiple properties'
    * `authorName` : 'John Doe'
    * `date` : `23/05/2018`
