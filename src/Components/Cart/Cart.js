import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const shipping = 15;
    const tax = (total + shipping) * 10
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
                <h3>Items ordered: {props.cart.length}</h3>
                <br />
                <p>Shipping: {shipping}</p>
                <p>Tax: {tax.toFixed(2)}</p>
                <p>Grand Total: {grandTotal.toFixed(2)}</p>
                <p>Total: {total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;