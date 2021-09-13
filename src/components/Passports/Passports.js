import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';

function Passports() {

  const crumbsArray = [
    'Главная',
    'Картотека',
    'Паспорта'
  ]

  return (
    <div className="passports">
      <Helmet
        title='TREVO: Паспорта'
      />
      <Header
        crumbsArray={crumbsArray}
      />
      <h1 className="passports__text">Passports Page</h1>
    </div>
  );

}

export default Passports;