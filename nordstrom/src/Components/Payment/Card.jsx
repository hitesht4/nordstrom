import React,{useState,useEffect} from 'react';
import {Form} from 'react-bootstrap';
import Details from './Details';
import PayFooter from './PayFooter';
import SuccessModal from './SuccessModal';

const Card = () => {
 const initialValues = {card: "", date: "", cvv: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      setShow(true)
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    if (!values.card) {
      errors.card = "Card is required!";
    }
    if (!values.date) {
      errors.date = "Expiry Date is required";
    } 
     if (!values.cvv) {
      errors.cvv = "CVV is required";
    } 
    return errors;
  };
  return (
  <div>
  <Details/>
  <Form className="Form" onSubmit={handleSubmit}>
    <div className="Heating">
      <div className="Num">2</div>
      <div><h4>Payment</h4></div>
    </div>

    <br />

  <div className="Form2">
    <div  className="mb-4 text-dark">
       
  <Form.Check label="My billing address is the same as my delivery address" defaultChecked="true" />

        <div className="d-flex">
            <Form.Check
              type="radio"
              defaultChecked="true"
              label="Credit or Debit Card"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
        <img className="ICoo"src="https://global.prd.borderfree.com/cdn/checkout/logos/visa.svg" alt="" />
        <img className="ICoo" src="https://global.prd.borderfree.com/cdn/checkout/logos/mastercard.svg" alt="" />
        </div>
    </div>

  <Form.Group className="mb-3">
    <Form.Control type="number" placeholder="Card Number" name="card"
    onChange={handleChange}/>
    <p className="red">{formErrors.card}</p>
  </Form.Group>

   <Form.Group className="mb-4 d-flex"> 
        <div className="Diw mr-2">
          <Form.Control type="number" placeholder="MM/YY" name="date"
          onChange={handleChange}/>
          <p className="red">{formErrors.date}</p>
        </div>
        <div className="Diw1 pl-2">
          <Form.Control type="password" placeholder="Security Code" name="cvv"
          onChange={handleChange}/>
          <p className="red">{formErrors.cvv}</p>
        </div>  
       </Form.Group>


      <div className="d-flex">
        <Form.Check
              type="radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1">
              </Form.Check>

        <img src="https://global.prd.borderfree.com/cdn/checkout/logos/unionpay.svg" alt=""  className="ICoo"/>
      </div>
    </div>
        <div>
               <Form.Check label="My billing address is the same as my delivery address" defaultChecked="true" />
               <Form.Check label="My billing address is the same as my delivery address" defaultChecked="true" />
        </div>

        <button type="submit" className="mt-3 Submit">
          Place Order
        </button>

        <div className="Form3">
         <p>
          This order total is 100% guaranteed. There will be no additional charges due upon receipt.
         </p>
        </div>
        <SuccessModal show={show} handleClose={handleClose}/>
      <PayFooter/>   
  </Form>
  </div>
  )
}

export default Card