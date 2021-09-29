import React from 'react';
import { Helmet } from 'react-helmet-async';
import Request from '../Request/Request';
import Response from '../Response/Response';

function Passports(props) {

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
    <div className="passports">
      <Helmet
        title='TREVO: Паспорта'
      />
      <Request
        heading={'Паспорта'}
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
        placeholder={'Номер паспорта'}
      />
    </div>
  );

}

export default Passports;