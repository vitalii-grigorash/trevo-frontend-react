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
    handleShowPreloader,
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

export default Wagons;