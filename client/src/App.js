import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Toolbar from './layout/Toolbar';
import Contents from './layout/Contents';
import Footer from './layout/Footer';
import Login from './components/join/login';
import Home from './components/Home';
import Header from './layout/Header';


function App() {
  console.log('[App]');
  return (
    <div id='app'>
      <Toolbar></Toolbar>
      <Header></Header>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/:path" component={Contents} />
      </Switch>
      <Footer></Footer>
    </div>
  )
}

export default App;
