import React, { useState, useEffect } from 'react';
import MyListResultItem from '../MyListResultItem/MyListResultItem';

function MyListResult(props) {

  const {
    onCheckboxClick,
    carriageList,
    selectedGroupCarriages,
    isSearchButtonClicked,
    selectAllWagons,
    isAllWagonsSelected
  } = props;

  const [dataToRender, setDataToRender] = useState([]);
  const [isShowSortOptions, setShowSortOptions] = useState(false);
  const [isChoiceContainerActive, setChoiceContainerActive] = useState(false);
  const [showResultsFrom, setShowResultsFrom] = useState(0);
  const [selectedResultsShow, setSelectedResultsShow] = useState(10);
  const [resultsShow, setResultsShow] = useState(10);
  const [result, setResult] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  const [allPages, setAllPages] = useState(0);

  function handleShowChoiceContainer() {
    if (isChoiceContainerActive) {
      setChoiceContainerActive(false);
    } else {
      setChoiceContainerActive(true);
    }
  }

  useEffect(() => {
    const pages = dataToRender.length / selectedResultsShow
    setAllPages(Math.ceil(pages));
  }, [dataToRender.length, selectedResultsShow])

  function showNextResults() {
    if (resultsShow >= dataToRender.length) {
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

  function onChoiceClick(value) {
    setResultsShow(value);
    setResult(value);
    setSelectedResultsShow(value);
    setShowResultsFrom(0);
    setPageCount(1);
  }

  useEffect(() => {
    setShowSortOptions(false);
    if (isSearchButtonClicked) {
      setDataToRender(selectedGroupCarriages);
    } else {
      setDataToRender(carriageList);
    }
  }, [isSearchButtonClicked, carriageList, selectedGroupCarriages])

  useEffect(() => {
    dataToRender.map((list) => {
      if (list.id) {
        return setShowSortOptions(true);
      } else {
        return setShowSortOptions(false);
      }
    })
  }, [dataToRender, carriageList]);

  return (
    <div className="my-list-result">
      <div className="my-list-result__heading-container">
        <div className="my-list-result__checkbox">
          <input
            id="AllWagonSelectCheckbox"
            type="checkbox"
            onChange={selectAllWagons}
            checked={isAllWagonsSelected}
          />
          <label htmlFor="AllWagonSelectCheckbox"></label>
        </div>
        <p className="my-list-result__heading-number">№ вагона</p>
        <p className="my-list-result__heading-name">Название группы</p>
        <p className="my-list-result__heading-date">Дата постановки</p>
        <p className="my-list-result__heading-description">Примечание</p>
      </div>
      {isShowSortOptions ? (
        <>
          {dataToRender.slice(showResultsFrom, resultsShow).map((data) => {
            return (
              <MyListResultItem
                key={data.id}
                id={data.id}
                groupId={data.groupId}
                carriageNumber={data.carriageNumber}
                groupName={data.groupName}
                trackingStartDate={data.trackingStartDate}
                description={data.description}
                onCheckboxClick={onCheckboxClick}
                isAllWagonsSelected={isAllWagonsSelected}
              />
            )
          })}
        </>
      ) : (
        <>
          <div className='my-list-result__no-result-container'>
            <p className='my-list-result__no-result-text'>Необходимо добавить вагоны</p>
          </div>
        </>
      )}
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
  );

}

export default MyListResult;