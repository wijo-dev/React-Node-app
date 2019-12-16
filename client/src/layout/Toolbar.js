import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';

function Toolbar() {
  const [active, setActive] = useState(false);

  const menuClick = (e) => {
    console.log('active = ' ,active);
    setActive(!active);
  };

  return (
    <div className='toolbar'>
      <div className='mainLogoDiv'>
        <img className="mainLogo" src="https://source.unsplash.com/random" />
      </div>
      <div className="navDiv">
        <Link to='/'><i className="fa fa-home"></i></Link>
        <div className="dropdown">
          <button className="dropbtn">게시판<i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/free">자유게시판</Link>
            <Link to="/hot">HOT게시물</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">분석<i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/news">차트 분석</Link>
            <Link to="/died">뇌피셜 분석</Link>
            <Link to="/offi">오피셜 분석</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">인증<i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/gold">황소 인증</Link>
            <Link to="/black">흑우 인증</Link>
          </div>
        </div>
      </div>
      <div className="serach">
        <i className="fa fa-search"></i>
        <input className="main-search"></input>
      </div>
      <div className="m-menu">
        <i className="fa fa-bars" onClick={menuClick}></i>
        {
          {active}?
          <div className='fullScreen'>
            <div className="backScreen" onClick={menuClick}></div>
            <div className="m-menuList">
              <div className='m-login'>로그인</div>
              <button className='m-join'>
                <div>가입하기</div>
              </button>
              <div className='underline'></div>
            </div>
          </div>
          :null
        }
          
      </div>
      <div className="loginDiv">
        <Link to='/login' className="loginBtn">로그인</Link>
        <button className="joinBtn">가입하기</button>
      </div>
    </div>
  );
}

export default Toolbar;