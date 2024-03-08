const express = require("express");
const productRoute = express.Router();


const server = require("../server");
const supabase = server.supabase;

//Route pour récupérer les infos de la page d'ensenble des produits (id/nom/type/prix)
productRoute.get("/product", async (req, resp) => {
  try {
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

    resp.json(data);
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
});

//Route pour récupérer les infos détaillées sur le produit (id/nom/type/prix/dimenssioN/matériel/couleur)
productRoute.get("/product/:id", async (req, resp) => {
  const productId = req.params.id;
  try {
    const { data, error } = await supabase
      .from("products")
      .select(`
        id,
        name,
        dimension,
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
      .eq("id", productId);
      
    if (error) {
      throw error;
    }

    resp.json(data);
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
});

module.exports = productRoute;

