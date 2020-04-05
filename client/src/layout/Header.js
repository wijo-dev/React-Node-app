import React from 'react';
import Axios from 'axios';
import './Header.css';

function Header() {
  console.log('[Header]');
  return (
    <div className="headerDiv">
      <div className='wrap width'>
        <div className='exchangeQuotes'>
          <table>
            <thead>
              <tr>
                <th className="exchange">거래소</th>
                <th className="liveKRW">시세(KRW)</th>
                <th className="liveUSD">시세(USD)</th>
                <th className="changed24">24시간 변동률</th>
                <th className="korPre">한국 프리미엄</th>
                <th className="volum">거래량</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>빗썸</td>
                <td>10,100,100</td>
                <td className="liveUSD">9,100,100</td>
                <td>△ 274,000 +2.68%</td>
                <td className="korPre">+29,263 +0.28%	</td>
                <td>1,077 BTC</td>
              </tr>
              <tr>
                <td>빗썸</td>
                <td>10,100,100</td>
                <td className="liveUSD">9,100,100</td>
                <td>△ 274,000 +2.68%</td>
                <td className="korPre">+29,263 +0.28%	</td>
                <td>1,077 BTC</td>
              </tr>
              <tr>
                <td>빗썸</td>
                <td>10,100,100</td>
                <td className="liveUSD">9,100,100</td>
                <td>△ 274,000 +2.68%</td>
                <td className="korPre">+29,263 +0.28%	</td>
                <td>1,077 BTC</td>
              </tr>
              <tr>
                <td>빗썸</td>
                <td>10,100,100</td>
                <td className="liveUSD">9,100,100</td>
                <td>△ 274,000 +2.68%</td>
                <td className="korPre">+29,263 +0.28%	</td>
                <td>1,077 BTC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Header;