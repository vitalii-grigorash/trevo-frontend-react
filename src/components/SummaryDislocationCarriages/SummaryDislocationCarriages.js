import React, { useState, useEffect } from 'react';
import VagonsAdd from '../VagonsAdd/VagonsAdd';
import SummaryDislocationTable from '../SummaryDislocationTable/SummaryDislocationTable';
import * as DislocationPageApi from '../../utils/DislocationPageApi';
import { Validation } from '../../utils/Validation';

function SummaryDislocationCarriages(props) {

    const {
        carriageGroups,
        postNewCarriages,
        carriageList
    } = props;

    const [carriageSearchInputValue, setCarriageSearchInputValue] = useState('');
    const [isButtonEnable, setButtonEnable] = useState(false);
    const [isVagonsAddActive, setVagonsAddActive] = useState(false);
    const [isFilterActive, setFilterActive] = useState(false);
    const [isGroupListActive, setGroupListActive] = useState(false);
    const [condition, setCondition] = useState('Все');
    const [data, setData] = useState([]);
    const [groupName, setGroupName] = useState('Выберите группу');
    const [groupId, setGroupId] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [isGroupSelected, setGroupSelected] = useState(false);
    const [tables, setTables] = useState({});
    const [isSummaryDislocationTableActive, setSummaryDislocationTableActive] = useState(false);
    const [carriageValue, setCarriageValue] = useState('');
    const [isEmailSendModalActive, setEmailSendModalActive] = useState(false);

    const email = Validation();

    function getTablesForRender(data) {
        DislocationPageApi.getTables(data)
            .then((tables) => {
                if (tables === null) {
                    setTables(null);
                    setSummaryDislocationTableActive(false);
                    setCarriageValue('0');
                    return
                } else {
                    setTables(tables);
                    const carriageLength = tables.carriageData.columns.map((column) => column.data.length);
                    setCarriageValue(carriageLength[0]);
                }
            })
            .then(() => {
                setSummaryDislocationTableActive(true);
            })
    }

    useEffect(() => {
        const data = {
            groupIds: []
        }
        getTablesForRender(data);
    }, [carriageList]);

    function handleShowEmailSendModal() {
        if (isEmailSendModalActive) {
            setEmailSendModalActive(false);
            email.setValue('');
            email.setErrorMessage('');
        } else {
            setFilterActive(false);
            setCondition('Все');
            setData([]);
            setGroupSelected(false);
            setGroupName('Выберите группу');
            setGroupId('');
            setGroupDescription('');
            setEmailSendModalActive(true);
        }
    }

    const selectData = (groupName, groupId, groupDescription) => {
        setGroupName(groupName);
        setGroupId(groupId);
        setGroupDescription(groupDescription);
        setGroupSelected(true);
    }

    function onRadioСhange(evt) {
        setCondition(evt.target.value);
    };

    function onCheckboxСhange(evt) {
        if (evt.target.checked === true) {
            setData([...data, evt.target.value]);
        } else {
            const newData = data.filter(item => item !== evt.target.value);
            setData(newData);
        }
    }

    function handleSearchInputChange(evt) {
        setCarriageSearchInputValue(evt.target.value);
        if (evt.target.value.trim() !== '') {
            setButtonEnable(true);
        } else {
            setButtonEnable(false);
        }
    }

    function onSearchButtonClick() {
        console.log(carriageSearchInputValue);
    }

    function handleAddVagonsClick() {
        if (isVagonsAddActive) {
            setVagonsAddActive(false);
        } else {
            setVagonsAddActive(true);
        }
    }

    function handleShowFilter() {
        if (isFilterActive) {
            setFilterActive(false);
        } else {
            setEmailSendModalActive(false);
            email.setValue('');
            email.setErrorMessage('');
            setFilterActive(true);
        }
    }

    function handleGroupListShow() {
        if (isGroupListActive) {
            setGroupListActive(false);
        } else {
            setGroupListActive(true);
        }
    }

    function onSendClick(evt) {
        evt.preventDefault();
        console.log(email.value)
        email.setValue('');
        handleShowEmailSendModal();
    }

    function applyFilter() {
        console.log(condition);
        console.log(data);
        console.log(groupId);
        console.log(groupDescription);
        handleShowFilter();
        const filteredData = {
            groupIds: [groupId]
        }
        getTablesForRender(filteredData);
    }

    function resetFilter() {
        setCondition('Все');
        setData([]);
        const data = {
            groupIds: []
        }
        getTablesForRender(data);
        handleShowFilter();
        setGroupSelected(false);
        setGroupName('Выберите группу');
        setGroupId('');
        setGroupDescription('');
    }

    return (
        <div className="summary-dislocation-carriages">
            <p className="summary-dislocation-carriages__carriage-search-name">Поиск вагона</p>
            <div className="summary-dislocation-carriages__carriage-search-container">
                <input
                    type="text"
                    className="summary-dislocation-carriages__carriage-search-input"
                    placeholder='Введите номер вагона'
                    onChange={handleSearchInputChange}
                    value={carriageSearchInputValue}
                />
                {isButtonEnable ? (
                    <button type="submit" className="summary-dislocation-carriages__carriage-search-button" onClick={onSearchButtonClick}>поиск</button>
                ) : (
                    <button type="submit" className="summary-dislocation-carriages__carriage-search-button summary-dislocation-carriages__carriage-search-button_disabled">поиск</button>
                )}
            </div>
            <div className="summary-dislocation-carriages__add-vagons" onClick={handleAddVagonsClick}>
                <div className={`summary-dislocation-carriages__add-vagons-icon ${isVagonsAddActive && 'summary-dislocation-carriages__add-vagons-icon_active'}`} />
                <p className={`summary-dislocation-carriages__add-vagons-text ${isVagonsAddActive && 'summary-dislocation-carriages__add-vagons-text_active'}`}>добавить вагоны</p>
            </div>
            {isVagonsAddActive && (
                <VagonsAdd
                    carriageGroups={carriageGroups}
                    closeVagonsAdd={handleAddVagonsClick}
                    postNewCarriages={postNewCarriages}
                />
            )}
            <div className="summary-dislocation-carriages__table-heading-container">
                <p className="summary-dislocation-carriages__table-heading-results">Найдено {carriageValue} вагонов</p>
                <div className="summary-dislocation-carriages__table-heading-icons-container">
                    <div className={`summary-dislocation-carriages__table-heading-email-icon ${isEmailSendModalActive && 'summary-dislocation-carriages__table-heading-email-icon_active'}`} onClick={handleShowEmailSendModal} />
                    {isEmailSendModalActive && (
                        <form className="summary-dislocation-carriages__email-send-container" onSubmit={onSendClick}>
                            <div className="summary-dislocation-carriages__email-send-heading-container">
                                <div className="summary-dislocation-carriages__email-send-close-button" onClick={handleShowEmailSendModal} />
                                <p className="summary-dislocation-carriages__email-send-heading">Отправить на почту</p>
                            </div>
                            <div className="summary-dislocation-carriages__input-container">
                                <input
                                    type="email"
                                    className="summary-dislocation-carriages__input"
                                    id="email-input"
                                    name="email"
                                    value={email.value}
                                    onChange={email.onChange}
                                    placeholder="example@mail.com"
                                    required
                                />
                                <span id="email-input" className="summary-dislocation-carriages__input-error">{email.errorMessage}</span>
                            </div>
                            <button className="summary-dislocation-carriages__send-button" type="submit">отправить</button>
                        </form>
                    )}
                    <div className="summary-dislocation-carriages__table-heading-save-icon" />
                    <div className={`summary-dislocation-carriages__table-heading-filter-icon ${isFilterActive && 'summary-dislocation-carriages__table-heading-filter-icon_active'}`} onClick={handleShowFilter} />
                    {isFilterActive && (
                        <div className="summary-dislocation-carriages__filter-container">
                            <div className="summary-dislocation-carriages__filter-heading-container">
                                <div className="summary-dislocation-carriages__filter-close-button" onClick={handleShowFilter} />
                                <p className="summary-dislocation-carriages__filter-heading">Фильтр</p>
                            </div>
                            <p className="summary-dislocation-carriages__filter-group-select-heading">Группы</p>
                            <div className="summary-dislocation-carriages__filter-group-select-container" onClick={handleGroupListShow}>
                                <p className={`summary-dislocation-carriages__filter-group-select-text ${isGroupSelected && 'summary-dislocation-carriages__filter-group-select-text_active'}`}>{groupName}</p>
                                <div className="summary-dislocation-carriages__filter-group-select-icon" />
                                {isGroupListActive && (
                                    <div className="summary-dislocation-carriages__filter-group-list-container">
                                        {carriageGroups === null ? (
                                            <div className="summary-dislocation-carriages__filter-group-container">
                                                <p className="summary-dislocation-carriages__filter-group-text">Необходимо добавить группу</p>
                                            </div>
                                        ) : (
                                            carriageGroups.map((data) => (
                                                <div key={data.id} className="summary-dislocation-carriages__filter-group-container summary-dislocation-carriages__filter-group-container_result" onClick={() => selectData(data.name, data.id, data.description)}>
                                                    <p className="summary-dislocation-carriages__filter-group-text">{data.name}</p>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                )}
                            </div>
                            <div className="summary-dislocation-carriages__filter-buttons-container">
                                <div className="summary-dislocation-carriages__filter-radio-buttons-container">
                                    <p className="summary-dislocation-carriages__filter-radio-buttons-heading">Состояние</p>
                                    <div className="summary-dislocation-carriages__filter-radio-buttons">
                                        <input
                                            id="all"
                                            type="radio"
                                            name="condition"
                                            value="Все"
                                            onChange={onRadioСhange}
                                            defaultChecked={true}
                                        />
                                        <label htmlFor="all">Все</label>
                                    </div>
                                    <div className="summary-dislocation-carriages__filter-radio-buttons">
                                        <input
                                            id="serviceable"
                                            type="radio"
                                            name="condition"
                                            value="Исправные"
                                            onChange={onRadioСhange}
                                        />
                                        <label htmlFor="serviceable">Исправные</label>
                                    </div>
                                    <div className="summary-dislocation-carriages__filter-radio-buttons">
                                        <input
                                            id="defective"
                                            type="radio"
                                            name="condition"
                                            value="Неисправные"
                                            onChange={onRadioСhange}
                                        />
                                        <label htmlFor="defective">Неисправные</label>
                                    </div>
                                </div>
                                <div className="summary-dislocation-carriages__filter-checkbox-buttons-container">
                                    <p className="summary-dislocation-carriages__filter-checkbox-buttons-heading">Показывать данные</p>
                                    <div className="summary-dislocation-carriages__filter-checkbox-buttons">
                                        <input
                                            id="onloading"
                                            type="checkbox"
                                            name="data"
                                            value="На погрузке"
                                            onChange={onCheckboxСhange}
                                        />
                                        <label htmlFor="onloading">На погрузке</label>
                                    </div>
                                    <div className="summary-dislocation-carriages__filter-checkbox-buttons">
                                        <input
                                            id="unloading"
                                            type="checkbox"
                                            name="data"
                                            value="На выгрузке"
                                            onChange={onCheckboxСhange}
                                        />
                                        <label htmlFor="unloading">На выгрузке</label>
                                    </div>
                                    <div className="summary-dislocation-carriages__filter-checkbox-buttons">
                                        <input
                                            id="onway"
                                            type="checkbox"
                                            name="data"
                                            value="В пути"
                                            onChange={onCheckboxСhange}
                                        />
                                        <label htmlFor="onway">В пути</label>
                                    </div>
                                </div>
                            </div>
                            <div className="summary-dislocation-carriages__filter-submit-buttons-container">
                                <button type="button" className="summary-dislocation-carriages__filter-submit-button" onClick={applyFilter}>применить</button>
                                <p className="summary-dislocation-carriages__filter-reset-button" onClick={resetFilter}>Сбросить все фильтры</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {isSummaryDislocationTableActive && (
                <>
                    {tables === null ? (
                        <>
                            <div className='summary-dislocation-carriages__no-result-container'>
                                <div className='summary-dislocation-carriages__no-result-heading-container' />
                                <div className='summary-dislocation-carriages__no-result-text-container'>
                                    <p className='summary-dislocation-carriages__no-result-text'>Необходимо добавить вагоны</p>
                                </div>
                                <div className='summary-dislocation-carriages__no-result-bottom-container' />
                            </div>
                        </>
                    ) : (
                        <SummaryDislocationTable
                            tables={tables}
                        />
                    )}
                </>
            )}
        </div>
    );
}

export default SummaryDislocationCarriages;
