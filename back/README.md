# On Meuble

On a pas trouvé de nom, du coup *On Meuble*

## Bibliothèques utilisées

Le fichier package.json du projet permet une installation simplifiée des bibliothèques.
Pour installer les dépendances, il faut utiliser la commande suivante :

    `npm install`

Si vous rencontrait des problèmes d'installation de certaines dépendances. Voici leur liste exhaustive :

- express

        `npm install express --save-dev`

- @supabase/supabase-js

        `npm install @supabase/supabase-js --save-dev`
    
- bcrypt

        `npm install bcrypt --save-dev`

- dotenV

         `npm install dotenv --save-dev`

- nodemon

        `npm install nodemon --save-dev`


## Démarrage serveur avec nodemon

Pour démarrer le serveur dans le terminal, une fois que nodemon a été installer :

        `npm run dev`

Vous obtiendrez ces informations :

`[nodemon] [version_nodemon]`

`[nodemon] to restart at any time, enter `rs` `

` [nodemon] watching path(s): *.* `

`[nodemon] watching extensions: js,mjs,cjs,json `

`[nodemon] starting 'node server.js' `

## Supabase

### Les jointures dans Supabase

Contrairement au requêtes sql traditionnelles, avec Supabase les jointures ne sont pas à réaliser directement dans le code. Elles doivent être réalisées au niveau de la base de données directement.

Cette première vidéo vous donne un bref aperçu des différentes étapes :

https://www.youtube.com/shorts/61oT3Clq7ug

Cette seconde vidéo est plus détaillée :

https://www.youtube.com/watch?v=roAJ61sTGIc&t=11s


### Le login dans Supabase

Supabase utilise de nouveau ses propres fonctions pour gérer le login. De plus certaines étapes semblent nécessaires au sein de la base de données, pour utiliser le login.Il ne suffit pas de comparer l'email et le mot de passe hashé qui se trouve dans la table "users"

Quelques liens qui pourront vous aider pour le login :

https://www.restack.io/docs/supabase-knowledge-supabase-sign-in-access-token

https://supabase.com/docs/guides/auth/auth-email

https://www.youtube.com/watch?v=efNX5x7O0cY&t=609s


## Thunder Client

Pour tester les routes nous avons utilisé Thunder Client.

Pour utiliser Thunder Client avec le login et simuler l'envoi d'une requête avec un email et un mot de passe :

Ouvrir Thunder Client -> ouvrir l'onglet "Body" -> aller dans l'onglet "JSON"

Dans l'espace "JSON Content" renseigner un objet JSON :

    {
    "email": "mon_adresse_mail",
    "password": "mon_mot_de_passe"
    }

Qui pour le projet devrait être :

    {
    "email": "laurelinefleuri@gmail.com",
    "password": "1234"
    }