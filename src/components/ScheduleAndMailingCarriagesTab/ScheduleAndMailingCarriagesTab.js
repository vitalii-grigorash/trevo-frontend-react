import React, { useState, useEffect } from 'react';
import AddForm from '../AddForm/AddForm';
import ScheduleAndMailingCarriagesTabHistory from '../ScheduleAndMailingCarriagesTabHistory/ScheduleAndMailingCarriagesTabHistory';
import * as SettingsPageApi from '../../utils/SettingPageApi';

function ScheduleAndMailingCarriagesTab() {

    const [isScheduleAddOpen, setScheduleAddOpen] = useState(false);
    const [isShowSortOptions, setShowSortOptions] = useState(false);
    const [isChoiceContainerActive, setChoiceContainerActive] = useState(false);
    const [allPages, setAllPages] = useState(0);
    const [showResultsFrom, setShowResultsFrom] = useState(0);
    const [selectedResultsShow, setSelectedResultsShow] = useState(10);
    const [resultsShow, setResultsShow] = useState(10);
    const [result, setResult] = useState(10);
    const [pageCount, setPageCount] = useState(1);
    const [mailingList, setMailingList] = useState([]);

    const timeSelect = [
        "9:00",
        "12:00",
        "15:00",
        "18:00",
        "21:00"
    ]

    const daySelect = [
        "Ежедневно",
        "По рабочим дням"
    ]

    function handleOpenScheduleAdd() {
        if (isScheduleAddOpen) {
            setScheduleAddOpen(false);
        } else {
            setScheduleAddOpen(true);
        }
    }

    function getMailingSubscription() {
        SettingsPageApi.getMailingSubscription()
            .then((res) => {
                setMailingList(res);
            })
            .catch((err) => console.log(`Ошибка при загрузке расписаний и рассылок: ${err}`));
    }

    useEffect(() => {
        getMailingSubscription();
    }, [])

    function sendForm(sendData) {
        const executionDays = sendData.secondValue === "Ежедневно" ? true : false;
        const mailing = {
            to: sendData.email,
            comment: sendData.description,
            subject: sendData.theme,
            text: sendData.text,
            time: sendData.firstValue,
            isEveryday: executionDays
        }
        SettingsPageApi.postMailingSubscription(mailing)
            .then(() => {
                getMailingSubscription();
            })
            .catch((err) => console.log(`Ошибка при создании новой рассылки: ${err}`));
    }

    function removeMailing(id) {
        SettingsPageApi.deleteMailingSubscription(id)
            .then(() => {
                getMailingSubscription();
            })
            .catch((err) => console.log(`Ошибка при удалении расписания: ${err}`));
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
        if (mailingList === null) {
            return
        } else {
            const pages = mailingList.length / selectedResultsShow
            setAllPages(Math.ceil(pages));
        }
    }, [selectedResultsShow, mailingList])

    function showNextResults() {
        if (resultsShow >= mailingList.length) {
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
        if (mailingList === null) {
            return
        } else {
            mailingList.map((list) => {
                if (list.ID) {
                    return setShowSortOptions(true);
                } else {
                    return setShowSortOptions(false);
                }
            })
        }
    }, [mailingList]);

    return (
        <div className="schedule-and-mailing-carriages-tab">
            <div className="schedule-and-mailing-carriages-tab__add-link-container" onClick={handleOpenScheduleAdd}>
                <div className={`schedule-and-mailing-carriages-tab__add-link-icon ${isScheduleAddOpen && "schedule-and-mailing-carriages-tab__add-link-icon_active"}`} />
                <p className={`schedule-and-mailing-carriages-tab__add-link-text ${isScheduleAddOpen && "schedule-and-mailing-carriages-tab__add-link-text_active"}`}>добавить расписание</p>
            </div>
            {isScheduleAddOpen && (
                <AddForm
                    formHeading={'Добавить расписание'}
                    firstSelect={timeSelect}
                    firstContainerSpan={'Время выполнения'}
                    firstDefault={'9:00'}
                    secondSelect={daySelect}
                    secondContainerSpan={'Дни выполнения'}
                    secondDefault={'Ежедневно'}
                    sendForm={sendForm}
                />
            )}
            <div className="schedule-and-mailing-carriages-tab__history-table">
                <div className="schedule-and-mailing-carriages-tab__history-table-heading-container">
                    <p className="schedule-and-mailing-carriages-tab__history-table-heading schedule-and-mailing-carriages-tab__history-table-heading_email">Почта</p>
                    <p className="schedule-and-mailing-carriages-tab__history-table-heading schedule-and-mailing-carriages-tab__history-table-heading_description">Комментарий</p>
                    <p className="schedule-and-mailing-carriages-tab__history-table-heading schedule-and-mailing-carriages-tab__history-table-heading_execution-days">Дни выполнения</p>
                    <p className="schedule-and-mailing-carriages-tab__history-table-heading schedule-and-mailing-carriages-tab__history-table-heading_time">Время</p>
                </div>
                {mailingList === null ? (
                    <>
                        <div className='my-list-result__no-result-container'>
                            <p className='my-list-result__no-result-text'>Необходимо добавить расписание</p>
                        </div>
                    </>
                ) : (
                    <>
                        {mailingList.slice(showResultsFrom, resultsShow).map((mailing) => (
                            <ScheduleAndMailingCarriagesTabHistory
                                key={mailing.ID}
                                id={mailing.ID}
                                email={mailing.To}
                                comment={mailing.Comment}
                                isEveryday={mailing.IsEveryday}
                                time={mailing.Time}
                                removeMailing={removeMailing}
                            />
                        ))}
                    </>
                )
                }
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

export default ScheduleAndMailingCarriagesTab;