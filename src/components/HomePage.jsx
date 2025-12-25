import team from "/images/iteration-1-images/home-banner.png";
import logo from "/images/iteration-1-images/logo.svg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section className="mainPage">
        <img src="images/iteration-2-images/footer/logo-footer.svg" alt="" />
        <div className="campaign">
          <p
            style={{ color: "#fdc913", fontStyle: "italic", fontSize: "2rem" }}
          >
            fırsatı kaçırma
          </p>
          <p
            style={{
              fontSize: "4rem",
              fontFamily: "'Quattrocento', serif",
              color: "white",
              lineHeight: "1.2",
            }}
          >
            &nbsp;&nbsp;KOD ACIKTIRIR <br />
            PIZZA, DOYURUR
          </p>
          <a
            href="/order"
            style={{ fontFamily: "'Quattrocento', serif", fontWeight: "bold" }}
          >
            ACIKTIM
          </a>
        </div>
      </section>
      <div className="selection">
        <ul>
          <a href="#">
            <img src="images/iteration-2-images/icons/1.svg" alt="" />
            YENİ! Kore
          </a>
          <a href="#">
            <img src="images/iteration-2-images/icons/2.svg" alt="" />
            Pizza
          </a>
          <a href="#">
            <img src="images/iteration-2-images/icons/3.svg" alt="" />
            Burger
          </a>
          <a href="#">
            <img src="images/iteration-2-images/icons/4.svg" alt="" />
            Kızartmalar
          </a>
          <a href="#">
            <img src="images/iteration-2-images/icons/5.svg" alt="" />
            Fast Food
          </a>
          <a href="#">
            <img src="images/iteration-2-images/icons/6.svg" alt="" />
            Gazlı İçecek
          </a>
        </ul>
      </div>
      <div className="commercial">
        <div className="commercialLeft">
          <p style={{ color: "white", fontSize: "3rem" }}>
            Özel
            <br />
            Lezzetus
          </p>
          <p
            style={{
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
              fontFamily: "'Quattrocento', serif",
            }}
          >
            Position:Absolute Acı Burger
          </p>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#ce2829",
              backgroundColor: "white",
              borderRadius: "3rem",
              padding: "0.5rem 0.75rem",
            }}
          >
            Sipariş Ver
          </a>
        </div>
        <div className="commercialRight">
          <div className="commercialRightTop">
            <p style={{ color: "white", fontSize: "2rem" }}>
              Hackathlon <br />
              Burger Menü
            </p>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#ce2829",
                backgroundColor: "white",
                borderRadius: "3rem",
                padding: "0.5rem 0.75rem",
              }}
            >
              Sipariş Ver
            </a>
          </div>
          <div className="commercialRightBottom">
            <p style={{ fontSize: "2rem" }}>
              <span style={{ color: "#ce2829" }}>Çoooook</span> hızlı <br />
              npm gibi kurye
            </p>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#ce2829",
                backgroundColor: "white",
                borderRadius: "3rem",
                padding: "0.5rem 0.75rem",
              }}
            >
              Sipariş Ver
            </a>
          </div>
        </div>
      </div>
      <div className="texts">
        <p
          style={{
            color: "#ce2829",
            fontStyle: "italic",
            fontFamily: "'Satisfy', cursive",
            fontSize: "1.8rem",
          }}
        >
          en çok paketlenen menüler
        </p>
        <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "3rem" }}>
          Acıktıran Kodlara Doyuran Lezzetler
        </p>
      </div>
      <div style={{backgroundColor: "#faf7f2"}}>
        <div className="pills-tab">
          <ul>
            <button>
              <img src="images/iteration-2-images/icons/1.svg" alt="" />
              <span>Ramen</span>
            </button>
            <button>
              <img src="images/iteration-2-images/icons/2.svg" alt="" />
              <span>Pizza</span>
            </button>
            <button>
              <img src="images/iteration-2-images/icons/3.svg" alt="" />
              <span>Burger</span>
            </button>
            <button>
              <img src="images/iteration-2-images/icons/4.svg" alt="" />
              <span>French Fries</span>
            </button>
            <button>
              <img src="images/iteration-2-images/icons/5.svg" alt="" />
              <span>Fast Food</span>
            </button>
            <button>
              <img src="images/iteration-2-images/icons/6.svg" alt="" />
              <span>Soft Drinks</span>
            </button>
          </ul>
        </div>
        <div className="menu-food">
          <div className="firstfood">
            <img src="images/iteration-2-images/pictures/food-1.png" alt="" />
            <section>
              <p className="food-title">Terminal Pizza</p>
              <div className="food-meta">
                <span className="rating">4.9</span>
                <span className="reviews">(200)</span>
                <span className="price">60₺</span>
              </div>
            </section>
          </div>
          <div className="secondfood">
            <img src="images/iteration-2-images/pictures/food-2.png" alt="" />
            <section>
              <p className="food-title">Position Absolute Acı Pizza</p>
              <div className="food-meta">
                <span className="rating">4.9</span>
                <span className="reviews">(200)</span>
                <span className="price">60₺</span>
              </div>
            </section>
          </div>
          <div className="thirdfood">
            <img src="images/iteration-2-images/pictures/food-3.png" alt="" />
            <section>
              <p className="food-title">useEffect Tavulu Burger</p>
              <div className="food-meta">
                <span className="rating">4.9</span>
                <span className="reviews">(200)</span>
                <span className="price">60₺</span>
              </div>
            </section>
          </div>
        </div>
      </div>

      <footer style={{ backgroundColor: "#292929" }}>
        <div className="footertop">
          <section className="footertopfirst">
            <h2
              style={{
                color: "white",
                fontFamily: "'Barlow', sans-serif",
                fontWeight: "bold",
              }}
            >
              Teknolojik <br />
              Yemekler
            </h2>
            <ul>
              <li className="address">
                341 Londonderryroad, <br />
                Istanbul,Türkiye
              </li>
              <li className="email">aciktim@teknolojikyemekler.com</li>
              <li className="phone">+90 216 123 45 67</li>
            </ul>
          </section>
          <section className="footertopsecond">
            <h2>Hot Menu</h2>
            <ul>
              <li>Terminal Pizza</li>
              <li>5 kişilik Hackathlon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Testler Geçti Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
            </ul>
          </section>
          <section className="footertopthird">
            <h2 style={{ color: "white" }}>Instagram</h2>
            <ul>
              <li>
                <img
                  src="images/iteration-2-images/footer/insta/li-0.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="images/iteration-2-images/footer/insta/li-1.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="images/iteration-2-images/footer/insta/li-2.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="images/iteration-2-images/footer/insta/li-3.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="images/iteration-2-images/footer/insta/li-4.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="images/iteration-2-images/footer/insta/li-5.png"
                  alt=""
                />
              </li>
            </ul>
          </section>
        </div>
        <div className="footerbottom">
          <p style={{ color: "white" }}>© 2023 Teknolojik Yemekler.</p>
          <i className="fa-brands fa-twitter" style={{ color: "white" }}></i>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
