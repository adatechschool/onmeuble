// server.js
// Importer le module Express pour créer le serveur web
const express = require("express");

// Créer une instance du serveur Express//
const server = express();

// Définir le port sur lequel le serveur écoutera les requêtes entrantes (généralement 3000)
const port = 3000;

// Charger les variables d'environnement à partir d'un fichier .env en utilisant le package dotenv dansles modules
require('dotenv').config();

// Importer la fonction createClient du package @supabase/supabase-js
// pour créer une instance client permettant d'interagir avec la base de données Supabase
const { createClient } = require('@supabase/supabase-js');

// Récupérer l'URL Supabase et la clé anonyme des variables d'environnement
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// Créer une instance client Supabase pour les interactions ultérieures avec la base de données
module.exports.supabase = createClient(supabaseUrl, supabaseKey);

// Importer le routeur de produits depuis le fichier ./routes/productRoute.js
// Ce routeur gérera les requêtes liées aux produits
const productRouter = require("./Routes/productRoute");

// Importer le routeur d'utilisateurs depuis le fichier ./routes/userRoute.js
// Ce routeur gérera les requêtes liées aux utilisateurs
const userRouter = require("./Routes/userRoute");

// Configurer le serveur pour parser les données JSON entrantes dans les corps de requête
server.use(express.json());

// Importer la fonction authMiddleware depuis le fichier ./middleware/authMiddleware.js
// Ce middleware gérera probablement l'authentification des utilisateurs pour certaines routes
const authMiddleware = require('./middleware/authMiddleware');

// Monter le routeur d'utilisateurs sur le chemin '/user', en appliquant d'abord authMiddleware
// Cela signifie que les routes d'utilisateur nécessiteront une authentification

//server.use('/user', authMiddleware, userRouter);

// Monter le routeur de produits sur le chemin '/' (racine)
// Cela signifie que les routes de produits seront accessibles sans authentification
server.use("/", productRouter);

/**
 * ! Route à modifier avec le middleware d'authentification une fois le login réalisé.
 * !Pour générer une authentification à chaque utlisation de cette route.
 * ! remplacer par : server.use("/", authMiddleware, userRouter)
 */
server.use("/", userRouter);

// Démarrer le serveur et écouter les requêtes entrantes sur le port spécifié
server.listen(port, () => {
  console.log(`Le serveur est connecté et écoute le port ${port}`);
});