const express = require("express");
const productRoute = express.Router();
const fs = require("fs");


const server = require('../server');
const supabase = server.supabase;


productRoute.get("/product", async (req, resp) => {
    try {
        const {data, error} = await supabase.from("Products").select("*");
        if(error) {
            throw error;
        }
        resp.json(data);
    } catch (error) {
        resp.status(500).json ({ error: error.message});
    }
});

/*
productRoute.get("/product", (req, resp) => {
    fs.readFile("./mocks/items.json", "utf-8", (err, data) => {
        if(err) {
            console.log("Erreur lecture du fichier JSON :", err);
            resp.status(500).json({ error: "Erreur interne du serveur" });
            return;
        } try {
            const products = JSON.parse(data);
            //console.log(products);
            resp.json(products);
        } catch(err) {
            //console.log("Erreur analyse JSON : ", err);
            resp.status(500).json({ error: "Erreur interne du serveur" })
        }
    });
});
*/
/*
productRoute.get("/product/:id", (req, resp) => {
    const productId = Number(req.params.id);

    fs.readFile("./mocks/items.json", "utf-8", (err, data) => {
        if(err) {
            //console.log("Erreur lecture du fichier JSON :", err);
            resp.status(500).json({ error: "Erreur interne du serveur" });
            return;
        } 
        try {
            const products = JSON.parse(data);
            const product = products.find(product => product.id === productId);
            if (!product) {
                resp.status(404).json({ error: "Produit non trouvé" });
                return;
            }
                //console.log(product);
                resp.json(product);
        } catch(err) {
            console.log("Erreur analyse JSON : ", err);
            resp.status(500).json({ error: "Erreur interne du serveur" })
        }
    });
});
*/

module.exports = productRoute;