import '../styles/Cart.css'
import { useState } from 'react'

const prixLierre = 10
const prixBouquet = 15

const Item = (props) =>
    (<span>{ props.lbl } { props.prix } €</span>)



function Cart({ cart, updateCart }) {
    
    const [isOpen, setIsOpen] = useState(false)

    // calcul du total au top!! acc == accumulateur avec la fonction reduce; acc valeur initiale 0
    const total = cart.reduce(
        (acc, elem) => acc + elem.amount * elem.prix,
        0
    )
    //console.log("cart = ", cart)
    return isOpen ? (
        
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)} >Fermer</button>
            <h3>Panier</h3>
            <ul>
            { cart.map((element) => (
                <li>{element.amount} {element.name} {element.prix}€</li>
            ))}
            </ul>
            <p>Total : { total }€</p>
            <button onClick={() => updateCart([])} >Vider le panier</button>
        </div>
    ) : (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)} >
                Ouvrir le panier
            </button>
        </div>
    )
}

export default Cart;