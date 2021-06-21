import React from "react";
import Column from "../../components/column";
import HeaderTable from "../../components/headerTable";
import "../index.css"

const Table = ({ columns, title }) => {


    return (
        <div className="table">
            <HeaderTable
                code={title.code}
                number={title.number}
                before={title.before}
                after={title.after}
            />
            <div className="cells">
                {
                    columns.map((column, index) => {
                        return (
                            <Column column={column} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Table;
