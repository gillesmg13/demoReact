import '../App.css';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';

import "../styles/Layout.css"
import { useState } from 'react';

function App() {

  const [cart, updateCart] = useState([])

  return (<>
          <Banner />
          <div className='lmj-layout-inner'>
            <Cart cart={cart} updateCart={updateCart} />
            <ShoppingList cart={cart} updateCart={updateCart} />
          </div>
          <Footer />
          </>  
  );
}

export default App;
