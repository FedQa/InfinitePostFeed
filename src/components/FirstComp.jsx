import { useState } from "react"


export const FirstComp = () => {
    const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ');


    function handleValue(e) {
        setValue(e.target.value);
    }

    return (
        <div>
            <h1>{value}</h1>
            <input 
            type="text"
            value={value} 
            onChange={handleValue}
            />
        </div>
    )
}



