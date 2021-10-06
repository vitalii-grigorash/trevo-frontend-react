import React from 'react';
import { Helmet } from 'react-helmet-async';
import Request from '../Request/Request';
import Response from '../Response/Response';

function Runs(props) {

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
    <div className="runs">
      <Helmet
        title='TREVO: Пробеги'
      />
      <Request
        heading={'Пробеги'}
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
        placeholder={'Введите параметр'}
      />
    </div>
  );

}

export default Runs;