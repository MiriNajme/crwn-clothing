import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import CustomButton, { BUTTON_TYPE_CLASSES } from "../custom-button/custom-button";

import "./product-card.scss";


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addProductToCard = () => dispatch(addItemToCart(cartItems, product));

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price} $</span>
            </div>
            <CustomButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCard}>Add to card</CustomButton>
        </div>
    );
}

export default ProductCard;