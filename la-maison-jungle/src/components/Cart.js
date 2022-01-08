import '../styles/Cart.css'

const prixMonstera = 8
const prixLierre = 10
const prixBouquet = 15

const Item = (props) =>
    (<span>{ props.lbl } { props.prix } €</span>)



const Cart = () => (
    <div className='lmj-cart'>
        <h3>Panier</h3>
        <ul>
            <li><Item lbl="monstera" prix={ prixMonstera } /></li>
            <li><Item lbl="lierre" prix={ prixLierre } /></li>
            <li><Item lbl="Bouquet de fleurs" prix={ prixBouquet } /></li>
        </ul>
        <p>
        Total : { prixBouquet + prixLierre + prixMonstera }
        </p>
    </div>
)

export default Cart;