import React from "react";
import "./index.css"
import {Link} from "react-router-dom";

const HeaderTable = ({ code, number, before, after }) => {
    return (
        <div className="headerTable">
            <h2>
                {number}
                <Link to={`/loop${before}`}>
                    <button>Anterior</button>
                </Link>
                <Link to={`/loop${after}`}>
                    <button>Próximo</button>
                </Link>
            </h2>
            <pre>
                {code}
            </pre>
        </div>
    )
}

export default HeaderTable;
