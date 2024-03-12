//! Importe les modules necessaires!!
const express = require("express");
const productAdminRoute = express.Router(); // Cree une nouvelle instance de Router à partir de Express


// Importe le client Supabase depuis le serveur
const server = require("../server");
const supabase = server.supabase;

// Permet d'UPDATE les caractéristiques d'un produit (dont l'ID est défini)
productAdminRoute.put('/products/:id', async (req, res) => {
  const {id} = req.params
  const newName = req.body.name
  const newDimensions = req.body.dimensions
  const newPrice = req.body.price
  const newType = req.body.id_type //! type = id
  const newColor = req.body.id_color //! color = id
  const newMaterial = req.body.id_material //! material = id
  const newImage = req.body.image

  try {
    const { data, error} = await supabase
    .from('products')
    .update({ // C'est ici qu'on update.
      name: newName, 
      dimensions: newDimensions, 
      price: newPrice, 
      image: newImage, 
      id_type: newType,
      id_color: newColor, 
      id_material: newMaterial
  })
    .eq('id', id)

    if (error) {
      throw error
    }

    res.status(200).json({ message: "'name' has been updated. Has been changed to " + newName })
  } catch (error) {
    res.status(500).json({error: "Could not change data"}, error)
  }
})

// ! Export (IMPORTANT)
module.exports = productAdminRoute;
