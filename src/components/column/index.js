import React from "react";
import Input from "../input";
import "./index.css";

const Column = ({ column, key }) => {
    return (
        <div key={key} className="column">
            <p>{column.title}</p>
            {column.fields.map((fieldElt, fieldIndex) => {
                let tabIndex = fieldIndex + 1
                return (
                    <div key={fieldIndex}>
                        <Input
                            placeholder={column.title}
                            correctValue={fieldElt.response}
                            TabIndex={tabIndex}
                        />
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default Column;
