import React    from 'react';
import ViewCart from './ViewCart';

import './Product.css';

class Header extends React.Component {

  render() {
    return (
      <div className='jumbotron'>
        <h1 className='display-4'>TV Product Shop</h1>
        <p>Expect More. Pay Less!</p>
        <ViewCart cart={this.props.cart} />
      </div>
    );
  }

}

export default Header;