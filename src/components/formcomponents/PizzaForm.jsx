import {
  Form,
  Label,
  FormGroup,
  Input,
  FormFeedback,
  Button,
} from "reactstrap";

const PizzaForm = ({
  errorMsg,
  errors,
  handleOrderChange,
  handleOrderSubmit,
  isValid,
  fiyat,
}) => {
  return (
    <div className="container">
      <div className="order-row">
        <div className="size-options">
          <h4>
            Boyut Seç <span style={{ color: "#CE2829" }}>*</span>
          </h4>
          <Form>
            <div className="size-items">
              <FormGroup check>
                <Label className="size-pill" check>
                  <Input
                    type="radio"
                    name="boyut"
                    value="küçük"
                    onChange={handleOrderChange}
                  />
                  <span>S</span>
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label className="size-pill" check>
                  <Input
                    type="radio"
                    name="boyut"
                    value="orta"
                    onChange={handleOrderChange}
                  />
                  <span>M</span>
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label className="size-pill" check>
                  <Input
                    type="radio"
                    name="boyut"
                    value="büyük"
                    onChange={handleOrderChange}
                  />
                  <span>L</span>
                </Label>
              </FormGroup>
            </div>
          </Form>
        </div>
        <div className="thickness">
          <h4>
            Hamur Seç <span style={{ color: "#CE2829" }}>*</span>
          </h4>
          <Form>
            <Input
              type="select"
              name="hamur"
              onChange={handleOrderChange}
              className="hamur-select"
              invalid={errors.hamur}
            >
              <option value="--Hamur Kalınlığı--">
                --Hamur Kalınlığı Seç--
              </option>
              <option value="ince">İnce</option>
              <option value="orta">Orta</option>
              <option value="kalın">Kalın</option>
            </Input>

            {errors.hamur && <FormFeedback>{errorMsg.hamur}</FormFeedback>}
          </Form>
        </div>
      </div>
      <Form>
        <div className="extras">
          <h4>Ek Malzemeler</h4>
          <p className="extras-desc">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>

          <div className="extras-grid">
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
                <FormFeedback className="d-block">
                  {errorMsg.malzeme}
                </FormFeedback>
              )}
            </FormGroup>
          </div>
        </div>

        <div className="order-note">
          <h4>Sipariş Notu</h4>
          <Input
            type="textarea"
            name="text"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            className="order-note-input"
          />
        </div>

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
        <div className="totals">
          <div className="order-price">
            <h6>Sipariş Toplam</h6>
            <div>
              <p>Seçimler</p>
              <p>{fiyat - 100}₺</p>
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
              color: "black",
            }}
            className="buttonorder"
            onClick={handleOrderSubmit}
            type="button"
            disabled={!isValid}
            data-cy="ordersuccess"
          >
            Sipariş Ver
          </Button>
          <div className="total-order">
            <Button
              style={{
                backgroundColor: "#FAF7F2",
                color: "black",
              }}
              className="less"
            >
              -
            </Button>
            <div className="count-order" style={{ backgroundColor: "#FAF7F2" }}>
              1
            </div>
            <Button
              style={{
                backgroundColor: "#FAF7F2",
                color: "black",
              }}
              className="more"
            >
              +
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PizzaForm;
