import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';

function Containers() {

  const crumbsArray = [
    'Главная',
    'Оперативное слежение',
    'Контейнеры',
  ]

  return (
    <div className="containers">
      <Helmet
        title='TREVO: Контейнеры'
      />
      <Header
        crumbsArray={crumbsArray}
      />
      <h1 className="containers__text">Containers Page</h1>
    </div>
  );

}

export default Containers;