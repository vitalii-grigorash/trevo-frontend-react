import React, { useEffect, useState } from 'react';
import RequestHistoryList from '../RequestHistoryList/RequestHistoryList';

function RequestHistory(props) {

  const {
    requestHistoryList,
    handleShowHistoryList,
    placeholder,
    removeHistoryListRequest,
  } = props;

  const [isShowSortOptions, setShowSortOptions] = useState(false);
  const [isChoiceContainerActive, setChoiceContainerActive] = useState(false);
  const [showResultsFrom, setShowResultsFrom] = useState(0);
  const [selectedResultsShow, setSelectedResultsShow] = useState(10);
  const [resultsShow, setResultsShow] = useState(10);
  const [result, setResult] = useState(10);
  const [allPages, setAllPages] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [isReverse, setReverse] = useState(false);
  const [requestHistoryListReverse, setRequestHistoryListReverse] = useState([]);
  const historyList = isReverse ? requestHistoryListReverse : requestHistoryList;

  function handleDateSort () {
    if (isReverse) {
      setRequestHistoryListReverse(requestHistoryList.reverse());
      setReverse(false);
    } else {
      setRequestHistoryListReverse(requestHistoryList.reverse());
      setReverse(true);
    }
  }

  useEffect(() => {
    const pages = requestHistoryList.length / selectedResultsShow
    setAllPages(Math.ceil(pages));
  }, [requestHistoryList.length, selectedResultsShow])

  function showNextResults() {
    if (resultsShow >= requestHistoryList.length) {
      return
    } else {
      setShowResultsFrom(0 + resultsShow);
      setResultsShow(result + resultsShow);
      setPageCount(pageCount + 1)
    }
  }

  function showPrevResults() {
    if (resultsShow <= result) {
      return
    } else {
      setShowResultsFrom(showResultsFrom - result);
      setResultsShow(resultsShow - result);
      setPageCount(pageCount - 1)
    }
  }

  useEffect(() => {
    requestHistoryList.map((list) => {
      if (list.id) {
        return setShowSortOptions(true);
      } else {
        return setShowSortOptions(false);
      }
    })
  }, [requestHistoryList]);

  function handleShowChoiceContainer() {
    if (isChoiceContainerActive) {
      setChoiceContainerActive(false);
    } else {
      setChoiceContainerActive(true);
    }
  }

  function onChoiceClick (value) {
    setResultsShow(value);
    setResult(value);
    setSelectedResultsShow(value);
    setShowResultsFrom(0);
    setPageCount(1);
  }

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
            <div className="request-history__date-sort-icon" onClick={handleDateSort} />
          </div>
          <p className="request-history__request">Запрос</p>
          <p className="request-history__param">Параметр</p>
          <p className="request-history__status">Статус</p>
          <p className="request-history__actions">Действия</p>
        </div>
        <div className="request-history__list-container">
          {historyList.slice(showResultsFrom, resultsShow).map((list) => (
            <RequestHistoryList
              key={list.id}
              id={list.id}
              date={list.date}
              request={list.requestTypeName}
              params={list.params}
              status={list.status}
              handleShowHistoryList={handleShowHistoryList}
              removeHistoryListRequest={removeHistoryListRequest}
            />
          ))}
        </div>
        <div className="request-history__sort-container">
          {isShowSortOptions && (
            <div className="request-history__sort-options-container">
              <div className="request-history__show-result-container" onClick={handleShowChoiceContainer}>
                <p className="request-history__show-result-text">Показать: {selectedResultsShow}</p>
                <div className="request-history__show-result-icon" />
                {isChoiceContainerActive && (
                  <div className="request-history__show-result-choice-container">
                    <div className="request-history__show-result-choice" onClick={() => onChoiceClick(10)}>
                      <p className="request-history__show-result-choice-value">10</p>
                    </div>
                    <div className="request-history__show-result-choice" onClick={() => onChoiceClick(50)}>
                      <p className="request-history__show-result-choice-value">50</p>
                    </div>
                    <div className="request-history__show-result-choice" onClick={() => onChoiceClick(100)}>
                      <p className="request-history__show-result-choice-value">100</p>
                    </div>
                    <div className="request-history__show-result-choice" onClick={() => onChoiceClick(500)}>
                      <p className="request-history__show-result-choice-value">500</p>
                    </div>
                    <div className="request-history__show-result-choice" onClick={() => onChoiceClick(1000)}>
                      <p className="request-history__show-result-choice-value">1000</p>
                    </div>
                  </div>
                )}
              </div>
              <p className="request-history__sort-pages">{pageCount} из {allPages}</p>
              <div className="request-history__sort-change-page-container">
                <div className="request-history__sort-change-page-prev" onClick={showPrevResults} />
                <div className="request-history__sort-change-page-next" onClick={showNextResults} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RequestHistory;