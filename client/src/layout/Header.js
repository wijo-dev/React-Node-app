import React from 'react';
import Axios from 'axios';
import './Header.css';

function Header() {
  return (
    <div className="headerDiv">
      <div className='wrap width'>
        <div className='exchangeQuotes'>
          <table>
            <thead>
              <tr>
                <th>거래소</th>
                <th>실시간 시세</th>
                <th>실시간 시세</th>
                <th>24시간 변동률</th>
                <th>한국 프리미엄</th>
                <th>거래량</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>빗썸</td>
                <td>10,100,100</td>
                <td>9,100,100</td>
                <td>△ 274,000 +2.68%</td>
                <td>+29,263 +0.28%	</td>
                <td>1,077 BTC</td>
              </tr>
              <tr>
                <td>빗썸</td>
                <td>10,100,100</td>
                <td>9,100,100</td>
                <td>△ 274,000 +2.68%</td>
                <td>+29,263 +0.28%	</td>
                <td>1,077 BTC</td>
              </tr>
              <tr>
                <td>빗썸</td>
                <td>10,100,100</td>
                <td>9,100,100</td>
                <td>△ 274,000 +2.68%</td>
                <td>+29,263 +0.28%	</td>
                <td>1,077 BTC</td>
              </tr>
              <tr>
                <td>빗썸</td>
                <td>10,100,100</td>
                <td>9,100,100</td>
                <td>△ 274,000 +2.68%</td>
                <td>+29,263 +0.28%	</td>
                <td>1,077 BTC</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className="top10">
            <span>인기글</span>
            <ol>
              <a href="123"><li>인기글 1</li></a>
              <a href="123"><li>인기글 1</li></a>
              <a href="123"><li>인기글 1</li></a>
              <a href="123"><li>인기글 1</li></a>
              <a href="123"><li>인기글 1</li></a>
              <a href="123"><li>인기글 1</li></a>
              <a href="123"><li>인기글 1</li></a>
              <a href="123"><li>인기글 1</li></a>
              <a href="123"><li>인기글 1</li></a>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Header;