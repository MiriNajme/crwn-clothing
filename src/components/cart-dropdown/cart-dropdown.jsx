import CustomButton from "../custom-button/custom-button";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import CartItem from "../cart-item/cart-item";

import "./cart-dropdown.scss";

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const renderedItems = cartItems.map(item => <CartItem key={item.id} cartItem={item} />);
    console.log(cartItems, renderedItems)
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {renderedItems}
            </div>
            <CustomButton>go to checkout</CustomButton>
        </div>

    );

}

export default CartDropdown;