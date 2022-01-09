function handleClick(scaleValue, careType) {

    let qte = ""
    switch (scaleValue) {
        case 1:
            qte = "peu"
            break
        case 2:
            qte = "modérement"
            break
        case 3:
            qte = "beaucoup"
            break
        default:
            break
    }

    let typeBesoin = careType === 'light' ? " de lumière" : " d'eau"
    let msg = "Cette plante requiert " + qte + typeBesoin

    alert(`${msg}`)
}


function CareScale(props) {
    const range = [1, 2, 3]

    const {scaleValue, careType} = props
    const scaleType = careType === 'light' ? '☀️' : '💦'

    return <div>
        {range.map((rangeElem) => 
            scaleValue >= rangeElem ? <span key={rangeElem.toString()} onClick={() => handleClick(scaleValue, careType)}>{ scaleType } </span> : null
        )}
        </div>
}

export default CareScale