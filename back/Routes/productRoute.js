//! Importation des modules Express
const express = require("express");
const productRoute = express.Router(); // Crée une nouvelle instance de Router à partir de Express

//! Importation du client Supabase depuis le serveur
const server = require("../server");
const supabase = server.supabase; 

// Route pour récupérer les infos de la page d'ensenble des produits (id/nom/type/prix) / URL : localhost:3000/product
// Définition de la route GET pour l'URL "/product"
productRoute.get("/products", async (req, resp) => {

  // 'req' est l'objet de requête, contenant les informations de la requête HTTP
  // 'resp' est l'objet de réponse, utilisé pour envoyer une réponse au client

  try { // Utilise Supabase pour sélectionner les données détaillées du produit
    const { data, error } = await supabase
        .from("products")
        .select(`
          id,
          name,
          price,
          types: types (
            name_type
          )
        `);
    if (error) {
      throw error;
    }

    resp.json(data); // Envoie les données récupérées en réponse au format JSON
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
});

// Route pour récupérer les infos détaillées d'un produit (id/nom/type/prix/dimenssioN/matériel/couleur) / URL : localhost:3000/product
productRoute.get("/products/:id", async (req, resp) => {
  const productId = req.params.id; // Récupère l'ID du produit à partir des paramètres de la requête
  try {
    const { data, error } = await supabase
      .from("products")
      .select(`
        id,
        name,
        dimensions,
        price,
        types: types (
            name_type
        ),
        colors: colors (
            name_color
        ),
        materials: materials (
            name_material
        )
    `)
      .eq("id", productId); // Filtre les produits pour ne sélectionner que celui dont l'ID correspond à "productId"
      
    if (error) {
      throw error;
    }

    resp.json(data);
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
});

//! Exporte le routeur pour être utilisé dans d'autres parties de l'application
module.exports = productRoute;

