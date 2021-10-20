import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Request from '../Request/Request';
import Response from '../Response/Response';
import { useLocation } from 'react-router-dom';
import * as CarriagesPageApi from '../../utils/CarriagesPageApi';

function Carriages(props) {

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
  const urlTypeForDownload = 'carriage';

  useEffect(() => {
    if (pathname === '/сarriages') {
      closeInfoContainer();
      getRequestHistoryList(CarriagesPageApi);
      CarriagesPageApi.getRequestType()
        .then((data) => {
          setRequestList(data);
        })
        .catch((err) => console.log(`Ошибка при загрузке списка типов запросов: ${err}`));
    }
    // eslint-disable-next-line
  }, [pathname]);

  function addRequest(requestData) {
    sendRequest(requestData, CarriagesPageApi);
  }

  function removeHistoryListRequest(id) {
    removeRequestFromHistoryList(id, CarriagesPageApi);
  }

  function handleShowHistoryList(id) {
    handleShowInfo(id, CarriagesPageApi);
  }

  return (
    <div className="carriages">
      <Helmet
        title='TREVO: Вагоны'
      />
      <Request
        heading={'Вагоны'}
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
        placeholder={'Номер вагона'}
        requesName={requesName}
        requestId={requestId}
        urlTypeForDownload={urlTypeForDownload}
        removeHistoryListRequest={removeHistoryListRequest}
      />
    </div>
  );

}

export default Carriages;