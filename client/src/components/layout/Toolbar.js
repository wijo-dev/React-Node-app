import React from 'react';
import './Toolbar.css';

class Toolbar extends React.Component {
  render() {
    return (
      <div class='toolbarDiv'>
        <div class='mainLogoDiv'>
          <img class="mainLogo" src="https://source.unsplash.com/random" />
        </div>
        <div class="navDiv">
          <a href="http://bigbiture.com">Home</a>
          <div class="dropdown">
            <button class="dropbtn">게시판<i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">자유게시판</a>
              <a href="#">HOT게시물</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">분석<i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">차트 분석</a>
              <a href="#">차트 분석</a>
              <a href="#">뇌피셜 분석</a>
              <a href="#">오피셜 분석</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">인증<i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">황소 인증</a>
              <a href="#">흑우 인증</a>
            </div>
          </div>
        </div>
        <div class="loginDiv">
          <a href="" class="loginBtn">로그인</a>
          <button class="joinBtn">가입하기</button>
        </div>
      </div>
    )
  }
}

export default Toolbar;