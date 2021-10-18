import React, { useState, useEffect } from 'react';
import MyGroupResultTableItems from '../MyGroupResultTableItems/MyGroupResultTableItems';

function MyGroupResult(props) {

    const {
        carriageGroups,
        selectedGroup,
        isSearchGroupButtonClicked,
        onDeleteGroupClick,
        postNewCarriages,
        deleteCarriagesFromGroup
    } = props;

    const [dataToRender, setDataToRender] = useState([]);
    const [isMyGroupResultTableItemsOpened, setMyGroupResultTableItemsOpened] = useState(false);
    const [isShowSortOptions, setShowSortOptions] = useState(false);
    const [isChoiceContainerActive, setChoiceContainerActive] = useState(false);
    const [selectedResultsShow, setSelectedResultsShow] = useState(10);
    const [showResultsFrom, setShowResultsFrom] = useState(0);
    const [pageCount, setPageCount] = useState(1);
    const [allPages, setAllPages] = useState(0);
    const [resultsShow, setResultsShow] = useState(10);
    const [result, setResult] = useState(10);

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

    function handleMyGroupResultTableItemsOpened() {
        setMyGroupResultTableItemsOpened(true);
    }

    function onChoiceClick(value) {
        setResultsShow(value);
        setResult(value);
        setSelectedResultsShow(value);
        setShowResultsFrom(0);
        setPageCount(1);
    }

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

    useEffect(() => {
        if (isSearchGroupButtonClicked) {
            setDataToRender(selectedGroup);
        } else {
            setDataToRender(carriageGroups);
        }
    }, [isSearchGroupButtonClicked, carriageGroups, selectedGroup])

    useEffect(() => {
        dataToRender.map((list) => {
            if (list.id) {
                return setShowSortOptions(true);
            } else {
                return setShowSortOptions(false);
            }
        })
    }, [dataToRender]);

    return (
        <div className="my-group-result">
            <div className="my-group-result__heading-container">
                <p className="my-group-result__heading-group-number">№ группы</p>
                <p className="my-group-result__heading-group-name">Название группы</p>
                <p className="my-group-result__heading-group-description">Примечание</p>
                <p className="my-group-result__heading-vagons-value">Количество вагонов</p>
            </div>
            {isShowSortOptions ? (
                <>
                    {dataToRender.slice(showResultsFrom, resultsShow).map((data) => {
                        return (
                            <MyGroupResultTableItems
                                key={data.id}
                                groupNumber={data.id}
                                groupName={data.name}
                                vagonsValue={data.numObjectsTracking}
                                description={data.description}
                                isMyGroupResultTableItemsOpened={isMyGroupResultTableItemsOpened}
                                handleMyGroupResultTableItemsOpened={handleMyGroupResultTableItemsOpened}
                                onDeleteGroupClick={onDeleteGroupClick}
                                postNewCarriages={postNewCarriages}
                                deleteCarriagesFromGroup={deleteCarriagesFromGroup}
                            />
                        )
                    })}
                </>
            ) : (
                <>
                    <div className='my-list-result__no-result-container'>
                        <p className='my-list-result__no-result-text'>Необходимо добавить группы</p>
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

export default MyGroupResult;