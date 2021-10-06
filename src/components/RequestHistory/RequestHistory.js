import React, { useEffect, useState } from 'react';
import RequestHistoryList from '../RequestHistoryList/RequestHistoryList';

function RequestHistory(props) {

  const {
    requestHistoryList,
    handleShowHistoryList,
    placeholder,
  } = props;

  const [isShowSortOptions, setShowSortOptions] = useState(false);

  useEffect(() => {
    requestHistoryList.map((list) => {
      if (list.id) {
        return setShowSortOptions(true);
      } else {
        return setShowSortOptions(false);
      }
    })
  }, [requestHistoryList]);

  return (
    <div className="request-history">
      <div className="request-history__main-container">

        <div className="request-history__heading-container">
          <h2 className="request-history__heading">Запросы</h2>
          <div className="request-history__search-container">
            <input className="request-history__search-input" type="text" placeholder={placeholder} />
            <div className="request-history__search-icon" />
          </div>
        </div>

        <div className="request-history__reqests-heading">
          <div className="request-history__date-container">
            <p className="request-history__date">Дата запроса</p>
            <div className="request-history__date-sort-icon" />
          </div>
          <p className="request-history__request">Запрос</p>
          <p className="request-history__param">Параметр</p>
          <p className="request-history__status">Статус</p>
          <p className="request-history__actions">Действия</p>
        </div>

        <div className="request-history__list-container">
          {requestHistoryList.map((list) => (
            <RequestHistoryList
              key={list.id}
              id={list.id}
              date={list.date}
              request={list.requestTypeName}
              params={list.params}
              status={list.status}
              handleShowHistoryList={handleShowHistoryList}
            />
          ))}
        </div>

        <div className="request-history__sort-container">
          {isShowSortOptions && (
            <div className="request-history__sort-options-container">
              <div className="request-history__show-result-container">
                <p className="request-history__show-result-text">Показать: 10</p>
                <div className="request-history__show-result-icon" />
              </div>
              <p className="request-history__sort-pages">1-4 из 4</p>
              <div className="request-history__sort-change-page-container">
                <div className="request-history__sort-change-page-prev" />
                <div className="request-history__sort-change-page-next" />
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );

}

export default RequestHistory;