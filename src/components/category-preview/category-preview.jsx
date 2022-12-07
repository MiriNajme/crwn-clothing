import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card";
import "./category-preview.scss";

const CategoryPreview = ({ title, products }) => {
    const showItems = (items) => {
        if (items.length <= 4) {
            return items;
        }
        return items.slice(0, 4);
    }
    return (
        <div className="category-preview-container">
            <h2>
                <Link className="title" to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className="preview">
                {showItems(products).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </div>
        </div >
    )
}

export default CategoryPreview;