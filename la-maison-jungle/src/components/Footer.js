import { useState } from 'react'
import '../styles/Footer.css'

function handleClick (val) {
    console.log("Value=", val)
}

function Footer() {
	const [inputValue, setInputValue] = useState('')

    let forbiddenChars = ['*', '/', '\\', '!', '&', '#', '<', '>' ]

    const checkValue = (value) => {
        //console.log("[checkValue] value=", value)
        if (! forbiddenChars.find(element => value.includes(element))) {
            setInputValue(value)
        }
    }

    const checkAdr = (value) => {
        //console.log("[checkAdr] value=", value)
        if (! value.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide")
        }
    }


	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
                onBlur={(e) => checkAdr(e.target.value)} />
		</footer>
	)
}

export default Footer