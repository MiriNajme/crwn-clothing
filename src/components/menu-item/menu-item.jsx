import React from "react";
// import { withRouter } from "react-router-dom";
import "./menu-item.scss";

const MenuItem = ({ category }) => {
    const { imgUrl, title, size, linkUrl } = category;
    console.log(category, title);
    return (
        <div className={`${size} menu-item`}>
            <div className="background-image" style={{ backgroundImage: `url(${imgUrl})` }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}
export default MenuItem;