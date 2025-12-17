import team from "/images/iteration-1-images/home-banner.png";
import logo from "/images/iteration-1-images/logo.svg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="main">
      <img src={logo} alt="" />
      <div className="commercial-main">
        <div className="promo-top">fırsatı kaçırma</div>
        <div className="promo-main">
          KOD ACIKTIRIR<span>PIZZA, DOYURUR</span>
        </div>
        <div className="button">
          <Link to="/order">Acıktım</Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
