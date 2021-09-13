import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';

function Dislocation() {

  const crumbsArray = [
    'Главная',
    'Регламентированное слежение',
    'Дислокация',
  ]

  return (
    <div className="dislocation">
      <Helmet
        title='TREVO: Дислокация'
      />
      <Header
        crumbsArray={crumbsArray}
      />
      <h1 className="dislocation__text">Dislocation Page</h1>
    </div>
  );

}

export default Dislocation;