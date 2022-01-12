import React, { useState, useEffect } from 'react';
import AddForm from '../AddForm/AddForm';
import AlertsCarriagesTabHistory from '../AlertsCarriagesTabHistory/AlertsCarriagesTabHistory';
import alertsCarriages from '../../utils/AlertsCarriages.json';

function AlertsCarriagesTab() {

    const [isAlertsAddOpen, setAlertsAddOpen] = useState(false);
    const [isShowSortOptions, setShowSortOptions] = useState(false);
    const [isChoiceContainerActive, setChoiceContainerActive] = useState(false);
    const [allPages, setAllPages] = useState(0);
    const [showResultsFrom, setShowResultsFrom] = useState(0);
    const [selectedResultsShow, setSelectedResultsShow] = useState(10);
    const [resultsShow, setResultsShow] = useState(10);
    const [result, setResult] = useState(10);
    const [pageCount, setPageCount] = useState(1);

    const executionFrequency = [
        'Каждые 8 часов',
        'Каждые 12 часов',
        'Каждые 24 часа'
    ]

    const alertType = [
        'Простой вагонов у получателя',
        'Простой вагонов у отправителя',
        'Подход вагонов',
        'Вагоны забракованные в ремонт',
        'Вагоны вышедшие из ремонта',
        'Вагон погружен',
        'Сдача вагона на подъездной путь',
        'Прием вагона с подъездного пути',
        'Прибытие контейнеров на станцию',
        'Движение вагона',
        'Движение контейнера'
    ]

    function handleOpenAlertsAdd() {
        if (isAlertsAddOpen) {
            setAlertsAddOpen(false);
        } else {
            setAlertsAddOpen(true);
        }
    }

    function sendForm(sendData) {
        console.log(sendData);
    }

    function handleShowChoiceContainer() {
        if (isChoiceContainerActive) {
            setChoiceContainerActive(false);
        } else {
            setChoiceContainerActive(true);
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
        const pages = alertsCarriages.length / selectedResultsShow
        setAllPages(Math.ceil(pages));
    }, [selectedResultsShow])

    function showNextResults() {
        if (resultsShow >= alertsCarriages.length) {
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
        alertsCarriages.map((list) => {
            if (list.id) {
                return setShowSortOptions(true);
            } else {
                return setShowSortOptions(false);
            }
        })
    }, []);

    return (
        <div className="alerts-carriages-tab">
            <div className="alerts-carriages-tab__add-link-container" onClick={handleOpenAlertsAdd}>
                <div className={`alerts-carriages-tab__add-link-icon ${isAlertsAddOpen && "alerts-carriages-tab__add-link-icon_active"}`} />
                <p className={`alerts-carriages-tab__add-link-text ${isAlertsAddOpen && "alerts-carriages-tab__add-link-text_active"}`}>добавить оповещение</p>
            </div>
            {isAlertsAddOpen && (
                <AddForm
                    formHeading={'Добавить оповещение'}
                    firstSelect={executionFrequency}
                    firstContainerSpan={'Частота выполнения'}
                    firstDefault={'Каждые 8 часов'}
                    secondSelect={alertType}
                    secondContainerSpan={'Тип оповещения'}
                    secondDefault={'Простой вагона у получателя'}
                    sendForm={sendForm}
                />
            )}
            <div className="alerts-carriages-tab__history-table">
                <div className="alerts-carriages-tab__history-table-heading-container">
                    <p className="alerts-carriages-tab__history-table-heading alerts-carriages-tab__history-table-heading_type">Тип оповещения</p>
                    <p className="alerts-carriages-tab__history-table-heading alerts-carriages-tab__history-table-heading_description">Комментарий</p>
                    <p className="alerts-carriages-tab__history-table-heading alerts-carriages-tab__history-table-heading_email">Адреса</p>
                    <p className="alerts-carriages-tab__history-table-heading alerts-carriages-tab__history-table-heading_execution-frequency">Частота выполнения</p>
                </div>
                {alertsCarriages.slice(showResultsFrom, resultsShow).map((list) => (
                    <AlertsCarriagesTabHistory
                        key={list.id}
                        id={list.id}
                        type={list.type}
                        description={list.description}
                        email={list.email}
                        executionFrequency={list.executionFrequency}
                    />
                ))}
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

export default AlertsCarriagesTab;