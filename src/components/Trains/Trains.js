import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';

function Trains() {

  const crumbsArray = [
    'Главная',
    'Оперативное слежение',
    'Поезда',
  ]

  return (
    <div className="trains">
      <Helmet
        title='TREVO: Поезда'
      />
      <Header
        crumbsArray={crumbsArray}
      />
      <h1 className="trains__text">Trains Page</h1>
    </div>
  );

}

export default Trains;