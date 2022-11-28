import React from "react";
import MenuItem from "../menu-item/menu-item";

import "./directory.scss";

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            categories: [{
                title: "hats",
                imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
                id: 1,
                linkUrl: "hats"
            },
            {
                title: "jackets",
                imgUrl: "https://i.ibb.co/px2tCc3/jackets.png",
                id: 2,
                linkUrl: ""
            },
            {
                title: "sneakers",
                imgUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
                id: 3,
                linkUrl: ""
            },
            {
                title: "women",
                imgUrl: "https://i.ibb.co/GCCdy8t/womens.png",
                id: 4,
                size: 'large',
                linkUrl: ""
            },
            {
                title: "men",
                imgUrl: "https://i.ibb.co/R70vBrQ/men.png",
                id: 5,
                size: 'large',
                linkUrl: ""
            }]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.categories.map((category) => (
                    <MenuItem key={category.id} category={category} />
                ))}
            </div>
        );
    }
}



export default Directory;