import React from 'react';
import './Toolbar.css';

class Toolbar extends React.Component {
  render() {
    return(
      <div class='toolbarDiv'>
        <div class='mainLogoDiv'>
          <img class="mainLogo" src="https://source.unsplash.com/random" />
        </div>
        <div class="nav">
          <ul class="navItem">
            <li><a href="">분석</a></li>
              <ul class="hide">
                <li><a href="">차트분석</a></li>
                <li><a href="">뇌피셜분석</a></li>
                <li><a href="">오피셜분석</a></li>
              </ul>
          </ul>
          <ul class="navItem">
            <li><a href="">게시판</a></li>
              <ul class="hide">
                <li><a href="">자유게시판</a></li>
                <li><a href="">인기글</a></li>
                <li><a href="">오피셜분석</a></li>
              </ul>
          </ul>
          <ul class="navItem">
            <li><a href="">인증</a></li>
              <ul class="hide">
                <li><a href="">황소인증</a></li>
                <li><a href="">흑우인증</a></li>
              </ul>
          </ul>
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