import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Request from '../Request/Request';
import Response from '../Response/Response';
import { useLocation } from 'react-router-dom';
import * as StationsPageApi from '../../utils/StationsPageApi';

function Details(props) {

  const {
    handleOpenRequestList,
    isRequestListOpen,
    getRequestHistoryList,
    requestHistoryList,
    sendRequest,
    removeRequestFromHistoryList,
    handleShowInfo,
    requesName,
    isPreloaderShow,
    isInfoShow,
    requestInfo,
    requestId,
    closeInfoContainer
  } = props;

  const { pathname } = useLocation();
  const [requesList, setRequestList] = useState([]);
  const urlTypeForDownload = 'station';

  useEffect(() => {
    if (pathname === '/details') {
      closeInfoContainer();
      getRequestHistoryList(StationsPageApi);
      StationsPageApi.getRequestType()
        .then((data) => {
          setRequestList(data);
        })
        .catch((err) => console.log(`Ошибка при загрузке списка типов запросов: ${err}`));
    }
    // eslint-disable-next-line
  }, [pathname]);

  function addRequest(requestData) {
    sendRequest(requestData, StationsPageApi);
  }

  function removeHistoryListRequest(id) {
    removeRequestFromHistoryList(id, StationsPageApi);
  }

  function handleShowHistoryList(id) {
    handleShowInfo(id, StationsPageApi);
  }

  return (
    <div className="details">
      <Helmet
        title='TREVO: Детали'
      />
      <Request
        heading={'Детали'}
        handleOpenRequestList={handleOpenRequestList}
        isRequestListOpen={isRequestListOpen}
        addRequest={addRequest}
        requesList={requesList}
      />
      <Response
        requestHistoryList={requestHistoryList}
        isPreloaderShow={isPreloaderShow}
        handleShowHistoryList={handleShowHistoryList}
        isInfoShow={isInfoShow}
        requestInfo={requestInfo}
        placeholder={'Номер детали'}
        requesName={requesName}
        requestId={requestId}
        urlTypeForDownload={urlTypeForDownload}
        removeHistoryListRequest={removeHistoryListRequest}
      />
    </div>
  );

}

export default Details;