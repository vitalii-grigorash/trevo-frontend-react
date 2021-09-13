import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';

function Settings() {

  const crumbsArray = [
    'Главная',
    'Регламентированное слежение',
    'Настройки',
  ]

  return (
    <div className="settings">
      <Helmet
        title='TREVO: Настройки'
      />
      <Header
        crumbsArray={crumbsArray}
      />
      <h1 className="settings__text">Settings Page</h1>
    </div>
  );

}

export default Settings;