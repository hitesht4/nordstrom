import React,{useState}  from 'react'
import SignIn from '../Components/SignIn/SignIn';
import Navabar from '../Components/Navabar';
import SignUp from '../Components/SignIn/Logup';
import styles from './login.module.css';

const Login = () => {
  const[In,setIn]=useState(true);
   const[Up,setUp]=useState(false);
   

   const handleStop=()=>{
       setUp(true);
       setIn(false);
   }
   const handleTimer=()=>{
       setIn(true);
       setUp(false);
   }

  return (
    <div>
      <div>
        <Navabar/>
      </div>


      <div className={styles.ContainerIn}>    
           <div className={styles.control}>
            <div onClick={handleTimer}
              style={{borderBottom:In?"3px solid #000000":"none",color:In?"#000000" :"darkgrey"}}>
             SIGN IN
            </div>

          <div onClick={handleStop}
            style={{borderBottom:Up?"3px solid #000000":"none",color:Up?
            "#000000":"darkgrey"}}>
             SIGN UP
          </div>

        
        </div>
    <div>
     {In?<SignIn/>: <SignUp/> }
     </div>
      </div>
      
    </div>
  )
}

export default Login