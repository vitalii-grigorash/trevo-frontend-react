import React from 'react';
import { Helmet } from 'react-helmet-async';
import Request from '../Request/Request';
import Response from '../Response/Response';

function Trains(props) {

  const {
    handleOpenRequestList,
    isRequestListOpen,
    addRequest,
    requestHistoryList,
    handleShowHistoryList,
    isPreloaderShow,
    isInfoShow,
    requestInfo
  } = props;

  return (
    <div className="trains">
      <Helmet
        title='TREVO: Поезда'
      />
      <Request
        heading={'Поезда'}
        handleOpenRequestList={handleOpenRequestList}
        isRequestListOpen={isRequestListOpen}
        addRequest={addRequest}
      />
      <Response
        requestHistoryList={requestHistoryList}
        isPreloaderShow={isPreloaderShow}
        handleShowHistoryList={handleShowHistoryList}
        isInfoShow={isInfoShow}
        requestInfo={requestInfo}
        placeholder={'Номер поезда'}
      />
    </div>
  );

}

export default Trains;