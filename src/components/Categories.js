import "../styles/Categories.css"

function Categories ({ setActiveCategorie, categories, activeCategorie }) {

    return (
        <div className='lmj-categories'>
            <select
                id="selected-categ"
                onChange={(e) => setActiveCategorie(e.target.value)}
                value={ activeCategorie }
                className='lmj-categories-select'
            >
                <option key='reset' value=''>Toutes</option>
                {categories.map((categ) => (
                    <option key={categ} value={categ}>{ categ }
                    </option>                      
                ))}
            </select>
            <button onClick={() => setActiveCategorie('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories