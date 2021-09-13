import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';

function Repairs() {

  const crumbsArray = [
    'Главная',
    'Картотека',
    'Ремонты'
  ]

  return (
    <div className="repairs">
      <Helmet
        title='TREVO: Ремонты'
      />
      <Header
        crumbsArray={crumbsArray}
      />
      <h1 className="repairs__text">Repairs Page</h1>
    </div>
  );

}

export default Repairs;