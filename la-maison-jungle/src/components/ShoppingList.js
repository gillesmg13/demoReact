import { plantList } from '../datas/plantList'
import "../styles/ShoppingList.css"
import CareScale from './CareScale'
import PlantItem from './PlantItem'

const categories = plantList.reduce(
    (tab, plant) => 
        tab.includes(plant.category) ? tab : tab.concat(plant.category) , []
)

const ShoppingList = () => (
        <>
        <p>Liste des categories</p>
        <ul>
            {categories.map((categ, index) => (
                <li key={ `${categ}-${index}` }>{ categ }</li>
                
            ))}
        </ul>
        <p>Liste des plantes</p>
        <ul className='lmj-plant-list'>
            {plantList.map((plant) => (
                              
                    <PlantItem
                        name={plant.name}
                        cover={plant.cover}
                        id={plant.id}
                        light={plant.light}
                        water={plant.water} />
                                      
                /* 
                { plant.isBestSale && <span>🔥</span> }
                { plant.isSpecialOffer && <span className='lmj-sales'>Soldes</span>}
                 */
            ))}
        </ul>
        </>
)

export default ShoppingList