import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';

function Stations() {

  const crumbsArray = [
    'Главная',
    'Оперативное слежение',
    'Станции',
  ]

  return (
    <div className="stations">
      <Helmet
        title='TREVO: Станции'
      />
      <Header
        crumbsArray={crumbsArray}
      />
      <h1 className="stations__text">Stations Page</h1>
    </div>
  );

}

export default Stations;