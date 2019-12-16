import React from 'react';
import Header from '../layout/Header';

function IndexContents() {
  console.log('[IndexContents]');
  return(
    <div className="IndexContents">
      <Header></Header>
      <h1>IndexContents</h1>
    </div>
  )
}

export default IndexContents;