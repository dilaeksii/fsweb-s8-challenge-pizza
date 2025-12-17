import { FormGroup, Label, Input, Col } from "reactstrap";


const Notes = ({handleOrderChange}) => {
  return (
    <>
      <FormGroup>
        <h4 className="note">Sipariş Notu:</h4>
        <Input id="exampleText" name="text" type="textarea" placeholder="Siparişine eklemek stediğin bir not var mı?" onChange={handleOrderChange}/>
        <div className="bottom-line"></div>
         
      </FormGroup>
    </>
  );
};

export default Notes;
