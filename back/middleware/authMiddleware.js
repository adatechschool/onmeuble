//! FICHIER PLUS UTILISÉ

//! Middleware pour l'authentification du token
const supabase = require('../server').supabase;

// Middleware pour l'authentification du token
const authMiddleware = async (req, res, next) => {
// Récupère le token d'authentification à partir des en-têtes de la requête
  const token = req.headers.authorization;

  if (!token) {
    // Utilise le token pour récupérer les informations de l'utilisateur à partir de Supabase
    return res.status(401).json({ message: 'Token manquant, accès non autorisé' });
  }

  try {
    const { user, error } = await supabase.auth.api.getUser(token);

    if (error) {
      console.error('Erreur de Supabase:', error.message);
      return res.status(500).json({ message: 'Erreur de base de données' });
    }

    if (!user) {
      return res.status(401).json({ message: 'Utilisateur non trouvé' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Erreur lors de l\'authentification:', error.message);
    return res.status(500).json({ message: 'Erreur lors de l\'authentification' });
  }
};

//! Exporte le middleware pour être utilisé dans d'autres parties de l'application
module.exports = authMiddleware;
