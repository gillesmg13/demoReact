import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommendation from './Recommendation'


const Banner = () => (
    <>
    <div className='lmj-banner'>
        <div className='lmj-banner-row'>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>La Maison Jungle</h1>
        </div>
        <Recommendation />
    </div>
    
    </>
)

/* 
Autre style sd'ecriture d'un composant:

function Banner() {
    return (
        <h1>La Maison Jungle</h1>
    )
}
*/


export default Banner