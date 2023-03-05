import React from 'react'

export default function Products({ products, latitude, longitude }) {
  return (
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
          <button onClick={() => window.open(`https://web.whatsapp.com/send?phone=8722978015&text=Please send ${product.name}, my location is https://www.google.com/maps?q=${latitude},${longitude}&app_absent=0`)}>Buy on Whatsapp</button>
        </div>
      ))}
    </div>
  )
}
