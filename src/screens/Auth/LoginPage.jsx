import React from 'react'
import { loginPage } from '../../constants/contents/AuthContent';
import LoginForm from '../../components/auth/LoginForm';
import '../../styles/auth/LoginPage.css';
import LoginBg from '../../assests/auth/loginBg.png';

const LoginPage = () => {
  return (
    <>
      <div className="LoginPage" style={{backgroundImage:`url(${LoginBg})`}}>
        <div className="LoginPage_inner">
            <div className="left">
                <div className="content">
                    <h5 className="title">{loginPage.title}</h5>
                    <p className='para'>{loginPage.subQuotes}</p>
                </div>
            </div>
            <div className="right">
                <LoginForm/>
            </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage;
