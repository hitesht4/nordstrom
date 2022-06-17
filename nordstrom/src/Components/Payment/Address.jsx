import React,{useContext,useState,useEffect} from 'react';
import styles from './Payment.module.css';
import TableC from './TableC';
import {Form ,Alert,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PayFooter from './PayFooter';

const Address = ({setPay}) => {
  const initialValues = { first: "", email: "", last: "",address: "",code: "",city: "",phone : ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

   const validate = (values) => {
    const errors = {};
    if (!values.first) {
      errors.first = "First Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.last) {
      errors.last = "Last Name is required";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }
    if (!values.code) {
      errors.code = "Postal Code is required";
    }
    if (!values.address) {
      errors.address = "Address is required";
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setPay(true);
    }
  }, [formErrors]);
  return (
  <div>
   <h4>Secure Checkout <span>powered by Borderfree</span></h4>
   <p>Already have a Borderfree account? <span>Click here.</span></p> 
   <Form className='Form'  onSubmit={handleSubmit}>
    <div className="Heating">
      <div className="Num">1</div>
      <div><h4>Delivery</h4></div>
    </div>

    
      <Form.Group className="mb-4">
        <Form.Control type="text" placeholder="Enter email" 
        onChange={handleChange} name="email"/>
        <p className="red">{formErrors.email}</p>
       </Form.Group>

        <div className="mb-4 d-flex">
        <div className="Diw mr-2">
          <Form.Control type="text" placeholder="First Name"
          onChange={handleChange} name="first"/>
          <p className="red">{formErrors.first}</p>
        </div>
        <div className="Diw1 pl-2">
          <Form.Control type="text" placeholder="Last Name" 
          onChange={handleChange} name="last"/>
          <p className="red">{formErrors.last}</p>
        </div>  
       </div> 
                    

      <Form.Group className="mb-4">
        <Form.Control type="text" placeholder="Address" 
        onChange={handleChange} name="address"/>
        <p className="red">{formErrors.address}</p>
      </Form.Group>   

       <Form.Group className="mb-4 d-flex">
        <div className="Diw mr-2">
          <Form.Control type="text" placeholder="Address 2 (Optional)" 
          name='address2' onChange={handleChange}/>
        </div>
        <div className="Diw1 pl-2">
          <Form.Control type="text"  placeholder="Postal Code" 
          onChange={handleChange} name="code"/>
          <p className="red">{formErrors.code}</p>
        </div>  
       </Form.Group>

       <Form.Group className="mb-4 d-flex justify-content-sm-between" >
        <div className="Diw mr-2">
          <Form.Control type="text" placeholder="City"
          onChange={handleChange} name='city'/>
          <p className="red">{formErrors.city}</p>
        </div>
        <div className="Diw1 pl-2">
          <Form.Control type="Region" placeholder="Region Optional" 
          onChange={handleChange} name="Region"/>
        </div>  
       </Form.Group>

       <Form.Group className="mb-1 d-flex justify-content-sm-between" controlId="formBasicEmail">
        <div className="Diw mr-2">
          <Form.Control type="number" placeholder="Phone"
          onChange={handleChange} name="phone"/>
          <p className="red">{formErrors.phone}</p>
        </div>
        <div className="Diw1 pl-2">
          <Form.Control as='select' name="Location" placeholder="Location" onChange={handleChange}>
          <option defaultValue="India">India</option>
          <option value="US">US</option>
          <option value="Uk">UK</option>
          <option value="China">China</option>
          <option value="Russia">Russia</option>
          </Form.Control>
        </div>  
       </Form.Group>
       <TableC></TableC>

  <button type="submit" className="Submit"> Pay now</button>

  <div className="Heating dashed" >
      <div className="Num">2</div>
      <div><h4>Payment</h4></div>
    </div>
  </Form>
  <PayFooter/>
  
    </div>
  )
}

export default Address;