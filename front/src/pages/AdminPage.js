import React, { useState } from "react";
import "./AdminPage.css";

function AdminPage() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
    color: "",
    size: "",
  });

  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setProduct({
      ...product,
      image: file,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send a request to the server to update the product
    console.log(product)
  };

  return (
    <div className="admin">
      <h1 className="adminpage">Admin Page</h1>
      <p className="paraAdmin">Welcome to the administrator page!</p>
      <form className="adminForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
          className="product"
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
        />
        <label className="productImg" htmlFor="image">Image:</label>
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={handleImageChange}
        />
        {product.image && (
          <img src={URL.createObjectURL(product.image)} alt="Product" />
        )}
        <label className="desc" htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
        <label className="price" htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
        <label className="productColor" htmlFor="image">Color:</label>
        <input
          type="text"
          name="color"
          value={product.color}
          onChange={handleInputChange}
        />

        <label htmlFor="price">Size:</label>
        <input
          type="number"
          name="size"
          value={product.size}
          onChange={handleInputChange}
        />

        <label className="material" htmlFor="material">Material:</label>
        <input
          type="text"
          name="material"
          value={product.material}
          onChange={handleInputChange}
        />

        <button className="submitBtn" type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default AdminPage;
