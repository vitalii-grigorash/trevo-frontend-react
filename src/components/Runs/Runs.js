import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';

function Runs() {

  const crumbsArray = [
    'Главная',
    'Картотека',
    'Пробеги'
  ]

  return (
    <div className="runs">
      <Helmet
        title='TREVO: Пробеги'
      />
      <Header
        crumbsArray={crumbsArray}
      />
      <h1 className="runs__text">Runs Page</h1>
    </div>
  );

}

export default Runs;