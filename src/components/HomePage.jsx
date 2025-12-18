import team from "/images/iteration-1-images/home-banner.png";
import logo from "/images/iteration-1-images/logo.svg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
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
      <div className="pills-tab">
        <a className="pills-ramen-tab" href="#">
          <img src="/images/iteration-2-images/icons/1.svg" alt="" />
          YENİ! Kore
        </a>
        <a className="pills-pizza-tab" href="#">
          <img src="/images/iteration-2-images/icons/2.svg" alt="" />
          Pizza
        </a>
        <a className="pills-burger-tab" href="#">
          <img src="/images/iteration-2-images/icons/3.svg" alt="" />
          Burger
        </a>
        <a className="pills-frenchfries-tab" href="#">
          <img src="/images/iteration-2-images/icons/4.svg" alt="" />
          French Fries
        </a>
        <a className="pills-fatsfood-tab" href="#">
          <img src="/images/iteration-2-images/icons/5.svg" alt="" />
          Fast Food
        </a>
        <a className="pills-softdrinks-tab" href="#">
          <img src="/images/iteration-2-images/icons/6.svg" alt="" />
          Soft Drinks
        </a>
      </div>
      <div className="hometab" style={{backgroundColor: "#FAF7F2"}}>
      <div className="home">
        <div className="left" style={{ color: "white" }}>
          <h1 style={{ fontFamily: "Quattrocento", fontSize: "4rem" }}>
            Özel
            <br />
            Lezzetus
          </h1>
          <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
            Position:Absolute Acı Burger
          </p>
          <div className="btn-order">
            <a
              href="#"
              style={{
                  backgroundColor: "white",
                  borderRadius: "3rem",
                  textDecoration: "none",
                  color: "#CE2829",
                }}
            >
              Sipariş Ver
            </a>
          </div>
        </div>
        <div className="right" style={{ color: "white" }}>
          <div className="right-top">
            <p style={{ fontSize: "2rem" }}>
              Hackathlon <br /> Burger Menü
            </p>
            <div className="btn-order">
              <a
                href="#"
                style={{
                  backgroundColor: "white",
                  borderRadius: "3rem",
                  textDecoration: "none",
                  color: "#CE2829",
                }}
              >
                Sipariş Ver
              </a>
            </div>
          </div>
          <div className="right-bottom">
            <div className="btn-bottom">
              <p style={{ color: "#CE2829", fontSize: "1.75rem" }}>
                Çoooook{" "}
                <span style={{ color: "black", fontSize: "1.75rem" }}>
                  hızlı npm gibi kurye
                </span>
              </p>
              <a
                href="#"
                style={{
                  backgroundColor: "white",
                  borderRadius: "3rem",
                  textDecoration: "none",
                  color: "#CE2829",
                }}
              >
                Sipariş Ver
              </a>
            </div>
            <img src="public/3.png.png" alt="" />
          </div>
        </div>
      </div>
      <div className="middlePart">
          <p style={{ color: "#CE2829", fontFamily: "Pacifico", fontSize: "1.5rem" }}>
            en çok paketlenen menüler
          </p>
          <p style={{ fontFamily: "Londrina Solid", fontSize: "2rem" }}>
            Acıktıran Kodlara Doyuran Lezzetler
          </p>
        </div>
        <div className="tabtab">
      <a className="ramen-tab" href="#"><img src="/images/iteration-2-images/icons/1.svg" alt=""/>Ramen</a>
      <a className="pizza-tab" href="#"><img src="/images/iteration-2-images/icons/2.svg" alt=""/>Pizza</a>
      <a className="burger-tab" href="#"><img src="/images/iteration-2-images/icons/3.svg" alt=""/>Burger</a>
      <a className="frenchfries-tab" href="#"><img src="/images/iteration-2-images/icons/4.svg" alt=""/>French Fries</a>
      <a className="fatsfood-tab" href="#"><img src="/images/iteration-2-images/icons/5.svg" alt=""/>Fast Food</a>
      <a className="softdrinks-tab" href="#"><img src="/images/iteration-2-images/icons/6.svg" alt=""/>Soft Drinks</a>
   </div>
   <div className="food-tabs">
    <div className="terminalpizza-tab">
      <img src="/images/iteration-2-images/pictures/food-1.png" alt=""/>
      <div>
        <p style={{fontSize: "1.5rem"}}>Terminal Pizza</p>
        <div className="price"><p>4.9</p> <p>(200)</p> <p><b>60₺</b></p></div>
      </div>
    </div>
    <div className="absolutepizza-tab">
      <img src="/images/iteration-2-images/pictures/food-2.png" alt=""/>
      <div>
        <p style={{fontSize: "1.5rem"}}>Position Absolute Acı Pizza</p>
        <div className="price"><p>4.9</p> <p>(200)</p> <p><b>60₺</b></p></div>
      </div>
    </div>
    <div className="burger-tab">
      <img src="/images/iteration-2-images/pictures/food-3.png" alt=""/>
      <div>
        <p style={{fontSize: "1.5rem"}}>useEffect Tavuklu Burger</p>
        <div class="price"><p>4.9</p> <p>(200)</p> <p><b>60₺</b></p></div>
      </div>
    </div>
   </div>
   </div>
   <footer>
    <div className="maindiv">
      <div className="tekfood">
        <h2 style={{fontFamily: "Roboto Condensed"}}>Teknolojik Yemekler</h2>
        <ul className="info">
          <li className="address">341 Londonderry Road, Istanbul Türkiye</li>
          <li className="mail">aciktim@teknolojikyemekler.com</li>
          <li className="phone">+90 216 123 45 67</li>
        </ul>
      </div>
      <div className="hotmenu">
        <p>Hot Menu</p>
        <ul className="menu">
          <li>Terminal Pizza</li>
          <li>5 Kişilik Hackathlon Pizza</li>
          <li>useEffect Tavuklu Pizza</li>
          <li>Beyaz Console Frosty</li>
          <li>Testler Geçti Mutlu Burger</li>
          <li>Position Absolute Acı Burger</li>
        </ul>
      </div>
      <div className="instagram">
        <p>Instagram</p>
        <div className="photos">
          <ul className="insta-photos">
            <li><img src="images/iteration-2-images/footer/insta/li-0.png" alt=""/></li>
            <li><img src="images/iteration-2-images/footer/insta/li-1.png" alt=""/></li>
            <li><img src="images/iteration-2-images/footer/insta/li-2.png" alt=""/></li>
            <li><img src="images/iteration-2-images/footer/insta/li-3.png" alt=""/></li>
            <li><img src="images/iteration-2-images/footer/insta/li-4.png" alt=""/></li>
            <li><img src="images/iteration-2-images/footer/insta/li-5.png" alt=""/></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2023 Teknolojik Yemekler.</p>
      <i className="fa-brands fa-twitter" style={{color: "white"}}></i>
    </div>
   </footer>
    </>
  );
};

export default HomePage;
