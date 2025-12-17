import Footer from "./formcomponents/Footer";
import Header from "./formcomponents/Header";
import Notes from "./formcomponents/Notes";
import PizzaForm from "./formcomponents/PizzaForm";
import Title from "./formcomponents/Title";
import { useHistory } from "react-router-dom";

const OrderPage = () => {
  const history = useHistory();
  const handleOrderSubmit = (e) => {
    // burada validasyon + axios post (varsa)
    e.preventDefault();
    history.push("/success");
  };

  return (
    <>
      <Header />
      <Title />
      <PizzaForm /> 
      <Notes />
      <Footer handleOrderSubmit={handleOrderSubmit}/>
    </>
  );
};

export default OrderPage;