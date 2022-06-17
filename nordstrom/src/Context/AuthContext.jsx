import React, { createContext ,useState} from "react";
import { useNavigate,useLocation } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const[auth,setAuth]=useState(false);
    const navigate=useNavigate();
    const {state}=useLocation();

    const login=()=>{
        setAuth(true);
        console.log(state);
        if(state.from!==""){
          navigate(state.from ,{replace:true});
        }
        else{
          navigate("/");
        }
    }
    const logout=()=>{
      setAuth(false);
    }
    
  return (
      <AuthContext.Provider value={{auth,login,logout}}>
           {children}
      </AuthContext.Provider>
  )

}