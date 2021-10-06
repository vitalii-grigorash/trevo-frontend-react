import React from 'react';
import RequestHistory from '../RequestHistory/RequestHistory';
import RequestInfo from '../RequestInfo/RequestInfo';

function Response(props) {

  const {
    requestHistoryList,
    handleShowHistoryList,
    isPreloaderShow,
    isInfoShow,
    requestInfo,
    placeholder
  } = props;

  return (
    <div className="response">

      {isInfoShow && (
        <RequestInfo
          isPreloaderShow={isPreloaderShow}
          isInfoShow={isInfoShow}
          requestInfo={requestInfo}
        />
      )}

      <RequestHistory
        requestHistoryList={requestHistoryList}
        handleShowHistoryList={handleShowHistoryList}
        placeholder={placeholder}
      />

    </div>
  );

}

export default Response;