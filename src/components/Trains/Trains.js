import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Request from '../Request/Request';
import Response from '../Response/Response';
import { useLocation } from 'react-router-dom';
import * as StationsPageApi from '../../utils/StationsPageApi';

function Trains(props) {

  const {
    handleOpenRequestList,
    isRequestListOpen,
    addRequest,
    requestHistoryList,
    handleShowHistoryList,
    isPreloaderShow,
    isInfoShow,
    requestInfo,
    requesName,
    requesId,
    removeHistoryListRequest
  } = props;

  const { pathname } = useLocation();
  const [requesList, setRequestList] = useState([]);

  useEffect(() => {
    if (pathname === '/trains') {
      StationsPageApi.getRequestType()
        .then((data) => {
          setRequestList(data);
        })
        .catch((err) => console.log(`Ошибка при загрузке списка типов запросов: ${err}`));
    }
  }, [pathname]);

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
        requesList={requesList}
      />
      <Response
        requestHistoryList={requestHistoryList}
        isPreloaderShow={isPreloaderShow}
        handleShowHistoryList={handleShowHistoryList}
        isInfoShow={isInfoShow}
        requestInfo={requestInfo}
        placeholder={'Номер поезда'}
        requesName={requesName}
        requesId={requesId}
        removeHistoryListRequest={removeHistoryListRequest}
      />
    </div>
  );

}

export default Trains;