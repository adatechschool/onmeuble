const supabase = require('../server').supabase;

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token manquant' });
  }

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('token', token)
    .single();

  if (error) {
    return res.status(500).json({ message: 'Erreur de base de données' });
  }

  if (!data) {
    return res.status(401).json({ message: 'Token invalide' });
  }
}


module.exports = authMiddleware;