import React from 'react';
import './Contents.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Free from '../components/border/Free';

function Contents({match}) {
  const path = match.params.path;

  console.log('[Contents]');
  console.log('[path]', match.url);
  console.log('[pathName]', path);
  return(
    <div className='contents'>
      <Header></Header>
      <Switch>
        <Route path="/free" component={Free}/>
        <Route path="/hot" component={Free}/>
      </Switch>
      {/* <Route path={`{$match.url}/hot`} component={Free}/> */}
    </div>
  )
}

export default Contents;