const express = require('express');
const userRoute = express.Router();

const server = require("../server");
const supabase = server.supabase;
/*
//Route pour récupérer les infos pour le login (id/mail/password)
userRoute.get("/user", async (req, resp) => {
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
*/

server.post('/login', async (req, res) => {
  const { email, mot_de_passe } = req.body;

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (error) {
    return res.status(500).json({ message: 'Erreur de base de données' });
  }

  if (!data) {
    return res.status(401).json({ message: 'Utilisateur non trouvé' });
  }

  const motDePasseCorrect = await bcrypt.compare(mot_de_passe, data.mot_de_passe);

  if (!motDePasseCorrect) {
    return res.status(401).json({ message: 'Mot de passe incorrect' });
  }

  // Renvoie le token de l'utilisateur
  res.status(200).json({ token: data.token });
});

module.exports = userRoute;





