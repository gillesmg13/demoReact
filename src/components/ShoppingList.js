import { plantList } from '../datas/plantList'
import "../styles/ShoppingList.css"
import Categories from './Categories'
import PlantItem from './PlantItem'

function ShoppingList ({ cart, updateCart, activeCategorie, setActiveCategorie }) { 

/*     const [activeCategorie, setActiveCategorie] = useState('')
 */
    const categories = plantList.reduce(
        (tab, elem) =>  tab.includes(elem.category) ? tab : tab.concat(elem.category) ,
        []
    )

    function addToCart(name, prix) {
        const currentPlantAdded = cart.find((elem) => elem.name === name)
        
        // Si la plante est dejà dans le panier
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter(
                (elem) => elem.name !== name
            )

            // spread operator ...
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, prix, amount: currentPlantAdded.amount + 1}
            ])
        }
        // Sinon on ajoute la plante dans le panier
        else {
            updateCart([
                ...cart,
                { name, prix, amount: 1}
            ])
        }
    }

    return (
        <div className='lmj-shopping-list'>

        <Categories
            setActiveCategorie={setActiveCategorie}
            categories={categories}
            activeCategorie={activeCategorie} />
        
        <ul className='lmj-plant-list'>
            {plantList.map((plant) => (
                // -- filtre d'affichage en fonction de l'activeCategorie
                !activeCategorie || activeCategorie === plant.category
                ?
                <div key={plant.id}>            
                    { <PlantItem
                        name={plant.name}
                        cover={plant.cover}
                        id={plant.id}
                        light={plant.light}
                        water={plant.water}
                        prix={plant.prix} /> }
                    <button onClick={() => addToCart(plant.name, plant.prix)}>Ajouter</button>
                </div>
                : null                     
                /* 
                { plant.isBestSale && <span>🔥</span> }
                { plant.isSpecialOffer && <span className='lmj-sales'>Soldes</span>}
                 */
            ))}
        </ul>
        </div>
)
}

export default ShoppingList