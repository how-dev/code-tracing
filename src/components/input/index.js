import React, {useState} from "react";
import "./index.css"

const Input = ({ correctValue, placeholder, isOutput = false, TabIndex }) => {
    const [valueInput, setValueInput] = useState("")

    const changeValue = e => {
        console.log(valueInput)
        setValueInput(e.target.value)
    }

    return (
        <input
            className={
                valueInput.toString() === correctValue.toString() ?
                    "correctInput" :
                    "incorrectInput"
            }
            style={isOutput ? {width: "300px", marginTop: 5} : {}}
            placeholder={placeholder}
            onChange={changeValue}
            tabIndex={TabIndex}
        />
    )
}

export default Input
