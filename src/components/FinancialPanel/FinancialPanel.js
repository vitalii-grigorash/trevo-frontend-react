import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';

function FinancialPanel() {

  const crumbsArray = [
    'Главная',
    'Финансовая панель'
  ]

  return (
    <div className="financial-panel">
      <Helmet
        title='TREVO: Финансовая панель'
      />
      <Header
        crumbsArray={crumbsArray}
      />
      <h1 className="financial-panel__text">Financial Panel Page</h1>
    </div>
  );

}

export default FinancialPanel;