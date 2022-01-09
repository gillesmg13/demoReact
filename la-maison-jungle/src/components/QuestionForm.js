import { useState } from 'react'

function QuestionForm() {  
    const [inputvalue, setInputValue] = useState('Posez votre question ici')

    const checkValue = (value) => {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }

    return (
        <div>
            <textearea
                value={inputvalue}
                onChange={(e) => checkValue(e.target.value) }
            />
        </div>
    )
}

export default QuestionForm