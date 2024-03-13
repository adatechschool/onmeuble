//! Imports (IMPORTANT )

import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";

function ListArticle() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/products");
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
