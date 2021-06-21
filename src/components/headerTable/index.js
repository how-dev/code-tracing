import React from "react";
import "./index.css"
import { Link } from "react-router-dom";
import kenzieLogo1 from "../../images/kenzie.png"
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const LinksButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText("#7A00B4"),
        backgroundColor: "#7A00B4",
        '&:hover': {
            backgroundColor: "#660197",
        },
        fontSize: 10,
        borderRadius: "20px",
        fontWeight: "bold",
    },
}))(Button);

const HeaderTable = ({ code, number, before, after }) => {
    return (
        <>
            <Link to="/levels">
                <img alt="" src={kenzieLogo1} className="logoKenzie"/>
            </Link>
            <h5>Caso não haja resposta, responda "-"</h5>
            <div className="headerTable">
                <h2>
                    {number}
                    <Link to={`/loop${before}`} style={{textDecoration: "none"}}>
                        <LinksButton variant="contained" color="primary">
                                Anterior
                        </LinksButton>
                    </Link>
                    <Link to={`/loop${after}`} style={{textDecoration: "none"}}>
                        <LinksButton variant="contained" color="primary">
                                Próximo
                        </LinksButton>
                    </Link>
                </h2>
                <pre>
                {code}
            </pre>
            </div>
        </>
    )
}

export default HeaderTable;
