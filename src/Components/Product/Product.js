import React from 'react';
import Rating from 'react-rating';
import './Product.css';

const Product = (props) => {
    console.log(props)
    const {name, img, seller, price, stock, star} = props.product;
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
                <Rating
                initialRating={star}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                ></Rating>
                <br />
                <button
                onClick={() => props.handleAddToCart(props.product)} className="cart-btn">add to cart</button>
            </div>
        </div>
    );
};

export default Product;