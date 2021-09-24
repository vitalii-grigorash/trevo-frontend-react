import React from 'react';
import { Helmet } from 'react-helmet-async';

function Details() {

  return (
    <div className="details">
      <Helmet
        title='TREVO: Детали'
      />
      <h1 className="details__text">Details Page</h1>
    </div>
  );

}

export default Details;