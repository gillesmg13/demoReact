import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommendation from './Recommendation'

/*
const Banner = () => (
    <>
    <div className='lmj-banner-initial'>
        <div className='lmj-banner-row'>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>La Maison Jungle</h1>
        </div>
        <Recommendation />
    </div>
    
    </>
)
*/
/* - Autre style d'ecriture avec la props technique children: -------------- */
function Banner({ children }) {
    return (
        <div className='lmj-banner'>{children}</div>
    )
}
/* ------------------------------------------------------------------------- */


export default Banner