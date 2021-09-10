import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';

function StationsPage() {

  const crumbsArray = [
    'Оперативное слежение',
    'Станции',
  ]

  return (
    <div className="stations-page">
      <Helmet
        title='TREVO: Станции'
      />
        <Header
          crumbsArray={crumbsArray}
        />
        <h1 className="stations-page__text">Stations Page</h1>
    </div>
  );

}

export default StationsPage;