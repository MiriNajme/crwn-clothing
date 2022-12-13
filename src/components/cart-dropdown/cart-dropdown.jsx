import CustomButton, { BUTTON_TYPE_CLASSES } from "../custom-button/custom-button";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item";

import { CartDropDownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles";

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate(`./checkout`);
    }
    return (
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ?
                        (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)) :
                        (<EmptyMessage>Your cart is empty</EmptyMessage>)}
            </CartItems>
            <CustomButton buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckoutHandler}>go to checkout</CustomButton>
        </CartDropDownContainer>

    );

}

export default CartDropdown;