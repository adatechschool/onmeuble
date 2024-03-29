//! Imports (IMPORTANT )
import './ProductAdmin.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
<div className='wrapper-table'>
    <table border="1" className="article-admin-container">
    <thead>
        <tr>
        <th>Articles</th>
        <th>Image</th>
        <th>Prix</th>
        </tr>
      </thead>

      <tbody>

      {products.map((product) => (
        

        <tr key={product.id}>
          <td>
            <p>{product.name}</p>
          </td>

          <td>
          <img src={product.image} className="img-admin-furniture" alt={product.alt} />
          </td>
          
          <td>
          <p className="price-admin-p">{product.price} €</p>
          </td>

          <td>

          <Link to={`/detailsAdmin/${product.id}`}>
            <button className="more">Voir plus</button>
          </Link>

          </td>

        </tr>

        
      ))}

      </tbody>
    </table>
    </div>
  );
}

export default ListArticle;
