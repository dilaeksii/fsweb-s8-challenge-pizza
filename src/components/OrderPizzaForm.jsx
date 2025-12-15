import { Container, Row, Col, Form, Label, FormGroup, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const OrderPizzaForm = () => {
  return (
    <>
      <div className="pizza-selection" style={{ marginTop: "2rem" }}>
        <div className="size">
          <p>
            Boyut Seç <span style={{ color: "red" }}>*</span>
          </p>
          <form>
            <input
              type="radio"
              id="küçük"
              name="boyut"
              style={{ marginLeft: "-2rem" }}
            />{" "}
            <label htmlFor="küçük">Küçük</label>
            <br />
            <input
              type="radio"
              id="orta"
              name="boyut"
              style={{ marginLeft: "-2.7rem" }}
            />{" "}
            <label htmlFor="orta">Orta</label>
            <br />
            <input
              type="radio"
              id="büyük"
              name="boyut"
              style={{ marginLeft: "-2rem" }}
            />{" "}
            <label htmlFor="büyük">Büyük</label>
          </form>
        </div>
        <div className="thickness">
          <p>
            Hamur Seç{" "}
            <span style={{ color: "red", marginRight: "9rem" }}>*</span>
          </p>
          <select name="thickness" id="thickness" style={{ width: "15rem" }}>
            <option defaultValue="hamurkalınlığı">Hamur Kalınlığı</option>
            <option value="ince">İnce</option>
            <option value="orta">Orta</option>
            <option value="kalın">Kalın</option>
          </select>
        </div>
      </div>
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginLeft: "10rem",
        }}
      >
        <p style={{ marginBottom: "0.5rem" }}>Ek Malzemeler</p>
        <p style={{ color: "#5F5F5F" }}>
          En fazla 10 malzeme seçebilirsiniz. 5₺
        </p>
        <div className="ingredients">
          <label htmlFor="pepperoni">
            <input type="checkbox" id="pepperoni" value="pepperoni" /> Pepperoni
          </label>

          <label htmlFor="domates">
            <input type="checkbox" id="domates" value="domates" /> Domates
          </label>

          <label htmlFor="biber">
            <input type="checkbox" id="biber" value="biber" /> Biber
          </label>

          <label htmlFor="sosis">
            <input type="checkbox" id="sosis" value="sosis" /> Sosis
          </label>

          <label htmlFor="mısır">
            <input type="checkbox" id="mısır" value="mısır" /> Mısır
          </label>

          <label htmlFor="sucuk">
            <input type="checkbox" id="sucuk" value="sucuk" /> Sucuk
          </label>

          <label htmlFor="jambon">
            <input type="checkbox" id="jambon" value="jambon" /> Kanada Jambonu
          </label>

          <label htmlFor="ananas">
            <input type="checkbox" id="ananas" value="ananas" /> Ananas
          </label>

          <label htmlFor="ızgara">
            <input type="checkbox" id="ızgara" value="ızgara" /> Tavuk Izgara
          </label>

          <label htmlFor="jalepeno">
            <input type="checkbox" id="jalepeno" value="jalepeno" /> Jalepeno
          </label>

          <label htmlFor="kabak">
            <input type="checkbox" id="kabak" value="kabak" /> Kabak
          </label>

          <label htmlFor="soğan">
            <input type="checkbox" id="soğan" value="soğan" /> Soğan
          </label>

          <label htmlFor="sarımsak">
            <input type="checkbox" id="sarımsak" value="sarımsak" /> Sarımsak
          </label>
        </div>
      </div>
    </>
  );
};

export default OrderPizzaForm;
