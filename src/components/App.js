import '../App.css';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';

import logo from '../assets/logo.png'

import '../styles/Layout.css'
import '../styles/Banner.css'

import { useEffect, useState } from 'react';

function App() {
 
  /* -- Gestion sauvegarde et lecture du cart via le localStorage ----------- */
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  /* ----------------------------------------------------------------------- */

  /* -- Comportement sans localStorage ------------------------------------- * /
  const savedCart = undefined
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  /* ----------------------------------------------------------------------- */

  const [activeCategorie, setActiveCategorie] = useState('')

  return (<>
          <Banner className='lmj-banner-row'>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>La Maison Jungle</h1>
          </Banner>
          <div className='lmj-layout-inner'>
            <Cart
              cart={cart}
              updateCart={updateCart}
              activeCategorie={activeCategorie}
              setActiveCategorie={setActiveCategorie} />
            <ShoppingList
              cart={cart}
              updateCart={updateCart}
              activeCategorie={activeCategorie}
              setActiveCategorie={setActiveCategorie} />
          </div>
          <Footer />
          </>  
  );
}

export default App;
