import React from "react";

import "./cart-item.scss";

const CartItem = ({ cartItem }) => {
    const { name, quantity } = cartItem;
    return (
        <div>
            <h1>{name}</h1>
            <span>{quantity}</span>
        </div>
    );
}

export default CartItem;