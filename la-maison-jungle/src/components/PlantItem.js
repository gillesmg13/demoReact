import CareScale from "./CareScale"
import "../styles/PlantItem.css"

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Trés bon choix`)
}

function PlantItem (props) {

    const {name, cover, id, light, water} = props
    // onClick={() => handleClick(name)}
    return (<li key={id}  className='lmj-plant-item' >            
                <img src={cover} className='lmj-plant-item-cover' alt={`${name}`} />
                { name }
                <div>
                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />
                </div>
            </li>)
}

export default PlantItem