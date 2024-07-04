import React, { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";

import { Link } from "react-router-dom";

const LoginForm = () => {
    const [passwordShow, setPasswordShow] = useState(false);
  return (
    <>
      <div className="LoginForm">
        <h6 className="name">Login now</h6>
        <div className="input_inner">
          <div className="inputBox">
            <div className="top">
              <label htmlFor="" className="loginInputLabel">
                Email address
              </label>
            </div>
            <input type="email" />
            <p className="error"></p>
          </div>
          <div className="inputBox">
            <div className="top">
              <label htmlFor="" className="loginInputLabel">
                Password
              </label>


              <button onClick={()=> setPasswordShow(!passwordShow)} className="icon">
                {passwordShow? <><BsFillEyeFill /> Show</> : <><BsFillEyeSlashFill /> Hide</>}
              </button>
            </div>
            <input type="password" />
            <p className="passMsg">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
            <p className="error"></p>
          </div>
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="" className="loginInputLabel">
              Remember me
            </label>
          </div>
          
        </div>
        <div className="btm">
            <button className="loginBtn">Login</button>
            <p>Don't have an account? <Link>Register Now </Link></p>
          </div>
      </div>
    </>
  );
};

export default LoginForm;
