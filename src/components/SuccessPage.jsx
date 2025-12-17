import team from "/images/iteration-1-images/home-banner.png";
import logo from "/images/iteration-1-images/logo.svg";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <section className="ordersuccess">
      <img src={logo} alt="" />
      <div className="commercial-success">
        <div className="order-top">TEBRİKLER!</div>
        <div className="order-main">
          SİPARİŞİNİZ ALINDI!
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;