//! Importation des modules Express, serveur de supabase et bcrypt pour le hachage des mots de passe
const express = require('express');
const userRoute = express.Router(); // Crée une nouvelle instance de Router à partir de Express

const server = require("../server"); // Importation du client Supabase depuis le serveur
const supabase = server.supabase; 

const bcrypt = require("bcrypt")

// Route pour récupérer les infos pour l'utilsateur (id/mail/password) / URL : localhost:3000/user
userRoute.post("/user", async (req, resp) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select(`
        id,
        email,
        password
      `);
    if (error) {
      throw error;
    }

    resp.json(data);
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
});

/*
! Route pour réaliser un login standard, par vérification d'un email et password
! Cette route ne fonctionne pas avec supabase. La base de donnée possède ses propres fonctions pour le login
*/

//? ROUTE VALIDE
userRoute.post("/login2", async (req, res) => {
  const { email, password } = req.body; // Extrait les valeurs 'email' et 'password' du corps de la requête HTTP

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email) // Utilise la méthode '.eq()' pour filtrer les éléments par email
    .single(); // Puis '.single()' pour s'assurer qu'un seul élément est retourné

  if (error) {
    return res.status(500).json({ message: 'Erreur de base de données' });
  }

  if (!data) {
    return res.status(401).json({ message: 'Utilisateur non trouvé' });
  }
  
/*
  * Utilise bcrypt pour comparer le mot de passe fourni par l'utilisateur (password)
  * avec le mot de passe crypté stocké dans la base de données (data.password)
  * et stocke le résultat dans la variable 'correctPassword' (valeur booléenne)
*/
  const correctPassword = await bcrypt.compare(password, data.password);
  return correctPassword ? res.status(200).json({ message: 'Connexion réussie' }) : res.status(401).json({ message: 'Mot de passe incorrect' });
});


// Route pour réaliser un login via la base de données supabase / URL : localhost:3000/login
userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;  // Extrait les valeurs 'email' et 'password' du corps de la requête HTTP

/*
  Utilise la méthode signInWithPassword de Supabase pour authentifier un utilisateur avec son email et mot de passe,
  et attend la réponse qui est déstructurée en trois objets : 'user' contenant les informations de l'utilisateur,
  'session' contenant les détails de la session, et 'error' contenant les éventuelles erreurs
*/

  const { user, session, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log('Email:', email);
  console.log('Password:', password);

  if (error) {
    console.error('Erreur Supabase:', error.message);
    return res.status(500).json({ message: 'Erreur de base de données' });
  }

  if (!user) {
    return res.status(401).json({ message: 'Utilisateur non trouvé' });
  }

  // Renvoie le token de l'utilisateur
  console.log('Token généré :', session.access_token);
  res.status(200).json({ token: session.access_token });
});

// TODO: Une route pour accéder à la page de modification des produits 

//! Exporte le routeur pour être utilisé dans d'autres parties de l'application
module.exports = userRoute;