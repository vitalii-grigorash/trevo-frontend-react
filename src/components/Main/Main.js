import React from 'react';
import { Helmet } from 'react-helmet-async';

function Main() {

  return (
    <div className="main">
      <Helmet
        title='TREVO: Главная'
      />
      <h1 className="main__text">Main Page</h1>
    </div>
  );

}

export default Main;