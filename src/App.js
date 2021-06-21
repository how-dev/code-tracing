import "./App.css";

import { Switch } from "react-router-dom";
import { Routes } from "./routes";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Routes />
        </Switch>
      </header>
    </div>
  );
};

export default App;
