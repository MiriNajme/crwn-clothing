import React from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
    const { imgUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imgUrl={imgUrl} />
            <Body>
                <h2>{title.toUpperCase()}</h2>
                <p>SHOP NOW</p>
            </Body>
        </DirectoryItemContainer>
    )
}
export default DirectoryItem;