import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Request from '../Request/Request';
import Response from '../Response/Response';
import { useLocation } from 'react-router-dom';
import * as Api from '../../utils/Api';

function Runs(props) {

  const {
    handleOpenRequestList,
    isRequestListOpen,
    addRequest,
    requestHistoryList,
    handleShowHistoryList,
    isPreloaderShow,
    isInfoShow,
    requestInfo,
    requesName
  } = props;

  const { pathname } = useLocation();
  const [requesList, setRequestList] = useState([]);

  useEffect(() => {
    if (pathname === '/runs') {
      Api.getRequestType()
        .then((data) => {
          setRequestList(data);
        })
        .catch((err) => console.log(`Ошибка при загрузке списка типов запросов: ${err}`));
    }
  }, [pathname]);

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
        requesList={requesList}
      />
      <Response
        requestHistoryList={requestHistoryList}
        isPreloaderShow={isPreloaderShow}
        handleShowHistoryList={handleShowHistoryList}
        isInfoShow={isInfoShow}
        requestInfo={requestInfo}
        placeholder={'Введите параметр'}
        requesName={requesName}
      />
    </div>
  );

}

export default Runs;