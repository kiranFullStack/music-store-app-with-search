import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Products from './components/Products'
import productData from './products.json'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState(productData)

  // ! getting lat long data to add complexity ❌❌❌❌
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
        },
        (error) => {
          console.error(error)
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }, [])
  // ! getting lat long data ❌❌❌❌

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
      {/* // TODO: Remove display:none to see the component */}

      <div style={{ display: 'none' }}>
        <Header handleSearch={handleSearch} />
        <Products
          products={products}
          latitude={latitude}
          longitude={longitude}
        />
      </div>
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
            <button onClick={() => window.open(`https://web.whatsapp.com/send?phone=918722978015&text=Please send ${product.name}, my location is https://www.google.com/maps?q=${latitude},${longitude}&app_absent=0`)}>Buy on Whatsapp</button>
          </div>
        ))}
      </div>
      <div>
        <p>&copy; 2023 Kiran</p>
        <a
          href='https://github.com/kiranFullStack/music-store-app-with-search'
          target='_blank'
          rel='noreferrer'>
          ⭐️⭐️⭐️CODE👨🏽‍💻⭐️⭐️⭐️
        </a>
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default App
