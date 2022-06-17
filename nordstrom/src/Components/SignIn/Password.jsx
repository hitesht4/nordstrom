import React,{useState} from 'react';
import {Form ,Button} from 'react-bootstrap';
import styles from './Signin.module.css';


const Password = ({setL,password,setPassword,flag,setFlag,s,setS,email}) => {

    const handleSubmit=(e)=>{
    e.preventDefault();
    if (!password) {
      setFlag(true);  
    } else {
      setFlag(false);
      localStorage.setItem("Password", JSON.stringify(password));
      setL(true);
    }
}
  return (
    <div className={styles.Forum}>
    <Form onClick={handleSubmit}>
    <h4 className={styles.High}>Welcome back!</h4>
    <p className={styles.Lab}>Sign in with the same info at:</p>
    <img src={Image} alt="" className={styles.Photo}/>
    <div className={styles.Flx}>
        <div >
           <Form.Group className="mb-3">
            <Form.Label className={styles.bld}>Email</Form.Label>
            <p>{email}</p>  
        </Form.Group>    
        </div>
        <div className={styles.Back} onClick={()=>{setL(false)}}>Edit</div>
    </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className={styles.bld}>Passsword</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
    <p className={styles.Lab}>Forgot password?Terms & Conditions.</p>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
           <Form.Check className={styles.Lab} type="checkbox" label="Keep Me Signed In" />
      </Form.Group>
    <button type="submit" className={styles.Touch}>Sign In</button>
    </Form>
    </div>
  )
}

export default Password