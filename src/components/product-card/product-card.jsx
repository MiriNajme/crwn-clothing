import { useContext } from "react";
import CustomButton from "../custom-button/custom-button";
import { CartContext } from "../contexts/cart.context";

import "./product-card.scss";


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCard = () => addItemToCart(product);
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price} $</span>
            </div>
            <CustomButton buttonType="inverted" onClick={addProductToCard}>Add to card</CustomButton>
        </div>
    );
}

export default ProductCard;