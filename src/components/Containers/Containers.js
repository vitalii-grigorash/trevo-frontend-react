import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';
import Request from '../Request/Request';
import Response from '../Response/Response';

function Containers(props) {

  const {
    handleOpenRequestList,
    isRequestListOpen,
    addRequest,
    requestHistoryList,
    handleShowPreloader,
    isPreloaderShow,
    isInfoShow,
    requestInfo
  } = props;

  const crumbsArray = [
    'Главная',
    'Оперативное слежение',
    'Контейнеры',
  ]

  return (
    <div className="containers">
      <Helmet
        title='TREVO: Контейнеры'
      />
      <Header
        crumbsArray={crumbsArray}
      />
      <Request
        heading={'Контейнеры'}
        handleOpenRequestList={handleOpenRequestList}
        isRequestListOpen={isRequestListOpen}
        addRequest={addRequest}
        handleShowPreloader={handleShowPreloader}
      />
      <Response
        requestHistoryList={requestHistoryList}
        isPreloaderShow={isPreloaderShow}
        handleShowPreloader={handleShowPreloader}
        isInfoShow={isInfoShow}
        requestInfo={requestInfo}
      />
    </div>
  );

}

export default Containers;