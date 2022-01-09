import '../styles/Cart.css'
import { useEffect, useState } from 'react'

function Cart({ cart, updateCart, activeCategorie, setActiveCategorie }) {
    
    const [isOpen, setIsOpen] = useState(false)

    // calcul du total au top!! acc == accumulateur avec la fonction reduce; acc valeur initiale 0
    const total = cart.reduce(
        (acc, elem) => acc + elem.amount * elem.prix,
        0
    )
        
    useEffect(() => 
    {
        document.title = `LMJ: ${total}€ d'achats`
/*         alert(`Votre panier est d'un montant de ${total}€ 💳`)
 */    },
    [total, activeCategorie])

    return isOpen ? (
        
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)} >Fermer</button>
            <h3>Panier</h3>
            <ul>
            { cart.map((element, index) => (
                <li key={`${element.name}-${index}`}>{element.amount} {element.name} {element.prix}€</li>
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