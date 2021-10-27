import React, { useState } from 'react';
import VagonsAdd from '../VagonsAdd/VagonsAdd';
import GroupListForFilter from '../GroupListForFilter/GroupListForFilter';
import SummaryDislocationTable from '../SummaryDislocationTable/SummaryDislocationTable';

function SummaryDislocationCarriages(props) {

    const {
        carriageGroups,
        postNewCarriages,
    } = props;

    const [carriageSearchInputValue, setCarriageSearchInputValue] = useState('');
    const [isButtonEnable, setButtonEnable] = useState(false);
    const [isVagonsAddActive, setVagonsAddActive] = useState(false);
    const [isFilterActive, setFilterActive] = useState(false);
    const [isGroupListActive, setGroupListActive] = useState(false);
    const [condition, setCondition] = useState('Все');
    const [data, setData] = useState([]);

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
            setFilterActive(false)
        } else {
            setFilterActive(true);
        }
    }

    function handleGroupListShow() {
        if (isGroupListActive) {
            setGroupListActive(false)
        } else {
            setGroupListActive(true);
        }
    }

    function applyFilter () {
        console.log(condition);
        console.log(data);
    }

    function resetFilter () {
        setCondition('Все');
        setData([]);
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
                <p className="summary-dislocation-carriages__table-heading-results">Найдено 423 456 вагонов</p>
                <div className="summary-dislocation-carriages__table-heading-icons-container">
                    <div className="summary-dislocation-carriages__table-heading-email-icon" />
                    <div className="summary-dislocation-carriages__table-heading-save-icon" />
                    <div className={`summary-dislocation-carriages__table-heading-filter-icon ${isFilterActive && 'summary-dislocation-carriages__table-heading-filter-icon_active'}`} onClick={handleShowFilter} />
                    {isFilterActive && (
                        <div className="summary-dislocation-carriages__filter-container">
                            <div className="summary-dislocation-carriages__filter-heading-container">
                                <div className="summary-dislocation-carriages__filter-close-button" onClick={handleShowFilter} />
                                <p className="summary-dislocation-carriages__filter-heading">Фильтр</p>
                            </div>
                            <p className="summary-dislocation-carriages__filter-group-select-heading">Группы</p>
                            <div className="summary-dislocation-carriages__filter-group-select-container">
                                <p className="summary-dislocation-carriages__filter-group-select-text">Выберите группы</p>
                                <div className="summary-dislocation-carriages__filter-group-select-icon" onClick={handleGroupListShow} />
                                {isGroupListActive && (
                                    <div className="summary-dislocation-carriages__filter-group-list-container">
                                        {carriageGroups.map((group) => {
                                            return <GroupListForFilter
                                                key={group.id}
                                                id={group.id}
                                                name={group.name}
                                            />
                                        })}
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
                                            id="unreleased"
                                            type="checkbox"
                                            name="data"
                                            value="Невышедшие"
                                            onChange={onCheckboxСhange}
                                        />
                                        <label htmlFor="unreleased">Невышедшие</label>
                                    </div>
                                    <div className="summary-dislocation-carriages__filter-checkbox-buttons">
                                        <input
                                            id="on-way"
                                            type="checkbox"
                                            name="data"
                                            value="В пути"
                                            onChange={onCheckboxСhange}
                                        />
                                        <label htmlFor="on-way">В пути</label>
                                    </div>
                                    <div className="summary-dislocation-carriages__filter-checkbox-buttons">
                                        <input
                                            id="reached"
                                            type="checkbox"
                                            name="data"
                                            value="Дошедшие"
                                            onChange={onCheckboxСhange}
                                        />
                                        <label htmlFor="reached">Дошедшие</label>
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
            <SummaryDislocationTable />
        </div>
    );

}

export default SummaryDislocationCarriages;