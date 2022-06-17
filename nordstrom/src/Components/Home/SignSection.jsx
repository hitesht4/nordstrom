import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';


const SignSection = () => {
  const navigate=useNavigate();
  return (
    <div className="container-fluid px-4 mb-3">
      <div className="text-center mt-4 pb-5 signup">
        <h5><strong>Shop what you love—faster and easier.</strong></h5>
        <div>
          <button
            className="py-2 mt-2 px-5 rounded-0 border-1 Buton"
            style={{backgroundColor:"#fff",_hover:""}}
            onClick={()=>navigate("/login")}
          >
            <small>Sign In or Create an Account</small>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignSection