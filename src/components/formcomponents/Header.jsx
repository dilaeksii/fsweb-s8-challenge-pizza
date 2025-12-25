import { NavLink } from "react-router-dom";
import logo from "/images/iteration-1-images/logo.svg";
import banner from "/images/iteration-2-images/pictures/form-banner.png";

const Header = () => {
  return (
    <>
      <header className="formheader">
        <img src={logo} alt="" />
      </header>
      <section className="mainorder">
        <img src={banner} alt="" />
        <div className="container">
          <div className="links">
            <NavLink to="/" className="nav-link" activeClassName="active">
              Anasayfa
            </NavLink>
            -
            <NavLink
              to="/options"
              className="nav-link"
              activeClassName="active"
            >
              Seçenekler
            </NavLink>
            -
            <NavLink  to="/order" className="nav-link" activeClassName="active">
              Sipariş Oluştur
            </NavLink>
          </div>
          <p style={{ fontWeight: "bold" }}>Position Absolute Acı Pizza</p>
          <div class="food-meta">
            <span class="rating" style={{ fontWeight: "bold" }}>
              85₺
            </span>
            <span class="price">4.9</span>
            <span class="reviews">(200)</span>
          </div>
          <p className="paragragh">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir..Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
      </section>
    </>
  );
};

export default Header;
