import React,{useContext} from "react";
import { AuthContext } from '../../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const RequiredAuth = ({ children }) => {
    const {auth}=useContext(AuthContext);
    const {pathname}=useLocation();
    
    if(auth){
      return(
         children
      )
    }else{
       return(
         <Navigate to="/login" 
         state={{from:pathname}}  
         replace/>
      )
    }
  
};

export default RequiredAuth;