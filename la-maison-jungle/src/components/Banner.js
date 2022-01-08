import '../styles/Banner.css'
import logo from '../assets/logo.png'


const Banner = () => (
    <div className='lmj-banner'>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La Maison Jungle</h1>
    </div>
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