import React, { useState } from 'react';
import VagonsAdd from '../VagonsAdd/VagonsAdd';
import GroupListForFilter from '../GroupListForFilter/GroupListForFilter';

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
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

}

export default SummaryDislocationCarriages;