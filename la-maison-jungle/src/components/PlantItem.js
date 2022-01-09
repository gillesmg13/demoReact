import CareScale from "./CareScale"
import "../styles/PlantItem.css"

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Trés bon choix`)
}

function PlantItem (props) {

    const {name, cover, id, light, water, prix} = props
    // onClick={() => handleClick(name)}
    return (<div key={id}  className='lmj-plant-item' >
                <div className='lmj-plant-item-prix'>
                    { prix }€
                </div>          
                <img src={cover} className='lmj-plant-item-cover' alt={`${name}`} />
                { name }
                <div>
                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />
                </div>
                
            </div>)
}

export default PlantItem