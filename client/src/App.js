import React from 'react';
import './App.css';
import Toolbar from './components/layout/Toolbar';
import Contents from './components/layout/Contents';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

function App() {
  return (
    <div id='app'>
      <Toolbar></Toolbar>
      <Header></Header>
      <Contents></Contents>
      <Footer></Footer>
    </div>
  )
}

export default App;
