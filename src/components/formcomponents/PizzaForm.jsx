import {Form, Label, FormGroup, Input, FormFeedback } from "reactstrap";


const PizzaForm = ({errorMsg, errors, handleOrderChange}) => {
  return (
    <>
      <div className="pizza-selection" style={{ marginTop: "2rem" }}>
        <FormGroup className="size">
          <h4>
            Boyut Seç <span style={{ color: "red" }}>*</span>
          </h4>
            <Input
              type="radio"
              id="küçük"
              name="boyut"
              className="kucuk"
              value="küçük"
              onChange={handleOrderChange}
            ></Input>{" "}
            <Label for="küçük">Küçük</Label>
            <br />
            <Input
              type="radio"
              id="orta"
              name="boyut"
              className="orta"
              value="orta"
              onChange={handleOrderChange}
            ></Input>{" "}
            <Label for="orta">Orta</Label>
            <br />
            <Input
              type="radio"
              id="büyük"
              name="boyut"
              className="buyuk"
              value="büyük"
              onChange={handleOrderChange}
            ></Input>{" "}
            <Label for="büyük">Büyük</Label>
        </FormGroup>
        <FormGroup className="thickness">
          <h4>
            Hamur Seç{" "}
            <span style={{ color: "red"}}>*</span>
          </h4>
          <Input type="select" name="hamur" id="thickness" invalid={errors.hamur} onChange={handleOrderChange}>
            <option defaultValue="hamurkalınlığı">Hamur Kalınlığı</option>
            <option value="ince">İnce</option>
            <option value="orta">Orta</option>
            <option value="kalın">Kalın</option>
          </Input>
          {errors.hamur && <FormFeedback className="d-block">{errorMsg.hamur}</FormFeedback>}
        </FormGroup>
      </div>
      <div
        className="extra"
      >
      
        <h4>Ek Malzemeler</h4>
        <p style={{ color: "#5F5F5F" }}>
          En fazla 10 en az 4 malzeme seçmelisiniz. 5₺
        </p>
        
        <FormGroup className="ingredients">
          <Label for="pepperoni">
            <Input type="checkbox" id="pepperoni" value="pepperoni" name="malzeme" invalid={errors.malzeme} onChange={handleOrderChange}/> Pepperoni
          </Label>

          <Label for="domates">
            <Input type="checkbox" id="domates" value="domates" name="malzeme" invalid={errors.malzeme} onChange={handleOrderChange}/> Domates
          </Label>

          <Label for="biber">
            <Input type="checkbox" id="biber" value="biber" name="malzeme" invalid={errors.malzeme} onChange={handleOrderChange}/> Biber
          </Label>

          <Label for="sosis">
            <Input type="checkbox" id="sosis" value="sosis" name="malzeme" invalid={errors.malzeme} onChange={handleOrderChange}/> Sosis
          </Label>

          <Label for="mısır">
            <Input type="checkbox" id="mısır" value="mısır" name="malzeme" invalid={errors.malzeme} onChange={handleOrderChange}/> Mısır
          </Label>

          <Label for="sucuk">
            <Input type="checkbox" id="sucuk" value="sucuk" name="malzeme" invalid={errors.malzeme} onChange={handleOrderChange}/> Sucuk
          </Label>

          <Label for="jambon">
            <Input type="checkbox" id="jambon" value="jambon" name="malzeme" invalid={errors.malzeme} onChange={handleOrderChange}/> Kanada Jambonu
          </Label>

          <Label for="ananas">
            <Input type="checkbox" id="ananas" value="ananas" name="malzeme" invalid={errors.malzeme} onChange={handleOrderChange}/> Ananas
          </Label>

          <Label for="ızgara">
            <Input type="checkbox" id="ızgara" value="ızgara" name="malzeme" invalid={errors.malzeme} onChange={handleOrderChange}/> Tavuk Izgara
          </Label>

          <Label for="jalepeno">
            <Input type="checkbox" id="jalepeno" value="jalepeno" name="malzeme" invalid={errors.malzeme} onChange={handleOrderChange}/> Jalepeno
          </Label>

          <Label for="kabak">
            <Input type="checkbox" id="kabak" value="kabak" name="malzeme" invalid={errors.malzeme} onChange={handleOrderChange}/> Kabak
          </Label>

          <Label for="soğan">
            <Input type="checkbox" id="soğan" value="soğan" name="malzeme" invalid={errors.malzeme} onChange={handleOrderChange}/> Soğan
          </Label>

          <Label for="sarımsak">
            <Input type="checkbox" id="sarımsak" value="sarımsak" name="malzeme" invalid={errors.malzeme} onChange={handleOrderChange}/> Sarımsak
          </Label>
          {errors.malzeme && <FormFeedback className="d-block">{errorMsg.malzeme}</FormFeedback>}
        </FormGroup>
        
        <FormGroup>
        <h4 className="namesurname">Ad Soyad:<span style={{color: "red"}}>*</span></h4>
        <Input id="adsoyad" name="adsoyad" type="text" className="adsoyad" invalid={errors.adsoyad} onChange={handleOrderChange}/>
         {errors.adsoyad && <FormFeedback className="d-block">{errorMsg.adsoyad}</FormFeedback>}
        </FormGroup>
      </div>
    </>
  );
};

export default PizzaForm;
