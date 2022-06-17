import React,{useState} from 'react';
import {Form ,Alert} from 'react-bootstrap'
import styles from './Signin.module.css';

const Logup = () => {
const [password,setPassword]=useState("");
const [email,setEmail]=useState("");
const [flag,setFlag]=useState(false);
const [s,setS]=useState(false);



const handleSubmit=(e)=>{
    console.log(email,password);
    e.preventDefault();
    if ( !email || !password) {
      setFlag(true);  
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password",JSON.stringify(password));
      setS(true);
    }
}

  return (
    <div className={styles.Forum}>
        <Form onSubmit={handleSubmit}>
            <h4 className={styles.High}>Create Account</h4>
            <p className={styles.Lab}>Enter your email to get started.</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={styles.bld}>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required onChange={(e)=>{setEmail(e.target.value)}}/>
            </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={styles.bld}>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" required onChange={(e)=>{setPassword(e.target.value)}}/>
            </Form.Group> 
            <p className={styles.Lab}>By tapping Next, you agree to our Privacy Policy and Terms & Conditions.</p>
              {s?<Alert  variant='success' className="py-0 mt-2">
                Account Created Successfully
        </Alert>:""}
            <button type='submit' className={styles.Touch} >
                Create Account
            </button>
        </Form>
 
    </div>
  )
}

export default Logup;
