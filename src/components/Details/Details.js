import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';

function Details() {

  const crumbsArray = [
    'Главная',
    'Картотека',
    'Детали'
  ]

  return (
    <div className="details">
      <Helmet
        title='TREVO: Детали'
      />
      <Header
        crumbsArray={crumbsArray}
      />
      <h1 className="details__text">Details Page</h1>
    </div>
  );

}

export default Details;