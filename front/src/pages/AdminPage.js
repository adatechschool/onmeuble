import React, { useState } from 'react'

function AdminPage() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    color: '',
    size: '',
  })

  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // send a request to the server to update the product
  }

  return (
    <div className='admin'>
      <h1>Admin Page</h1>
      <p>Welcome to the administrator page!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleInputChange}
        />

        <label htmlFor="image">color:</label>
        <input
          type="text"
          name="color"
          value={product.color}
          onChange={handleInputChange}
        />

<label htmlFor="price">size:</label>
        <input
          type="number"
          name="size"
          value={product.size}
          onChange={handleInputChange}
        />

        <label htmlFor="material">Material:</label>
        <input
          type="text"
          name="material"
          value={product.material}
          onChange={handleInputChange}
        />

        <button type="submit">Update Product</button>
      </form>
    </div>
  )
}

export default AdminPage