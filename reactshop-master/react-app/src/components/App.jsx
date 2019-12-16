import React        from 'react';
import ProductsList from './ProductList';
import Header       from './Header';
import TryTable     from './TryTable';
import Footer       from './Footer';
import Slider       from './Slider';
import Stripe       from './Stripe';
import Cart         from '../lib/Cart';

class App extends React.Component {

  // Note the cart object is just a vanilla JS
  // custom type (see lib/Cart.js)
  state = {
    cart : new Cart()
  }

  // Render
  render() {
    return (
      <div className='App'>
        <Header cart={this.state.cart} />
        <ProductsList cart={this.state.cart} />
        <Stripe />
        <center><h1>SOME OTHER PRODUCTS AVAILABLE</h1></center>
        <TryTable />
        <Slider />
        <Footer />
       
      </div>
    );
  }
}

export default App;
