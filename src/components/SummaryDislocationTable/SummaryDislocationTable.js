import React, { useState, useEffect } from 'react';
import Table from '../Table/Table';

function SummaryDislocationTable(props) {

    const {
        tables
    } = props;

    const [isChoiceContainerActive, setChoiceContainerActive] = useState(false);
    const [selectedResultsShow, setSelectedResultsShow] = useState(10);
    const [resultsShow, setResultsShow] = useState(10);
    const [showResultsFrom, setShowResultsFrom] = useState(0);
    const [result, setResult] = useState(10);
    const [pageCount, setPageCount] = useState(1);
    const [allPages, setAllPages] = useState(0);

    useEffect(() => {
        const data = (tables.carriageData.columns[0].data);
        const pages = data.length / selectedResultsShow
        setAllPages(Math.ceil(pages));
    }, [tables.carriageData.length, selectedResultsShow, tables.carriageData.columns])

    function handleShowChoiceContainer() {
        if (isChoiceContainerActive) {
            setChoiceContainerActive(false);
        } else {
            setChoiceContainerActive(true);
        }
    }

    function showNextResults() {
        const data = (tables.carriageData.columns[0].data);
        if (resultsShow >= data.length) {
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

    return (
        <div className="summary-dislocation-table">
            <div className="summary-dislocation-table__tables-container">
                {tables.carriageData !== null && (
                    <Table
                        table={tables.carriageData}
                        resultsShow={resultsShow}
                        showResultsFrom={showResultsFrom}
                    />
                )}
                {tables.carriageDislocation !== null && (
                    <Table
                        table={tables.carriageDislocation}
                        resultsShow={resultsShow}
                        showResultsFrom={showResultsFrom}
                    />
                )}
                {tables.carriageTechnicalCondition !== null && (
                    <Table
                        table={tables.carriageTechnicalCondition}
                        resultsShow={resultsShow}
                        showResultsFrom={showResultsFrom}
                    />
                )}
                {tables.carriageDataSmall !== null && (
                    <Table
                        table={tables.carriageDataSmall}
                        resultsShow={resultsShow}
                        showResultsFrom={showResultsFrom}
                    />
                )}
                {tables.carriageRepairs !== null && (
                    <Table
                        table={tables.carriageRepairs}
                        resultsShow={resultsShow}
                        showResultsFrom={showResultsFrom}
                    />
                )}
            </div>
            <div className="summary-dislocation-table__bottom-container">
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
            </div>
        </div>
    );
}

export default SummaryDislocationTable;
