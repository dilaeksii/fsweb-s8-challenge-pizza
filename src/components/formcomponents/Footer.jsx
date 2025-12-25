import { Button } from "reactstrap";

const Footer = () => {
  return (
   <footer style={{backgroundColor: "#292929"}}>
      <div className="footertop">
        <section class="footertopfirst">
          <h2 style={{color: "white", fontFamily: "'Barlow', sans-serif", fontWeight: "bold"}}>Teknolojik <br/>Yemekler</h2>
          <ul>
            <li className="address">341 Londonderryroad, <br/>Istanbul,Türkiye</li>
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
          <h2 style={{color: "white"}}>Instagram</h2>
          <ul>
            <li><img src="images/iteration-2-images/footer/insta/li-0.png" alt=""/></li>
            <li><img src="images/iteration-2-images/footer/insta/li-1.png" alt=""/></li>
            <li><img src="images/iteration-2-images/footer/insta/li-2.png" alt=""/></li>
            <li><img src="images/iteration-2-images/footer/insta/li-3.png" alt=""/></li>
            <li><img src="images/iteration-2-images/footer/insta/li-4.png" alt=""/></li>
            <li><img src="images/iteration-2-images/footer/insta/li-5.png" alt=""/></li>
          </ul>
        </section>
      </div>
      <div className="footerbottom">
        <p style={{color: "white"}}>© 2023 Teknolojik Yemekler.</p>
        <i className="fa-brands fa-twitter" style={{color: "white"}}></i>
      </div>
    </footer>
  );
};

export default Footer;
