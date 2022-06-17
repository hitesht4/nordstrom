import React,{useState,useEffect} from 'react';
import {Form ,Alert} from 'react-bootstrap'
import styles from './Signin.module.css';
import Image from '../Home/assets/LoginIcon.png';
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';


const SignIn = ({}) => {
  const [emaillog,setEmaillog] = useState("");
  const [passwordlog,setPasswordlog] = useState("");
  const [flag,setFlag] = useState(false);
  const [home,setHome] = useState(false);
  const {auth,login}=useContext(AuthContext);
  const [error,setError]=useState();
  const navigate=useNavigate();

function handleLogin(e) {
  console.log("working");
    e.preventDefault();
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    
    if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
      setHome(false);
      setError(true);
    } else {
      setFlag(false);
      navigate("/")
      login();
    }
  }
    useEffect(()=>{
      if(auth==true){
        navigate('/')
      }
    })

  return (
    <div className={styles.Forum}>
    <Form onSubmit={handleLogin}>
    <h4 className={styles.High}>Welcome back!</h4>
    <p className={styles.Lab}>Sign in with the same info at:</p>
    <img src={Image} alt="" className={styles.Photo}/>
  
        <div >
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={styles.bld}>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    required 
                    onChange={(e)=>setEmaillog(e.target.value)}/>
                  </Form.Group>
        </div>
        
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className={styles.bld}>Passsword</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Enter Password" 
            onChange={(e)=>setPasswordlog(e.target.value)}/>
        </Form.Group>


    <p className={styles.Lab}>Forgot password?Terms & Conditions.</p>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
           <Form.Check className={styles.Lab} type="checkbox" label="Keep Me Signed In" />
      </Form.Group>
        {error?<Alert  variant='danger' className="py-0 mt-2">
                Invalid Credentials 
        </Alert>:""}
    <button type="submit" className={styles.Touch}>Sign In</button>
    </Form>
    </div>

  )
}

export default SignIn