import {Link, Route} from "react-router-dom";
import Table from "../exercises/table/table";
import Input from "../components/input";
import { exerciseOne, exerciseOneTitle } from "../exercises/columns/columns";
import { exerciseTwo, exerciseTwoTitle } from "../exercises/columns/columns";
import { exerciseThree, exerciseThreeTitle } from "../exercises/columns/columns";
import { exerciseFour, exerciseFourTitle } from "../exercises/columns/columns";
import { exerciseFive, exerciseFiveTitle } from "../exercises/columns/columns";
import { exerciseSix, exerciseSixTitle } from "../exercises/columns/columns";
import { exerciseSeven, exerciseSevenTitle } from "../exercises/columns/columns";
import { exerciseEight, exerciseEightTitle } from "../exercises/columns/columns";
import { exerciseNine, exerciseNineTitle } from "../exercises/columns/columns";
import { exerciseTeen, exerciseTeenTitle } from "../exercises/columns/columns";
import "./index.css"

export const Routes = () => {
    return (
        <>
            <Route exact path="/">
                <h1>Lista de exercícios: Teste de mesa</h1>
            </Route>
            <Route path="/loop1">
                <h5>Caso não haja responsa, responda "-"</h5>
                <Table columns={exerciseOne} title={exerciseOneTitle} />
            </Route>
            <Route path="/loop2">
                <Table columns={exerciseTwo} title={exerciseTwoTitle} />
            </Route>
            <Route path="/loop3">
                <Table columns={exerciseThree} title={exerciseThreeTitle} />
                <Input correctValue={30} placeholder={"console.log(output)"} isOutput={true}/>
            </Route>
            <Route path="/loop4">
                <Table columns={exerciseFour} title={exerciseFourTitle} />
                <Input correctValue={255} placeholder={"console.log(output)"} isOutput={true}/>
            </Route>
            <Route path="/loop5">
                <h5>Caso não haja responsa, responda "-"</h5>
                <Table columns={exerciseFive} title={exerciseFiveTitle} />
            </Route>
            <Route path="/loop6">
                <Table columns={exerciseSix} title={exerciseSixTitle} />
                <Input correctValue={12} placeholder={"console.log(output)"} isOutput={true}/>
            </Route>
            <Route path="/loop7">
                <Table columns={exerciseSeven} title={exerciseSevenTitle} />
                <Input correctValue={"NaN"} placeholder={"console.log(output)"} isOutput={true}/>
            </Route>
            <Route path="/loop8">
                <Table columns={exerciseEight} title={exerciseEightTitle} />
                <Input correctValue={312} placeholder={"console.log(output)"} isOutput={true}/>
            </Route>
            <Route path="/loop9">
                <Table columns={exerciseNine} title={exerciseNineTitle} />
                <Input correctValue={1} placeholder={"console.log(output)"} isOutput={true}/>
            </Route>
            <Route path="/loop10">
                <Table columns={exerciseTeen} title={exerciseTeenTitle} />
                <Input correctValue={-247895} placeholder={"console.log(output)"} isOutput={true}/>
            </Route>
        </>

    )
}

export const Links = () => {
    return (
        <div className="buttonContainer">
            <Link to="/loop1">
                <button>1</button>
            </Link>
            <Link to="/loop2">
                <button>2</button>
            </Link>
            <Link to="/loop3">
                <button>3</button>
            </Link>
            <Link to="/loop4">
                <button>4</button>
            </Link>
            <Link to="/loop5">
                <button>5</button>
            </Link>
            <Link to="/loop6">
                <button>6</button>
            </Link>
            <Link to="/loop7">
                <button>7</button>
            </Link>
            <Link to="/loop8">
                <button>8</button>
            </Link>
            <Link to="/loop9">
                <button>9</button>
            </Link>
            <Link to="/loop10">
                <button>10</button>
            </Link>
        </div>
    )
}
