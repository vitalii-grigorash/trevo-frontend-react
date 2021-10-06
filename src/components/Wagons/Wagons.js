import React from 'react';
import { Helmet } from 'react-helmet-async';
import Request from '../Request/Request';
import Response from '../Response/Response';

function Wagons(props) {

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
    <div className="wagons">
      <Helmet
        title='TREVO: Вагоны'
      />
      <Request
        heading={'Вагоны'}
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
        placeholder={'Номер вагона'}
      />
    </div>
  );

}

export default Wagons;