//input-ի state-ToDoForm-wum պահպանվում են մեր input-ի state-ը(վիճակը)
import { useState } from 'react'
function ToDoForm({ addItem }) {
    const [userInput, setUserInput] = useState('')
    //is provided by writing to the input-սա ապահովում է որպեսզի input-ում կարողանանք գրել
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)//input-ում տեղի ունեցող իրադարձությունը(e) մենք կստանանք currentTarget-ի միջոցով ու իրանից կստանանք value-ն(արժեքը)
    }
    //Adding the current value of userInput to the list-e.preventDefault() ֆունկցիայի միջոցով ուղարկում ենք userInput-ի ընթացիկ արժեքը ցուցակի մեջ
    const handleSubmit = (e) => {
        e.preventDefault()
        addItem(userInput)//Կապված է Hook.js-ի հետ
        setUserInput("")//After save, the text written in Input is reset-երբ save ենք անում, input-ում գրված տեքստն է դուրս գալիս
    }

    return (

        //adding to the list-onSubmit={handleSubmit} սեղմելով save կնոպկան ներքևում ցուցակի տեսքով ավելացնում է input-ում գրվածը
        <form onSubmit={handleSubmit}>
            <input className='input1'
                value={userInput}
                type="text"
                onChange={handleChange}//input-ում գրելու ֆունկցիան է ապահովում
                placeholder="Enter to-dos..."
            />
            <button className='butt1'>Save</button>
        </form>
    )
}

export default ToDoForm