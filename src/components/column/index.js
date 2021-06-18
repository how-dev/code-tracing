import React from "react";
import Input from "../input";
import "./index.css";

const Column = ({ column, key }) => {
    return (
        <div key={key} className="column">
            <p>{column.title}</p>
            {column.fields.map((fieldElt, fieldIndex) => {
                return (
                    <div key={fieldIndex}>
                        <Input
                            placeholder={column.title}
                            correctValue={fieldElt.response}
                        />
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default Column;
