import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props)
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product-all">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h1 className="product-name">{name}</h1>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button
                onClick={() => props.handleAddToCart(props.product)} className="cart-btn">add to cart</button>
            </div>
        </div>
    );
};

export default Product;