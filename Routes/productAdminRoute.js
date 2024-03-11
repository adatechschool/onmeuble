/**
 * TODO : les routes, pour pouvoir modifier les informations dans la base donnée sur les détails des produits:
 * TODO - Une route pour changer le nom du produit
 * TODO - Une route pour changer les dimensions du produit
 * TODO - Une route pour changer le prix du produit
 * TODO -  Une route pour changer le type du produit
 * TODO -  Une route pour changer la couleur du produit
 * TODO -  Une route pour changer le matière du produit
 * */


//// Importe les modules nécessaires!!
const express = require("express");
const productRoute = express.Router(); // Crée une nouvelle instance de Router à partir de Express
const { body, validationResult } = require("express-validator"); // Ajout de 'express-validator' pour la validation

// Importe le client Supabase depuis le serveur
const server = require("../server");
const supabase = server.supabase;

/**
 * **TODO: Cettes routes suivantes permettent de modifier les informations dans la base de données sur les détails des produits.
 */

// /TODO*1* 
// Route pour modifier le nom du produit
productRoute.put(
  "/product/:id/name",
  // Définition des validations pour le nom du produit
  body("name").trim().notEmpty().escape(),
  async (req, resp) => {
    const productId = req.params.id; // Récupère l'ID du produit à partir des paramètres de la requête
    const { name } = req.body; // Récupère le nom du produit à partir du corps de la requête

    // Valider les données du corps de la requête
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }

    try {
      const { data, error } = await supabase
        .from("products")
        .update({ name }) // Met à jour le nom du produit
        .eq("id", productId); // Filtre les produits pour ne sélectionner que celui dont l'ID correspond à "productId"

      if (error) {
        throw error;
      }

      resp.json({ message: "Nom du produit mis à jour avec succès" });
    } catch (error) {
      resp.status(500).json({ error: error.message });
    }
  }
);

// **Route pour modifier les dimensions du produit**
productRoute.put(
  "/product/:id/dimensions",
  // Définition des validations pour les dimensions du produit
  body("width").trim().notEmpty().isFloat({ min: 0 }).escape(),
  body("height").trim().notEmpty().isFloat({ min: 0 }).escape(),
  body("depth").trim().notEmpty().isFloat({ min: 0 }).escape(),
  async (req, resp) => {
    const productId = req.params.id; // Récupère l'ID du produit à partir des paramètres de la requête
    const { width, height, depth } = req.body; // Récupère les dimensions du produit à partir du corps de la requête

           // LET'S GET CLEAR THEN DELETE THE COMENT//
    /**body("width"): Utilise express-validator pour valider la propriété width du corps de la requête.
 trim(): Supprime les espaces blancs au début et à la fin de la valeur.
 notEmpty(): Vérifie que la valeur n'est pas vide.
 isFloat({ min: 0 }): Vérifie que la valeur est un nombre positif.
 escape(): Échappe les caractères spéciaux pour éviter les injections XSS.
 Des validations similaires sont appliquées à height et depth. */


    // Valider les données du corps de la requête
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }

    try {
      const { data, error } = await supabase
        .from("products")
        .update({ dimension: { width, height, depth } }) // Met à jour les dimensions du produit
        .eq("id", productId); // Filtre les produits pour ne sélectionner que celui dont l'ID correspond à "productId"

      if (error) {
        throw error;
      }

      resp.json({ message: "Dimensions du produit mises à jour avec succès" });
    } catch (error) {
      resp.status(500).json({ error: error.message });
    }
  }
);


//pour demain avec la Team!!!! just to use the exsisting routes and finish the others.

// **On va ajouter  des routes similaires pour les autres modifications :**

// **Changer le prix du produit**
productRoute.put(
  "/product/:id/price",
  // ... (Ajouter la validation et la mise à jour du prix) ...
);

// **Changer le type du produit**
productRoute.put(
  "/product/:id/type",
  // ... (Ajouter la validation et la mise à jour du type) ...
);

// **Changer la couleur du produit**
productRoute.put(
  "/product/:id/color",
  // ... (Ajouter la validation et la mise à jour de la couleur) ...
);

// **Changer la matière du produit**
productRoute.put(
  "/product/:id/material",
  // ... (Ajouter la validation et la mise à jour de la matière) ...
);


///always!!!!
// Exporte le routeur pour être utilisé dans d'autres parties de l'application
module.exports = productRoute;
