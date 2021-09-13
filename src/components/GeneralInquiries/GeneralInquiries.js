import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';

function GeneralInquiries() {

  const crumbsArray = [
    'Главная',
    'Картотека',
    'Общие запросы',
  ]

  return (
    <div className="general-inquiries">
      <Helmet
        title='TREVO: Общие запросы'
      />
      <Header
        crumbsArray={crumbsArray}
      />
      <h1 className="general-inquiries__text">General Inquiries Page</h1>
    </div>
  );

}

export default GeneralInquiries;