import React, { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { emailValidator, passwordValidator } from "../../utils/inputValidator";
import { storeEncryptedValue } from "../../utils/localStorage";
import { loginApi } from "../../api/auth-api";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../../redux/slice/UserInfoSlice";

const LoginForm = () => {
  const Dispatch = useDispatch();
  const UserInfo = useSelector((state) => state.UserInfo);
  
  const [passwordShow, setPasswordShow] = useState(false);
  const [email, setEmail] = useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: "",
  });
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let emailError = emailValidator(email.value);
    let passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return false;
    }
    return true;
  }

  const handleSubmit = async () => {
    if (!validate()) return;

    if (loading) return;
    setLoading(true);

    try {
      const response = await loginApi({ 
        email: email.value, 
        password: password.value 
      });
      
      Dispatch(
        setUserInfo(
          Object.assign(jwtDecode(response?.token), { token: response?.token })
        )
      );

      if (remember) {
        storeEncryptedValue("token", response?.token);
      }
    }
    catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }


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
            <input type="email" onChange={(e) => setEmail({ value: e.target.value, error: "" })} />
            <p className="error">{email.error}</p>
          </div>
          <div className="inputBox">
            <div className="top">
              <label htmlFor="" className="loginInputLabel">
                Password
              </label>
              <button onClick={() => setPasswordShow(!passwordShow)} className="icon">
                {passwordShow ? <><BsFillEyeFill /> Show</> : <><BsFillEyeSlashFill /> Hide</>}
              </button>
            </div>
            <input type="password" onChange={(e) => setPassword({ value: e.target.value, error: "" })} />
            <p className="error">{password.error}</p>
            <p className="passMsg">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
          </div>
          <div className="remember">
            <input type="checkbox" onChange={() => setRemember(!remember)} />
            <label htmlFor="" className="loginInputLabel">
              Remember me
            </label>
          </div>

        </div>
        <div className="btm">
          <button className="loginBtn" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
