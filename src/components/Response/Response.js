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
    placeholder,
    requesName,
    requestId,
    urlTypeForDownload,
    removeHistoryListRequest,
  } = props;

  return (
    <div className="response">

      {isInfoShow && (
        <RequestInfo
          isPreloaderShow={isPreloaderShow}
          isInfoShow={isInfoShow}
          requestInfo={requestInfo}
          requesName={requesName}
          requestId={requestId}
          urlTypeForDownload={urlTypeForDownload}
        />
      )}

      <RequestHistory
        requestHistoryList={requestHistoryList}
        handleShowHistoryList={handleShowHistoryList}
        placeholder={placeholder}
        removeHistoryListRequest={removeHistoryListRequest}
        urlTypeForDownload={urlTypeForDownload}
      />

    </div>
  );

}

export default Response;