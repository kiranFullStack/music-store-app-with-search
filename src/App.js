import React, { useState, useEffect } from 'react'
import './App.css'
import productData from './products.json'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState(productData)

  useEffect(() => {
    // Filter products based on search term
    const filteredProducts = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setProducts(filteredProducts)
  }, [searchTerm])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className='App'>
      <div className='header'>
        <h1>Kiran's Music Store</h1>
        <input
          type='text'
          placeholder='Search products'
          onChange={handleSearch}
        />
      </div>
      <div className='product-list'>
        {products.map((product) => (
          <div
            className='product'
            key={product.id}>
            <img
              src={product.img}
              alt={product.name}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <button onClick={() => alert(`${product.name} added to Cart`)}>Add to cart</button>
          </div>
        ))}
      </div>
      <div className='footer'>
        <p>&copy; 2023 Kiran</p>
      </div>
    </div>
  )
}

export default App
