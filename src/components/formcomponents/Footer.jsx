import { Button } from "reactstrap";


const Footer = ({handleOrderSubmit, isValid, fiyat}) => {

  
  return (
    <div >
        <div className="order-price" style={{ backgroundColor: "#FAF7F2", border: "1px solid #5F5F5F" }}>
        <h6>
          Sipariş Toplam
        </h6>
        <div>
          <p>Seçimler</p>
          <p>{fiyat-100}₺</p>
        </div>
        <div>
          <p style={{ color: "red" }}>Toplam</p>
          <p style={{ color: "red" }}>{fiyat}₺</p>
        </div>
      </div>
      <Button
          style={{
            backgroundColor: "#FDC913",
            border: "none",
            color: "black"
          }}
          className="buttonorder"
          onClick={handleOrderSubmit}
          type="button"
          disabled={!isValid}
        >
          Sipariş Ver
        </Button>
      <div
        className="total-order"
      >
        <Button
          style={{
            backgroundColor: "#FAF7F2",
            color: "black"
          }}
          className="less"
        >
          -
        </Button>
        <div
          className="count-order"
          style={{backgroundColor: "#FAF7F2"}}
        >
          1
        </div>
        <Button
          style={{
            backgroundColor: "#FAF7F2",
            color: "black"
          }}
          className="more"
        >
          +
        </Button>
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
    </div>
  );
};

export default Footer;
