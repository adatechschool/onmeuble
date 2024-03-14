import React, { useState, useEffect } from "react";
import "./DetailsAdmin.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
// const fs = require('fs');
// import productAdminRoute from '../../../back/Routes/productAdminRoute.js';

// const targetpath = '../../../back/Routes/productAdminRoute.js';
// const symlinkPath = './DetailsAdmin.js';

// fs.symlink(targetpath, symlinkPath, function (err) {
//   if (err) throw err;
//   console.log('Symlink has been created');
// });

function DetailsAdmin() {
  const { id } = useParams(); // Récupère l'ID du produit à partir des paramètres d'URL
  const [product, setProduct] = useState({}); // État pour stocker les détails du produit
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/products/${id}`);
            console.log("Response data:", response.data);
            
            if (response.data && response.data.length > 0) {
                setProduct(response.data[0]); // Utilisez le premier élément s'il y en a plusieurs
            } else {
                setError("Impossible de trouver le produit.");
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des détails du produit:", error);
            setError("Une erreur est survenue lors de la récupération des détails du produit.");
        }
    };

    fetchProductDetails();
  }, [id]);

  if(error) {
    return <div>Erreur : {error}</div>;
  }

  if(product === null) {
    return <div>Chargement...</div>;
  }

  if(!product.id) {
    return <div>Erreur : Impossible de trouver le produit.</div>;
  }

  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   setProduct({
  //     ...product,
  //     image: file,
  //   });
  // };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/products/${id}`, product);
      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du produit:", error);
    }
  };

  return (
    <div className="admin">
      <h1 className="adminpage">Page de modification des détails</h1>
      <p className="paraAdmin">Changez les propriétés ici</p>
      <form className="adminForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Nom:</label>
        <input 
          className="product"
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
        />
        <label className="productImg" htmlFor="image">Image:</label>
        {/* <input
          type="file"
          accept="image/*"
          // name="image"
          // onChange={handleImageChange}
        />
        {product.image && (
          // <img src={URL.createObjectURL(product.image)} alt="Product" />
        )} */}
        <img src={product.image} alt="Product" />
        <label className="desc" htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={product.alt}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in nunc sollicitudin, nec aliquam nunc tincidunt."
          onChange={handleInputChange}
        />
        <label className="price" htmlFor="price">Prix:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
        {/* <label className="productColor" htmlFor="image">Color:</label> */}
        <label htmlFor="color">Couleur:</label>
        <input
          type="text"
          name="color"
          value={product.colors.name_color}
          onChange={handleInputChange}
        />

        <label htmlFor="size">Taille:</label>
        <input
          type="text"
          name="size"
          value={product.dimensions}
          onChange={handleInputChange}
        />

        <label className="material" htmlFor="material">Matériaux: </label>
        <input
          type="text"
          name="material"
          value={product.materials.name_material}
          onChange={handleInputChange}
        />

        <button className="submitBtn" type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default DetailsAdmin;
