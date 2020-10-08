import React, { Component } from "react";
import "./directory.style.css";
import MenuItem from "../menu-item/menuItem.component";

class Container extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          subtitle: "shop now",
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          subtitle: "shop now",
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          subtitle: "shop now",
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          subtitle: "shop now",
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          subtitle: "shop now",
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        {this.state.sections.map(({ title, subtitle, imageUrl, id, size }) => (
          <MenuItem
            key={id}
            title={title}
            subtitle={subtitle}
            imageUrl={imageUrl}
            size={size}
          />
        ))}
      </div>
    );
  }
}

export default Container;
