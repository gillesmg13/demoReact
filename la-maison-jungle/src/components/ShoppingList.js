import { plantList } from '../datas/plantList'
import "../styles/ShoppingList.css"
import CareScale from './CareScale'
import PlantItem from './PlantItem'



function ShoppingList ({ cart, updateCart }) { 

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
        <p>Liste des categories</p>
        <ul>
            {categories.map((categ, index) => (
                <li key={ `${categ}-${index}` }>{ categ }</li>
                
            ))}
        </ul>
        <p>Liste des plantes</p>
        <ul className='lmj-plant-list'>
            {plantList.map((plant) => (
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