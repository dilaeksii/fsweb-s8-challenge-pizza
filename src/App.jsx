import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";
import OrderPizzaHeader from "./components/OrderPizzaHeader";
import OrderPizzaMain from "./components/OrderPizzaMain.jsx";
import OrderPizzaForm from "./components/OrderPizzaForm.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <OrderPizzaHeader />
      <OrderPizzaMain />
      <OrderPizzaForm />
  
    </>
  );
}

export default App;
