import React, { useState } from "react";
import kenzieLogo1 from "../../images/kenzie.png"
import "./index.css"
import {withStyles} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Level from "./level";

const LinksButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText("#7A00B4"),
        backgroundColor: "#7A00B4",
        '&:hover': {
            backgroundColor: "#660197",
        },
        padding: "20px 50px",
        borderRadius: "20px",
        fontWeight: "bold",
    },
}))(Button);

const LevelsPage = () => {
    const [size, Resize] = useState(window.innerWidth)
    window.addEventListener("resize", () => {Resize(window.innerWidth)})

    return (
        <main className="levelPageContainer">
            <section className="topLevelPage">
                <Link to="/">
                    <img alt="" src={kenzieLogo1}/>
                </Link>
                <div>
                    <p>Materiais para revisão</p>
                    <div>

                        <a className="levelsLinks" rel="noreferrer" target="_blank" href="https://alunos.kenzie.com.br/courses/43/assignments/6148?module_item_id=6771">
                            <LinksButton variant="contained" color="primary">
                                Loops (Canvas)
                            </LinksButton>
                        </a>

                        <a className="levelsLinks" rel="noreferrer" target="_blank" href="https://alunos.kenzie.com.br/courses/43/pages/demos">
                            <LinksButton variant="contained" color="primary">
                                Demos
                            </LinksButton>
                        </a>
                        <a className="levelsLinks" rel="noreferrer" target="_blank" href="https://developer.mozilla.org/pt-BR/">
                            <LinksButton variant="contained" color="primary">
                                Documentação
                            </LinksButton>
                        </a>
                    </div>
                </div>
            </section>
            <section className="levels">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level, index) => {
                    return (
                        <Level LevelTitle={level} key={index}/>
                    )
                })}
            </section>
        </main>
    )
}

export default LevelsPage
