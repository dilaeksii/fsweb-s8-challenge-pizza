import team from "/images/iteration-1-images/home-banner.png";
import logo from "/images/iteration-1-images/logo.svg";
import { Link } from "react-router-dom";

const SuccessPage = ({ orderData }) => {
  return (
    <section className="ordersuccess">
      <img src={logo} alt="" />
      <div className="commercial-success">
        <div
          className="order-top"
          style={{
            color: "#FDC913",
            fontFamily: '"Barlow", sans-serif',
            fontStyle: "italic",
          }}
        >
          lezzetin yolda
        </div>
        <div
          className="order-main"
          style={{ fontfamily: "Roboto Condensed, sans-serif" }}
        >
          SİPARİŞİNİZ ALINDI!
        </div>
        <div className="order-detail">
          <p>
            <b>Boyut:</b> {orderData.boyut}
          </p>
          <p>
            <b>Hamur:</b> {orderData.hamur}
          </p>
          <p>
            <b> Ek Malzemeler:</b> {orderData.malzeme.join(", ")}
          </p>
          <p>
            <b>Notunuz:</b> {orderData.text}
          </p>
        </div>
        <div className="overall-price">
          <h6>Sipariş Toplamı</h6>
          <div className="price-row">
            <p style={{ color: "white", fontSize: "1rem" }}>Seçimler</p>
            <p style={{ color: "white", fontSize: "1rem" }}>
              {orderData.fiyat - 100}₺
            </p>
          </div>
          <div className="price-row">
            <p style={{ color: "white", fontSize: "1rem" }}>Toplam</p>
            <p style={{ color: "white", fontSize: "1rem" }}>
              {orderData.fiyat}₺
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
