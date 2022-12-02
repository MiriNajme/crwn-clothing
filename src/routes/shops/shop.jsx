import { useContext } from "react";
// import CollectionPreview from "../../components/collection-preview/collection-preview";
import { ProductContext } from "../../components/contexts/products.context";
import ProductCard from "../../components/product-card/product-card";

import "./shop.scss";

const Shop = () => {
    const { products } = useContext(ProductContext);
    return (

        <div className="products-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>

    );
}

export default Shop;

