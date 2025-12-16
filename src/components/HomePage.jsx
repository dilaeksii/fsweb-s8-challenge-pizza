import Footer from "./formcomponents/Footer";
import Header from "./formcomponents/Header";
import Notes from "./formcomponents/Notes";
import PizzaForm from "./formcomponents/PizzaForm";
import Title from "./formcomponents/Title";

const HomePage = () => {
  return (
    <>
      <Header />
      <Title />
      <PizzaForm /> 
      <Notes />
      <Footer />
    </>
  );
};

export default HomePage;
