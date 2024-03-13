# On Meuble

*On a pas trouvé de nom, du coup **On Meuble***.

<details>
<summary style="font-size: 25px">Table des matières 📖</summary>

- [On Meuble](#on-meuble)
  - [Description](#description)
  - [Installation](#installation)
    - [Démarrage serveur côté back](#démarrage-serveur-côté-back)
      - [Les jointures dans Supabase](#les-jointures-dans-supabase)
      - [Le login dans Supabase](#le-login-dans-supabase)
      - [Thunder Client](#thunder-client)
    - [Démarrage serveur côté front](#démarrage-serveur-côté-front)
  - [Technologies](#technologies)
  - [Contributeuses(-eurs)](#contributeuses-eurs)

</details>

![-----](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## Description

Ce projet est un site de vente de meubles pour l'entreprise *Anciens meubles pour une nouvelle vie* (**par Lauréline Fleury**).

![-----](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## Installation

Premièrement, clonez le dépôt, puis exécutez la commande suivante dans les répertoires `front` et `back`:

```bash
npm install # ceci va installer toutes les dépendances nécessaires
```
<p style="color: red; text-align: center">ATTENTION !!!</p>
Pour que le projet fonctionne correctement:

- Il est nécessaire de créer un fichier `.env` dans le répertoire `back` et un autre dans le répertoire `front` (celui-ci contiendra l'URL de la base de données et la clé de connexion).
- Démarrer le serveur côté back avant le serveur côté front.

![-----](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/water.png)

### Démarrage serveur côté back

Pour démarrer le serveur de développement, exécutez:

```bash
npm run dev
```

Vous obtiendrez ces informations :

`[nodemon] [version_nodemon]`
`[nodemon] to restart at any time, enter `rs` `
`[nodemon] watching path(s): *.* `
`[nodemon] watching extensions: js,mjs,cjs,json `
`[nodemon] starting 'node server.js' `

![-----](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/grass.png)

#### Les jointures dans Supabase

Contrairement aux requêtes SQL traditionnelles, avec Supabase les jointures ne sont pas à réaliser directement dans le code, elles doivent être réalisées au niveau même de la base de données.

Cette première vidéo vous donne un bref aperçu des différentes étapes :

https://www.youtube.com/shorts/61oT3Clq7ug

Cette seconde vidéo est plus détaillée :

https://www.youtube.com/watch?v=roAJ61sTGIc&t=11s

![-----](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/grass.png)

#### Le login dans Supabase

Supabase utilise de nouveau ses propres fonctions pour gérer le login. De plus certaines étapes semblent nécessaires au sein de la base de données, pour utiliser le login.Il ne suffit pas de comparer l'email et le mot de passe hashé qui se trouve dans la table "users"

Quelques liens qui pourront vous aider pour le login :

https://www.restack.io/docs/supabase-knowledge-supabase-sign-in-access-token

https://supabase.com/docs/guides/auth/auth-email

https://www.youtube.com/watch?v=efNX5x7O0cY&t=609s

![-----](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/grass.png)

#### Thunder Client

Pour tester les routes nous avons utilisé [Thunder Client](https://www.thunderclient.com/).

Pour utiliser Thunder Client avec le login et simuler l'envoi d'une requête avec un email et un mot de passe :

Ouvrir Thunder Client -> ouvrir l'onglet "Body" -> aller dans l'onglet "JSON"

Dans l'espace "JSON Content" renseigner un objet JSON :

```json
{
    "email": "mon_adresse_mail",
    "password": "mon_mot_de_passe"
}
```

Qui pour le projet devrait être :

```json
{
    "email": "laurelinefleuri@gmail.com",
    "password": "1234"
}
```

![-----](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

### Démarrage serveur côté front

Pour démarrer le serveur de développement, exécutez:

```bash
npm run start
```

Le serveur de développement est accessible à l'adresse localhost définie dans la console (par défaut, `http://localhost:3001`). Sauvegarder un fichier rechargera automatiquement la page.

Pour construire le projet, exécutez:

```bash
npm run build
```

![-----](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/water.png)

## Technologies

<p align="center">
    <a target="_blank" rel="noreferrer" padding="20px;">
        <img width="150px" src='./img/nodejs.png'  alt="NODE JS">
    </a>
    <a target="_blank" rel="noreferrer" padding="20px;">
        <img width="150px" src='./img/react.png'  alt="REACT">
    </a>
    <a target="_blank" rel="noreferrer" padding="20px;">
        <img width="150px" src='./img/supabase.png' alt="SUPABASE">
    </a>
    <a target="_blank" rel="noreferrer" padding="20px;">
        <img width="150px" src='./img/Thunder.png' alt="THUNDER CLIENT">
    </a>
    <a target="_blank" rel="noreferrer" padding="20px;">
        <img width="150px" src='./img/nodemon.png' alt="NODEMON">
    </a>
</p>

![-----](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## Contributeuses(-eurs)

- [**Amélie MASSON**](https://github.com/AmelieMariaM) - *Développeuse*
- [**Chloé PELERIN**](https://github.com/pchloe02) - *Développeuse*
- [**Eliana YEPEZ**](https://github.com/Arteinsana7) - *Développeuse*
- [**Imelda KASENTE**](https://github.com/kasente) - *Développeuse*
- [**Léa STATTNER**](https://github.com/Lea9723) - *Développeuse*
- [**Alexandre BOBIS**](https://github.com/AlexandreBobis) - *Développeur*
- [**Aurélien CARTIER**](https://github.com/NadDevCode) - *Développeur*
- [**Ryo RAFAEL**](https://github.com/ryorafael) - *Développeur*
