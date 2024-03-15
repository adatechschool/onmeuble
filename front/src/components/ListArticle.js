//! Imports (IMPORTANT )

import "./ListArticle.css";
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
        <article className="article-list" key={product.id}>
          <h2 className="name-article">{product.name}</h2>
          <p className="type-article">{product.type}</p>
          <a href className="frame" target="_blank">
            <img
              src={product.image}
              className="img-furniture"
              alt={product.alt}
            />
          </a>
          <div className="footer-list">
            <Link to={`/products/${product.id}`}>
              <button className="buy">Voir plus</button>
            </Link>
            <p className="price center-price">{product.price} €</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ListArticle;
