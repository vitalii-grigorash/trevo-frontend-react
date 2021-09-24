import React from 'react';
import { Helmet } from 'react-helmet-async';

function GeneralInquiries() {

  return (
    <div className="general-inquiries">
      <Helmet
        title='TREVO: Общие запросы'
      />
      <h1 className="general-inquiries__text">General Inquiries Page</h1>
    </div>
  );

}

export default GeneralInquiries;