import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';
import Request from '../Request/Request';
import Response from '../Response/Response';

function Stations(props) {

  const {
    handleOpenRequestList,
    isRequestListOpen,
    addRequest,
    requestHistoryList,
  } = props;

  const crumbsArray = [
    'Главная',
    'Оперативное слежение',
    'Станции',
  ]

  return (
    <div className="stations">
      <Helmet
        title='TREVO: Станции'
      />
      <Header
        crumbsArray={crumbsArray}
      />
      <Request
        heading={'Станции'}
        handleOpenRequestList={handleOpenRequestList}
        isRequestListOpen={isRequestListOpen}
        addRequest={addRequest}
      />
      <Response
        requestHistoryList={requestHistoryList}
      />
    </div>
  );

}

export default Stations;