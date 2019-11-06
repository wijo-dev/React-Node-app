import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '12341',
  'gender': 'docter',
  'job':'개발자'
  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/any',
  'name': '워냐',
  'birthday': '12341',
  'gender': 'docter',
  'job':'개발자'
  },
  {
  'id': 3,
  'image': 'https://placeimg.com/64/64/any',
  'name': '다보',
  'birthday': '12341',
  'gender': 'engineer',
  'job':'데이타 엔지니어'
  },
]
function App() {
  return (
    <div>{
      customers.map(c => {
        return(
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })
    }
    </div>
  );
}

export default App;
