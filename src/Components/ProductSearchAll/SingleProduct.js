import React from 'react'
import './SingleProduct.css'
const SingleProduct = ({product}) => {
    return (

<div className="gallery">
      <div className="content" >
        <img className="product__img"src={product.image} alt="wait"/>
        <h3 className="product__h3">{product.name}</h3>
        <p className="product__p">{product.description}</p>
        <h6 className="product__h6">{product.price} MAD</h6>
      </div>
      </div>
       
    )
}

export default SingleProduct
