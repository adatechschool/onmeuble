const supabase = require('../server').supabase;

async function authenticate(req, res, next) {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ error: 'Token d\'authentification manquant.' });
    }
  
    try {
      // Vérifier si supabase et supabase.auth.api sont définis
      if (!supabase || !supabase.auth || !supabase.auth.api) {
        throw new Error('Supabase auth non défini');
      }

      const { user, error } = await supabase.auth.api.getUser(token);
  
      if (error || !user) {
        return res.status(401).json({ error: 'Token d\'authentification invalide.' });
      }
  
      // Stocker les informations de l'utilisateur dans req.user pour les utiliser dans les routes
      req.user = user;
  
      next();
    } catch (error) {
      console.error('Erreur d\'authentification :', error.message);
      return res.status(500).json({ error: 'Erreur d\'authentification.' });
    }
  }

module.exports = authenticate;