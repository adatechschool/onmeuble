//! Imports (IMPORTANT )
import { useNavigate } from "react-router-dom";

import "../App.css";

import axios from "axios";
import { useEffect, useState } from "react";

//todo: Import d'images à revoir (si possible)
import Alex from "../img/Alex.png";
import Gluck from "../img/Gluck.jpg";
import Bubbule from "../img/Bubbule.jpg";
import Narnia from "../img/Narnia.jpg";
import React from "react";

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
          <img src={product.img} className="img-furniture" alt={product.alt} />
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
