import React from 'react'
import './Product.css'

function Product({title,image,rating,price}) {
    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>₹ </small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
            {Array(rating).fill().map((_,i)=>( <p>⭐</p>))}
           
            <p>🌟</p>
            <p>🌟</p>
            </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg" alt=""/>

            <button>Add to Cart</button>
        </div>
    )
}

export default Product
