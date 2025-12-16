import {Form, Label, FormGroup, Input } from "reactstrap";


const PizzaForm = () => {
  return (
    <>
      <div className="pizza-selection" style={{ marginTop: "2rem" }}>
        <div className="size">
          <h4>
            Boyut Seç <span style={{ color: "red" }}>*</span>
          </h4>
          <Form>
            <Input
              type="radio"
              id="küçük"
              name="boyut"
              className="kucuk"
            ></Input>{" "}
            <Label for="küçük">Küçük</Label>
            <br />
            <Input
              type="radio"
              id="orta"
              name="boyut"
              className="orta"
            ></Input>{" "}
            <Label for="orta">Orta</Label>
            <br />
            <Input
              type="radio"
              id="büyük"
              name="boyut"
              className="buyuk"
            ></Input>{" "}
            <Label for="büyük">Büyük</Label>
          </Form>
        </div>
        <div className="thickness">
          <h4>
            Hamur Seç{" "}
            <span style={{ color: "red"}}>*</span>
          </h4>
          <Input type="select" name="thickness" id="thickness">
            <option defaultValue="hamurkalınlığı">Hamur Kalınlığı</option>
            <option value="ince">İnce</option>
            <option value="orta">Orta</option>
            <option value="kalın">Kalın</option>
          </Input>
        </div>
      </div>
      <div
        className="extra"
      >
        <h4>Ek Malzemeler</h4>
        <p style={{ color: "#5F5F5F" }}>
          En fazla 10 en az 4 malzeme seçmelisiniz. 5₺
        </p>
        <div className="ingredients">
          <Label for="pepperoni">
            <Input type="checkbox" id="pepperoni" value="pepperoni" /> Pepperoni
          </Label>

          <Label for="domates">
            <Input type="checkbox" id="domates" value="domates" /> Domates
          </Label>

          <Label for="biber">
            <Input type="checkbox" id="biber" value="biber" /> Biber
          </Label>

          <Label for="sosis">
            <Input type="checkbox" id="sosis" value="sosis" /> Sosis
          </Label>

          <Label for="mısır">
            <Input type="checkbox" id="mısır" value="mısır" /> Mısır
          </Label>

          <Label for="sucuk">
            <Input type="checkbox" id="sucuk" value="sucuk" /> Sucuk
          </Label>

          <Label for="jambon">
            <Input type="checkbox" id="jambon" value="jambon" /> Kanada Jambonu
          </Label>

          <Label for="ananas">
            <Input type="checkbox" id="ananas" value="ananas" /> Ananas
          </Label>

          <Label for="ızgara">
            <Input type="checkbox" id="ızgara" value="ızgara" /> Tavuk Izgara
          </Label>

          <Label for="jalepeno">
            <Input type="checkbox" id="jalepeno" value="jalepeno" /> Jalepeno
          </Label>

          <Label for="kabak">
            <Input type="checkbox" id="kabak" value="kabak" /> Kabak
          </Label>

          <Label for="soğan">
            <Input type="checkbox" id="soğan" value="soğan" /> Soğan
          </Label>

          <Label for="sarımsak">
            <Input type="checkbox" id="sarımsak" value="sarımsak" /> Sarımsak
          </Label>
        </div>
        <h4 className="namesurname">Ad Soyad:<span style={{color: "red"}}>*</span></h4>
        <Input id="adsoyad" name="adsoyad" type="text" className="adsoyad"/>
      </div>
    </>
  );
};

export default PizzaForm;
