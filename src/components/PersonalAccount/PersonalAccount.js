import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';

function PersonalAccount() {

  return (
    <div className="personal-account">
      <Helmet
        title='TREVO: Личный кабинет'
      />
      <Header />
      <h1 className="personal-account__text">Personal Account</h1>
    </div>
  );

}

export default PersonalAccount;