import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inCart: false };
  }

  handleAddToCartClick = () => {
    this.setState((prev) => ({ inCart: !prev.inCart }));
  };

  render() {
    const { name, category } = this.props;
    const { inCart } = this.state;

    return (
      <li className={inCart ? "in-cart" : ""}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button
          className={inCart ? "remove" : "add"}
          onClick={this.handleAddToCartClick}
        >
          {inCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    );
  }
}

export default Item;
