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

Il faut d'abord installer Yarn *globalement* :

    sudo npm install -g yarn

Il faut savoir que *certains* modules ont vocation à être installés à deux endroits :

1. Le répertoire `node_modules` créé lorsqu'on installe les dépendances d'un projet
via `yarn install` ou `npm install`
2. Un répertoire global pour tout le système, où sont installés des modules qui donnent
accès à des commandes exécutables dans le terminal.

Les outils pour lesquels c'est le cas sont notamment les outils de "build", qui permettent
de créer l'application finale, prête à être déployée, à partir des "sources". On a par exemple
des outils pour assembler (concaténer) et "minifier" (réduire) les CSS, les JavaScript, les HTML.

Exemples pour JS :
* [Webpack](https://webpack.js.org/)
* [Parcel](https://parceljs.org/)
* [UglifyJS](https://github.com/mishoo/UglifyJS2)

Ces outils peuvent être à leur tour pilotés automatiquement, par un outil jouant le rôle de "chef d'orchestre"
pour toute la procédure de build. [Grunt](https://gruntjs.com/), [Gulp](https://gulpjs.com/), etc.

Toutes ces commandes ont besoin d'être accessibles depuis tout le système, et c'est pourquoi
on les installe *globalement* grâce au paramètre `-g`.

Après ces explications, et une fois Yarn installé, rends-toi dans le répertoire `01-original-app`
et exécute :

    yarn install

Cela peut prendre un certain temps, car les applications React nécessitent *beaucoup*
de dépendances !

## Organisation du repo

Create React App est très pratique, mais la création d'une nouvelle application via
la commande `create-react-app ma-nouvelle-app` est chronophage, car toutes les
dépendances doivent être installées.
