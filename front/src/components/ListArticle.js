//! Imports (IMPORTANT )

import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

//todo: Import d'images à revoir (si possible)
<<<<<<< Updated upstream
// import Alex from "../img/Alex.png"
// import Gluck from "../img/Gluck.jpg";
// import Bubbule from "../img/Bubbule.jpg";
// import Narnia from "../img/Narnia.jpg";
=======
import Alex from "../img/Alex.png";
import Gluck from "../img/Gluck.jpg";
import Bubbule from "../img/Bubbule.jpg";
import Narnia from "../img/Narnia.jpg";
>>>>>>> Stashed changes
import React from "react";

//? Liste d'objets

// const arrayOfFurniture = [
//   {
//     id: 1,
//     name: "Gluck",
//     type: "Chaise",
//     img: Gluck,
//     dimensions: "55cm x 60cm x 84cm",
//     color: "Rouge & Or",
//     material: "Bois",
//     price: "35 €",
//     alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce malesuada vulputate faucibus. Integer in hendrerit nisi. Praesent a hendrerit urna. In non imperdiet elit, sed molestie odio.",
//   },
//   {
//     id: 2,
//     name: "Alex",
//     type: "Canapé",
//     img: Alex,
//     dimensions: "214cm x 87cm x 84cm",
//     color: "Tigre",
//     material: "Velours",
//     price: "199 €",
//     alt: "POURQUOI ???",
//   },
//   {
//     id: 3,
//     name: "Bubbule",
//     type: "Table",
//     img: Bubbule,
//     dimensions: "160cm x 90cm x 78cm",
//     color: "Vert anis",
//     material: "Bois",
//     price: "80 €",
//     alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce malesuada vulputate faucibus. Integer in hendrerit nisi. Praesent a hendrerit urna. In non imperdiet elit, sed molestie odio.",
//   },
//   {
//     id: 4,
//     name: "Narnia",
//     type: "Armoire",
//     img: Narnia,
//     dimensions: "210cm x 140cm x ♾️",
//     color: "Or",
//     material: "Or",
//     price: "Inestimable",
//     alt: "Oui, oui, c'est bien l'armoire de Narnia.",
//   }
// ];

function ListArticle() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/product");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="article-container">
      {products.map((product) => (
        <article key={product.id}>
          <h2>{product.name}</h2>
          <p className="type-p">{product.type}</p>
          <img src={product.image} className="img-furniture" alt={product.alt} />
          <Link to={`/products/${product.id}`}>
            <button className="buy">Voir plus</button>
          </Link>
          <p className="price-p">{product.price} €</p>
        </article>
      ))}
    </div>
  );
}

export default ListArticle;
