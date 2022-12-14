import React from "react";
import DirectoryItem from "../directory-item/directory-item";

import "./directory.scss";

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            categories: [{
                title: "hats",
                imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
                id: 1,
                route: "shop/hats"
            },
            {
                title: "jackets",
                imgUrl: "https://i.ibb.co/px2tCc3/jackets.png",
                id: 2,
                route: "shop/jackets"
            },
            {
                title: "sneakers",
                imgUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
                id: 3,
                route: "shop/sneakers"
            },
            {
                title: "women",
                imgUrl: "https://i.ibb.co/GCCdy8t/womens.png",
                id: 4,
                size: 'large',
                route: "shop/women"
            },
            {
                title: "men",
                imgUrl: "https://i.ibb.co/R70vBrQ/men.png",
                id: 5,
                size: 'large',
                route: "shop/men"
            }]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.categories.map((category) => (
                    <DirectoryItem key={category.id} category={category} />
                ))}
            </div>
        );
    }
}



export default Directory;