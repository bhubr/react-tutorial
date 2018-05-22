# Exercices React

Ce repo contient des exercices guidés pour s'initier à React. Lis bien les instructions
ci-dessous pour démarrer.

## Installation

### Quelques explications avant d'installer

Si ce repo utilise Node.js et requiert l'installation de modules,
il est préférable d'utiliser la commande `yarn install` pour les installer, au lieu
de la plus classique `npm install` (ceci dit, ça marcherait aussi avec ce dernier !).

Yarn est un gestionnaire de dépendances (paquets ou modules Node.js) au même titre
que NPM, et c'est celui qui est utilisé par défaut par
[Create React App](https://github.com/facebook/create-react-app).

Create React App est un outil développé par Facebook et la communauté React, visant à
simplifier la création d'applications React. Il permet au développeur de commencer
directement à coder, au lieu de passer un temps conséquent à mettre en place
tout un environnement de développement.

### L'installation proprement dite

**Il faut d'abord installer Yarn globalement** :

    sudo npm install -g yarn

Heu, encore quelques explications ! Il faut savoir que *certains* modules ont vocation à être installés à deux endroits :

1. Le répertoire `node_modules` créé lorsqu'on installe les dépendances d'un projet
via `yarn install` ou `npm install`.
2. Un répertoire global pour tout le système, où sont installés des modules qui donnent
accès à des commandes exécutables dans le terminal.

Les outils pour lesquels c'est le cas sont notamment les outils de "build", qui permettent
de créer l'application finale, prête à être déployée, à partir des "sources". Il existe par exemple
des outils pour "minifier" les fichiers d'une application, c'est à dire réduire leur taille :
pour CSS, JavaScript, et HTML respectivement, on trouve entre autres
[css-minify](https://github.com/purple-force/css-minify),
[UglifyJS](https://github.com/mishoo/UglifyJS2), et [HTMLMinifier](https://github.com/kangax/html-minifier).

Ensuite, pour assembler ces fichiers en un seul "bundle", afin de minimiser le nombre de
requêtes HTTP par les navigateurs, on a d'autres outils. Par exemple pour JS, on a
[Browserify](http://browserify.org/), [Webpack](https://webpack.js.org/), [Parcel](https://parceljs.org/) ; ces
outils pouvant utiliser des outils de minification.

Ils peuvent être à leur tour pilotés automatiquement, par un outil jouant le rôle de "chef d'orchestre"
pour toute la procédure de build. [Grunt](https://gruntjs.com/), [Gulp](https://gulpjs.com/), etc.

Toutes ces commandes ont besoin d'être accessibles depuis tout le système, et c'est pourquoi
on les installe *globalement* grâce au paramètre `-g`.

Après ces explications, et une fois Yarn installé, **rends-toi dans le répertoire `01-original-app`
et exécute** :

    yarn install

Cela peut prendre un certain temps, car les applications React nécessitent *beaucoup*
de dépendances !

## Organisation du repo

Create React App est très pratique, mais la création d'une nouvelle application via
la commande `create-react-app ma-nouvelle-app` est chronophage, car toutes les
dépendances de React doivent être installées.

C'est pourquoi on a créé ici un certain nombre d'applications d'exemples, chacune
dans son répertoire, mais *toutes* partageant un dossier `node_modules` commun. Le
`yarn install` ci-dessus a suffi pour tout installer.

Les applications - qui vont en complexité croissante - sont stockées dans des répertoires
numérotés : `000-original-app`, `010-xxx`, `020-yyy`, etc.

## Utilisation

Il va te falloir devenir un roi du terminal , car il va t'en falloir pas moins de quatre !
N'oublie pas que le terminal Linux te permet d'ouvrir plusieurs onglets, pour ne pas avoir à jongler
entre les fenêtres. Cela peut se faire via le menu, ou via le raccourci Shift+Ctrl+T. On peut passer
d'un onglet à l'autre en cliquant sur son titre, ou via les raccourcis Ctrl+PageUp ou Ctrl+PageDown.

Pourquoi quatre fenêtres de terminal ?
* On a besoin d'un terminal pour lancer l'application React elle-même. Par exemple,
sous n'importe lequel des répertoires numérotés, on peut lancer `npm start`. Il n'y
a pas besoin de l'interrompre à chaque modification des fichiers de l'application,
car celles-ci sont détectées automatiquement. L'app est accessible via l'URL
[http://localhost:3000](http://localhost:3000).
* En même temps qu'on lance l'application, on veut faire tourner les tests : `npm test`
(toujours sous un des répertoires numérotés). De la même façon, la batterie de tests
est relancée à chaque modification des fichiers de l'application, ou des fichiers de test eux-mêmes.
* Un mini-serveur web reconnaît quelle application est lancée via `npm start` et affiche des instructions
à droite de la page qui s'ouvre sur [http://localhost:3000](http://localhost:3000) Là aussi on le laisse tourner.
* Un quatrième pour utiliser Git, etc.