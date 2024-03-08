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

userRoute.get("/user", async (req, res) => {
  try {
    // Accéder aux informations de l'utilisateur depuis req.user
    const userId = req.user.id;

    const { data, error } = await supabase
        .from("users")
        .select(`
            id,
            email
        `)
        .eq('id', userId);

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = userRoute;





