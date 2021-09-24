import React from 'react';
import { Helmet } from 'react-helmet-async';

function Administration() {

  return (
    <div className="administration">
      <Helmet
        title='TREVO: Администрирование'
      />
      <h1 className="administration__text">Administration Page</h1>
    </div>
  );

}

export default Administration;