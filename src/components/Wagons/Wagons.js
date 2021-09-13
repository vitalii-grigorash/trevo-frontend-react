import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';

function Wagons() {

  const crumbsArray = [
    'Главная',
    'Оперативное слежение',
    'Вагоны',
  ]

  return (
    <div className="wagons">
      <Helmet
        title='TREVO: Вагоны'
      />
      <Header
        crumbsArray={crumbsArray}
      />
      <h1 className="wagons__text">Wagons Page</h1>
    </div>
  );

}

export default Wagons;