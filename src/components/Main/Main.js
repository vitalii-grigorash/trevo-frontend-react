import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';

function Main() {

  const crumbsArray = [
    'Главная'
  ]

  return (
    <div className="main">
      <Helmet
        title='TREVO: Главная'
      />
      <Header
        crumbsArray={crumbsArray}
      />
      <h1 className="main__text">Main Page</h1>
    </div>
  );

}

export default Main;