import CustomButton from "../custom-button/custom-button";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import CartItem from "../cart-item/cart-item";

import "./cart-dropdown.scss";

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <CustomButton>go to checkout</CustomButton>
        </div>

    );

}

export default CartDropdown;