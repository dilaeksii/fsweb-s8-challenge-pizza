import { Button } from "reactstrap";


const Footer = ({handleOrderSubmit, isValid, fiyat}) => {

  
  return (
    <div>
         <div className="order-price">
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
            borderRadius: "0.5rem",
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
            backgroundColor: "#FDC913",
            color: "black"
          }}
          className="less"
        >
          -
        </Button>
        <div
          className="count-order"
        >
          1
        </div>
        <Button
          style={{
            backgroundColor: "#FDC913",
            color: "black"
          }}
          className="more"
        >
          +
        </Button>
      </div>
     
    </div>
  );
};

export default Footer;
