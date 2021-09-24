import React from 'react';
import { Helmet } from 'react-helmet-async';

function Passports() {

  return (
    <div className="passports">
      <Helmet
        title='TREVO: Паспорта'
      />
      <h1 className="passports__text">Passports Page</h1>
    </div>
  );

}

export default Passports;