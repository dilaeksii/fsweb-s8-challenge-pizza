import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import OrderPage from "./components/OrderPage";
import HomePage from "./components/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SuccessPage from "./components/Successpage";


function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <Router>
      <Switch>  
        <Route exact path="/" component={HomePage} />
        <Route path="/order" render={(props) => (
            <OrderPage {...props} setOrderData={setOrderData} />
          )} />
        <Route path="/success" render={(props) => (
            <SuccessPage {...props} orderData={orderData} />
          )} />
      </Switch>
    </Router>
  );
}

export default App;
