import React, { Component } from 'react';
import imgUrl from '../../assets/product_image_placeholder.png';
import './index.css';

class Product extends Component {
  render() {
    const {
      // eslint-disable-next-line react/prop-types
      product: { price, name },
      // eslint-disable-next-line react/prop-types
      id,
      // eslint-disable-next-line react/prop-types
      addToCart,
    } = this.props;

    return (
      <div className="product" id={'index' + id}>
        <strong className="name">{name}</strong>
        <br />
        <img src={imgUrl} alt="Product" />
        <br />
        <span className="price">{price}</span>
        <button className="add-to-cart" onClick={addToCart}>
          add to cart
        </button>
      </div>
    );
  }
}

export default Product;
