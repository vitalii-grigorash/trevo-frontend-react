import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';

function Administration() {

  const crumbsArray = [
    'Главная',
    'Администрирование'
  ]

  return (
    <div className="administration">
      <Helmet
        title='TREVO: Администрирование'
      />
      <Header
        crumbsArray={crumbsArray}
      />
      <h1 className="administration__text">Administration Page</h1>
    </div>
  );

}

export default Administration;