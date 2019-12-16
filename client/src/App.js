import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Toolbar from './layout/Toolbar';
import Contents from './layout/Contents';
import Footer from './layout/Footer';
import Login from './components/join/login';
import IndexContents from './components/IndexContents';


function App() {
  console.log('[App]');
  return (
    <div id='app'>
      <Toolbar></Toolbar>
      <Switch>
        <Route exact={true} path="/" component={IndexContents} />
        <Route path="/login" component={Login} />
        <Route path="/:path" component={Contents} />
      </Switch>
      <Footer></Footer>
    </div>
  )
}

export default App;
