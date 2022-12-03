import CustomButton from "../custom-button/custom-button";

import "./cart-dropdown.scss";

const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items"></div>
            <CustomButton>go to checkout</CustomButton>
        </div>

    );

}

export default CartDropdown;