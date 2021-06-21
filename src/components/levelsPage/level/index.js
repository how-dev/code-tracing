import React from "react";
import { Link } from "react-router-dom"
import "./index.css"
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const LevelButton = withStyles(() => ({
    root: {
            color: "#000",
        backgroundColor: "#29D6FC",
        borderColor: "#29D6FC",
        '&:hover': {
            backgroundColor: "#1da7c7",
            borderColor: "#1da7c7"
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    }
}));

const Level = ({ LevelTitle }) => {
    const levels = JSON.parse(localStorage.getItem("levels"))
    const classes = useStyles()
    return (
        <div className="levelBox">
            <h2>Nível {LevelTitle}</h2>

            <p>{levels && levels[LevelTitle] && "Concluído"}</p>
            <Link to={`loop${LevelTitle}`}>
                <LevelButton variant="contained" color="primary" className={classes.margin}>
                    {levels && levels[LevelTitle] ? "Refazer" : "Fazer"}
                </LevelButton>
            </Link>
        </div>
    )
}

export default Level
