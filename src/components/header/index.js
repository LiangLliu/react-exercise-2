/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import CartNumber from '../cartNumber';
import './index.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Store</h1>
        <CartNumber cartNumber={this.props.cartNumber} />
      </div>
    );
  }
}

export default Header;
