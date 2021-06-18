import "./App.css";

import { Switch } from "react-router-dom";
import { Routes, Links } from "./routes";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Links />
        </div>
        <Switch>
          <Routes />
        </Switch>
      </header>
    </div>
  );
};

export default App;
