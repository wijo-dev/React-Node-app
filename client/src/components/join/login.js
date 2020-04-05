import React from 'react';
import './login.css';

function Login() {
  console.log('[Login]');
  return(
    <div className="login">
      <div className="login-form">
        <h2>LOGIN</h2>
        <p>로그인하는 사이트의 주소가 아래와 같은지 확인하세요.</p>
        <p>http://www.bigbiture.com</p>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button className="login-btn">로그인</button>
      </div>
    </div>
  )
}

export default Login;