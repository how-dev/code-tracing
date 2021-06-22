import React, { useState } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import kenzieLogo1 from "../../images/kenzie.png"
import devLogo from "../../images/image.png"
import mobileLogo from "../../images/mobileImage.png"
import kenzieLogo2 from "../../images/kenzieLogo.png"

import "./index.css"

const StartButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText("#F53838"),
        backgroundColor: "#F53838",
        '&:hover': {
            backgroundColor: "#cb2c2c",
        },
        padding: "15px 70px",
        fontWeight: "bold",
    },
}))(Button);

const TopButton = withStyles(() => ({
    root: {
        color: "#F53838",
        backgroundColor: "transparent",
        borderColor: "#F53838",
        '&:hover': {
            backgroundColor: "#fad3d3",
            borderColor: "#F53838"
        },
        borderRadius: 100
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    }
}));

const HomePage = () => {
    const classes = useStyles();
    const [size, Resize] = useState(window.innerWidth)

    window.addEventListener("resize", () => {Resize(window.innerWidth)})

    return (
        <main className="container">
            <section className="topHomePage">
                <img alt="" src={kenzieLogo1} />
                <a  rel="noreferrer" target="_blank" href="https://alunos.kenzie.com.br/courses/43" className="canvasLink">
                    <TopButton variant="outlined" color="primary">
                        {size >= 1024 ? "Voltar ao Canvas" : <img alt="" src={kenzieLogo2} />}
                    </TopButton>
                </a>
            </section>
            <section className="bodyHomePage">
                <div className="startHomePage">

                    <p>Dev, bora testar o seu raciocínio com o teste de mesa??</p>
                    <Link to="/levels" style={{textDecoration: "none"}}>
                        <StartButton variant="contained" color="primary" className={classes.margin}>
                            Começar
                        </StartButton>
                    </Link>
                </div>
                {size <= 1024 && <h4 style={{color: "black"}}>Code Tracing</h4>}
                <img alt="" src={size >= 1024 ? devLogo : mobileLogo}/>
            </section>
        </main>
    )
}

export default HomePage
