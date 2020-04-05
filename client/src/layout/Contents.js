import React from 'react';
import './Contents.css';
import { Route, Switch } from 'react-router-dom';

import Free from '../components/border/Free';

function Contents({match}) {
  // const path = match.params.path;

  console.log('[Contents]');
  return(
    <div className='contents'>
      <Switch>
        <Route path="/free" component={Free}/>
        <Route path="/hot" component={Free}/>
      </Switch>
      {/* <Route path={`{$match.url}/hot`} component={Free}/> */}
    </div>
  )
}

export default Contents;