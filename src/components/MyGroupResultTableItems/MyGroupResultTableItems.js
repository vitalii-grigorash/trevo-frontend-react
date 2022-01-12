import React, { useState, useEffect } from 'react';
import * as SettingsPageApi from '../../utils/SettingPageApi';
import VagonsList from '../VagonsList/VagonsList';

function MyGroupResultTableItems(props) {

    const {
        groupNumber,
        groupName,
        vagonsValue,
        description,
        isMyGroupResultTableItemsOpened,
        handleMyGroupResultTableItemsOpened,
        onDeleteGroupClick,
        postNewCarriages,
        deleteCarriagesFromGroup,
        replaceCarriages,
        updateCarriageDescription
    } = props;

    const [isGroupOptionsOpened, setGroupOptionsOpened] = useState(false);
    const [isVagonsListOpened, setVagonsListOpened] = useState(true);
    const [isVagonsAddOpened, setVagonsAddOpened] = useState(false);
    const [isVagonsRemoveOpened, setVagonsRemoveOpened] = useState(false);
    const [isVagonsChangeOpened, setVagonsChangeOpened] = useState(false);
    const [isChangeBackground, setChangeBackground] = useState(false);
    const [isSettingsActive, setSettingsActive] = useState(false);
    const [carriages, setCarriages] = useState([]);
    const [isCarriagesDataValid, setCarriagesDataValid] = useState(false);
    const [isShowSortOptions, setShowSortOptions] = useState(false);
    const [selectedResultsShow, setSelectedResultsShow] = useState(10);
    const [pageCount, setPageCount] = useState(1);
    const [allPages, setAllPages] = useState(0);
    const [isChoiceContainerActive, setChoiceContainerActive] = useState(false);
    const [resultsShow, setResultsShow] = useState(10);
    const [result, setResult] = useState(10);
    const [showResultsFrom, setShowResultsFrom] = useState(0);
    const [carriageAddTextareaValue, setCarriageAddTextareaValue] = useState('');
    const [textareaAddErrorText, setTextareaAddErrorText] = useState('');
    const [carriageRemoveTextareaValue, setCarriageRemoveTextareaValue] = useState('');
    const [textareaRemoveErrorText, setTextareaRemoveErrorText] = useState('');
    const [changeTextareaValue, setChangeTextareaValue] = useState('');
    const [textareaChangeErrorText, setTextareaChangeErrorText] = useState('');

    function showGroupCarriagesList() {
        SettingsPageApi.getGroupCarriages(groupNumber)
            .then((data) => {
                if (data.carriages === null) {
                    setCarriagesDataValid(false);
                } else {
                    setCarriagesDataValid(true);
                    setCarriages([]);
                    setCarriages(data.carriages);
                }
            })
            .catch((err) => console.log(`Ошибка при загрузке списка вагонов: ${err}`));
    }

    function handleAddCarriageTextareaChange(evt) {
        setCarriageAddTextareaValue(evt.target.value);
    }

    function handleRemoveCarriageTextareaChange(evt) {
        setCarriageRemoveTextareaValue(evt.target.value);
    }

    function handleCarriageTextareaChange (evt) {
        setChangeTextareaValue(evt.target.value);
    }

    function validateAddCarriagesFormAndSend() {
        if (carriageAddTextareaValue === '') {
            setTextareaAddErrorText('Необходимо добавить вагоны');
        } else {
            addCarriages();
        }
    }

    function validateRemoveCarriagesFormAndSend() {
        if (carriageRemoveTextareaValue === '') {
            setTextareaRemoveErrorText('Необходимо добавить вагоны');
        } else {
            removeCarriages();
        }
    }

    function validateChangeCarriagesFormAndSend() {
        if (changeTextareaValue === '') {
            setTextareaChangeErrorText('Необходимо добавить вагоны');
        } else {
            changeCarriages();
        }
    }

    function changeCarriages() {
        const carriagesArray = changeTextareaValue.trim().split(/(?:\n| |,)+/);
        const carriagesToAdd = carriagesArray.map((carriage) => {
            return {
                carriageNumber: carriage,
                description: description
            }
        })
        replaceCarriages(groupNumber, carriagesToAdd);
        setChangeTextareaValue('');
        setTextareaChangeErrorText('');
    }

    function removeCarriages() {
        const carriagesArray = carriageRemoveTextareaValue.trim().split(/(?:\n| |,)+/);
        deleteCarriagesFromGroup(groupNumber, carriagesArray)
        setCarriageRemoveTextareaValue('');
        setTextareaRemoveErrorText('');
    }

    function addCarriages() {
        const carriagesArray = carriageAddTextareaValue.trim().split(/(?:\n| |,)+/);
        const carriagesToAdd = carriagesArray.map((carriage) => {
            return {
                carriageNumber: carriage,
                description: description
            }
        })
        postNewCarriages(groupNumber, carriagesToAdd);
        setCarriageAddTextareaValue('');
        setTextareaAddErrorText('');
    }

    function handleShowChoiceContainer() {
        if (isChoiceContainerActive) {
            setChoiceContainerActive(false);
        } else {
            setChoiceContainerActive(true);
        }
    }

    useEffect(() => {
        const pages = carriages.length / selectedResultsShow
        setAllPages(Math.ceil(pages));
    }, [carriages.length, selectedResultsShow])

    useEffect(() => {
        carriages.map((list) => {
            if (list.id) {
                return setShowSortOptions(true);
            } else {
                return setShowSortOptions(false);
            }
        })
    }, [carriages]);

    function onChoiceClick(value) {
        setResultsShow(value);
        setResult(value);
        setSelectedResultsShow(value);
        setShowResultsFrom(0);
        setPageCount(1);
    }

    function showNextResults() {
        if (resultsShow >= carriages.length) {
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

    function handleChangeBackgroundColor() {
        if (!isChangeBackground) {
            handleMyGroupResultTableItemsOpened();
            setChangeBackground(true);
        } else {
            setChangeBackground(false);
        }
    }

    function handleGroupOptionsOpen() {
        if (isGroupOptionsOpened) {
            setGroupOptionsOpened(false);
            handleChangeBackgroundColor();
        } else {
            setGroupOptionsOpened(true);
            handleChangeBackgroundColor();
            showGroupCarriagesList();
        }
    }

    function handleVagonsListOpen() {
        setVagonsListOpened(true);
        setVagonsAddOpened(false);
        setVagonsRemoveOpened(false);
        setVagonsChangeOpened(false);
        showGroupCarriagesList();
    }

    function handleVagonsAddOpen() {
        setVagonsAddOpened(true);
        setVagonsListOpened(false);
        setVagonsRemoveOpened(false);
        setVagonsChangeOpened(false);
    }

    function handleVagonsRemoveOpen() {
        setVagonsRemoveOpened(true);
        setVagonsAddOpened(false);
        setVagonsListOpened(false);
        setVagonsChangeOpened(false);
    }

    function handleVagonsChangeOpen() {
        setVagonsChangeOpened(true);
        setVagonsRemoveOpened(false);
        setVagonsAddOpened(false);
        setVagonsListOpened(false);
    }

    function handleShowSettings() {
        if (isSettingsActive) {
            setSettingsActive(false);
        } else {
            setSettingsActive(true);
        }
    }

    function onRemoveGroupClick() {
        onDeleteGroupClick(groupNumber);
    }

    return (
        <div className={`my-group-result-table-items ${isChangeBackground ? 'my-group-result-table-items_opened' : isMyGroupResultTableItemsOpened && ''}`}>
            <div className='my-group-result-table-items__container'>
                <div className={`my-group-result-table-items__expand-icon ${isGroupOptionsOpened && 'my-group-result-table-items__expand-icon_active'}`} onClick={handleGroupOptionsOpen} />
                <p className="my-group-result-table-items__group-number">{groupNumber}</p>
                <p className="my-group-result-table-items__group-name">{groupName}</p>
                <p className="my-group-result-table-items__group-description">{description}</p>
                <p className="my-group-result-table-items__vagons-value">{vagonsValue}</p>
                <p className="my-group-result-table-items__expand-text" onClick={handleGroupOptionsOpen}>{isGroupOptionsOpened ? ('Свернуть') : ('Развернуть')}</p>
                <div className="my-group-result-table-items__settings-icon" onClick={handleShowSettings}>
                    {isSettingsActive && (
                        <div className="my-group-result-table-items__settings-container">
                            <p className="my-group-result-table-items__settings-remove" onClick={onRemoveGroupClick}>Удалить группу</p>
                        </div>
                    )}
                </div>
            </div>
            {isGroupOptionsOpened && (
                <div className="table-items">
                    <div className="table-items__links-container">
                        <p className={`table-items__link ${isVagonsListOpened && 'table-items__link_active'}`} onClick={handleVagonsListOpen}>Список вагонов</p>
                        <p className={`table-items__link ${isVagonsAddOpened && 'table-items__link_active'}`} onClick={handleVagonsAddOpen}>Добавить вагоны</p>
                        <p className={`table-items__link ${isVagonsRemoveOpened && 'table-items__link_active'}`} onClick={handleVagonsRemoveOpen}>Удалить вагоны</p>
                        <p className={`table-items__link ${isVagonsChangeOpened && 'table-items__link_active'}`} onClick={handleVagonsChangeOpen}>Заменить вагоны</p>
                    </div>
                    {isVagonsListOpened && (
                        <div className="vagons-list-container">
                            <div className="vagons-list-container__heading">
                                <p className="vagons-list-container__vagon-number">№ вагона</p>
                                <p className="vagons-list-container__date">Дата постановки</p>
                                <p className="vagons-list-container__description">Примечание</p>
                            </div>
                            {isCarriagesDataValid ? (
                                <>
                                    {carriages.slice(showResultsFrom, resultsShow).map((list) => {
                                        return <VagonsList
                                            key={list.id}
                                            id={list.id}
                                            vagonsNumber={list.carriageNumber}
                                            vagonsDate={list.trackingStartDate}
                                            vagonsDescription={list.description}
                                            updateCarriageDescription={updateCarriageDescription}
                                        />
                                    })}
                                </>
                            ) : (
                                <div className="vagons-list-container__no-list-container">
                                    <p className="vagons-list-container__no-list-text">Необходимо добавить вагоны в группу</p>
                                </div>
                            )}
                            <div className="vagons-list-container__bottom">
                                {isShowSortOptions && (
                                    <div className="vagons-list-container__sort-options-container">
                                        <div className="vagons-list-container__show-result-container" onClick={handleShowChoiceContainer}>
                                            <p className="request-history__show-result-text">Показать: {selectedResultsShow}</p>
                                            <div className="request-history__show-result-icon" />
                                            {isChoiceContainerActive && (
                                                <div className="vagons-list-container__show-result-choice-container">
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
                                        <p className="vagons-list-container__pages">{pageCount} из {allPages}</p>
                                        <div className="vagons-list-container__arrows-container">
                                            <div className="vagons-list-container__arrow-prev" onClick={showPrevResults} />
                                            <div className="vagons-list-container__arrow-next" onClick={showNextResults} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    {isVagonsAddOpened && (
                        <div className="vagons-action-container">
                            <p className="vagons-action-container__heading">Список вагонов</p>
                            <textarea
                                className="vagons-action-container__textarea"
                                type="text"
                                onChange={handleAddCarriageTextareaChange}
                                value={carriageAddTextareaValue}
                            />
                            <span className="vagons-action-container__error">{textareaAddErrorText}</span>
                            <button className="vagons-action-container__button" type="button" onClick={validateAddCarriagesFormAndSend}>добавить</button>
                        </div>
                    )}
                    {isVagonsRemoveOpened && (
                        <div className="vagons-action-container">
                            <p className="vagons-action-container__heading">Список вагонов</p>
                            <textarea
                                className="vagons-action-container__textarea"
                                type="text"
                                onChange={handleRemoveCarriageTextareaChange}
                                value={carriageRemoveTextareaValue}
                            />
                            <span className="vagons-action-container__error">{textareaRemoveErrorText}</span>
                            <button className="vagons-action-container__button" type="button" onClick={validateRemoveCarriagesFormAndSend}>удалить</button>
                        </div>
                    )}
                    {isVagonsChangeOpened && (
                        <div className="vagons-action-container">
                            <p className="vagons-action-container__heading">Список вагонов</p>
                            <textarea
                                className="vagons-action-container__textarea"
                                type="text"
                                onChange={handleCarriageTextareaChange}
                                value={changeTextareaValue}
                            />
                            <span className="vagons-action-container__error">{textareaChangeErrorText}</span>
                            <button className="vagons-action-container__button" type="button" onClick={validateChangeCarriagesFormAndSend}>заменить</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );

}

export default MyGroupResultTableItems;
