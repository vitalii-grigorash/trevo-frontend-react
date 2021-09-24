import React from 'react';
import { Helmet } from 'react-helmet-async';

function FinancialPanel() {

  return (
    <div className="financial-panel">
      <Helmet
        title='TREVO: Финансовая панель'
      />
      <h1 className="financial-panel__text">Financial Panel Page</h1>
    </div>
  );

}

export default FinancialPanel;