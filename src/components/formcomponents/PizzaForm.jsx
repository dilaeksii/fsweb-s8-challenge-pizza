import { Form, Label, FormGroup, Input, FormFeedback } from "reactstrap";

const PizzaForm = ({ errorMsg, errors, handleOrderChange }) => {
  return (
    <>
      <div className="pizza-selection" style={{ marginTop: "2rem" }}>
        <FormGroup className="size">
          <h4>
            Boyut Seç <span style={{ color: "red" }}>*</span>
          </h4>

          <div className="size-options">
            <div className="size-item">
              <Input
                type="radio"
                id="küçük"
                name="boyut"
                value="küçük"
                onChange={handleOrderChange}
              />
              <Label htmlFor="küçük">S</Label>
            </div>

            <div className="size-item">
              <Input
                type="radio"
                id="orta"
                name="boyut"
                value="orta"
                onChange={handleOrderChange}
              />
              <Label htmlFor="orta">M</Label>
            </div>

            <div className="size-item">
              <Input
                type="radio"
                id="büyük"
                name="boyut"
                value="büyük"
                onChange={handleOrderChange}
              />
              <Label htmlFor="büyük">L</Label>
            </div>
          </div>
        </FormGroup>
        <FormGroup className="thickness">
          <h4>
            Hamur Seç <span style={{ color: "red" }}>*</span>
          </h4>
          <Input
            type="select"
            name="hamur"
            id="thickness"
            invalid={errors.hamur}
            onChange={handleOrderChange}
            style={{ backgroundColor: "#FAF7F2" }}
            data-cy="hamurkalınlığı"
          >
            <option defaultValue="hamurkalınlığı">--Hamur Kalınlığı--</option>
            <option value="ince">İnce</option>
            <option value="orta">Orta</option>
            <option value="kalın">Kalın</option>
          </Input>
          {errors.hamur && (
            <FormFeedback className="d-block">{errorMsg.hamur}</FormFeedback>
          )}
        </FormGroup>
      </div>
      <div className="extra">
        <h4>Ek Malzemeler</h4>
        <p style={{ color: "#5F5F5F" }}>
          En fazla 10 en az 4 malzeme seçmelisiniz. 5₺
        </p>

        <FormGroup className="ingredients">
          <Label for="pepperoni">
            <Input
              type="checkbox"
              id="pepperoni"
              value="pepperoni"
              name="malzeme"
              invalid={errors.malzeme}
              onChange={handleOrderChange}
            />
            <span className="checkmark"></span> Pepperoni
          </Label>

          <Label for="domates">
            <Input
              type="checkbox"
              id="domates"
              value="domates"
              name="malzeme"
              invalid={errors.malzeme}
              onChange={handleOrderChange}
            />
            <span className="checkmark"></span> Domates
          </Label>

          <Label for="biber">
            <Input
              type="checkbox"
              id="biber"
              value="biber"
              name="malzeme"
              invalid={errors.malzeme}
              onChange={handleOrderChange}
            />
            <span className="checkmark"></span> Biber
          </Label>

          <Label for="sosis">
            <Input
              type="checkbox"
              id="sosis"
              value="sosis"
              name="malzeme"
              invalid={errors.malzeme}
              onChange={handleOrderChange}
            />
            <span className="checkmark"></span> Sosis
          </Label>

          <Label for="mısır">
            <Input
              type="checkbox"
              id="mısır"
              value="mısır"
              name="malzeme"
              invalid={errors.malzeme}
              onChange={handleOrderChange}
            />
            <span className="checkmark"></span> Mısır
          </Label>

          <Label for="sucuk">
            <Input
              type="checkbox"
              id="sucuk"
              value="sucuk"
              name="malzeme"
              invalid={errors.malzeme}
              onChange={handleOrderChange}
            />
            <span className="checkmark"></span> Sucuk
          </Label>

          <Label for="jambon">
            <Input
              type="checkbox"
              id="jambon"
              value="kanada jambonu"
              name="malzeme"
              invalid={errors.malzeme}
              onChange={handleOrderChange}
            />
            <span className="checkmark"></span> Kanada Jambonu
          </Label>

          <Label for="ananas">
            <Input
              type="checkbox"
              id="ananas"
              value="ananas"
              name="malzeme"
              invalid={errors.malzeme}
              onChange={handleOrderChange}
            />
            <span className="checkmark"></span> Ananas
          </Label>

          <Label for="ızgara">
            <Input
              type="checkbox"
              id="ızgara"
              value=" tavuk ızgara"
              name="malzeme"
              invalid={errors.malzeme}
              onChange={handleOrderChange}
            />
            <span className="checkmark"></span> Tavuk Izagara
          </Label>

          <Label for="jalepeno">
            <Input
              type="checkbox"
              id="jalepeno"
              value="jalepeno"
              name="malzeme"
              invalid={errors.malzeme}
              onChange={handleOrderChange}
            />
            <span className="checkmark"></span> Jalepeno
          </Label>

          <Label for="kabak">
            <Input
              type="checkbox"
              id="kabak"
              value="kabak"
              name="malzeme"
              invalid={errors.malzeme}
              onChange={handleOrderChange}
            />
            <span className="checkmark"></span> Kabak
          </Label>

          <Label for="soğan">
            <Input
              type="checkbox"
              id="soğan"
              value="soğan"
              name="malzeme"
              invalid={errors.malzeme}
              onChange={handleOrderChange}
            />
            <span className="checkmark"></span> Soğan
          </Label>

          <Label for="sarımsak">
            <Input
              type="checkbox"
              id="sarımsak"
              value="sarımsak"
              name="malzeme"
              invalid={errors.malzeme}
              onChange={handleOrderChange}
            />
            <span className="checkmark"></span> Sarımsak
          </Label>
          {errors.malzeme && (
            <FormFeedback className="d-block">{errorMsg.malzeme}</FormFeedback>
          )}
        </FormGroup>

        <FormGroup>
          <h4 className="namesurname">
            Ad Soyad:<span style={{ color: "red" }}>*</span>
          </h4>
          <Input
            id="adsoyad"
            name="adsoyad"
            type="text"
            className="adsoyad"
            invalid={errors.adsoyad}
            onChange={handleOrderChange}
            style={{ backgroundColor: "#FAF7F2" }}
            data-cy="nameinput"
          />
          {errors.adsoyad && (
            <FormFeedback className="d-block">{errorMsg.adsoyad}</FormFeedback>
          )}
        </FormGroup>
      </div>
    </>
  );
};

export default PizzaForm;
