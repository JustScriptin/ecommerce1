import "./App.css";
import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import ShopAll from "./components/ShopAll/ShopAll";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/shopAll" component={ShopAll} />
      <Route path="/men" component={Men} />
      <Route path="/women" component={Women} />
    </div>
  );
}

export default App;
