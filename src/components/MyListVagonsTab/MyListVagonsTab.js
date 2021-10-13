import React, { useState } from 'react';
import GroupList from '../GroupList/GroupList';
import VagonsAdd from '../VagonsAdd/VagonsAdd';
import MyListResult from '../MyListResult/MyListResult';

function MyListVagonsTab(props) {

    const {
        carriageGroups,
        carriageList,
        postNewCarriages,
        onSearchGroupClick,
        selectedGroupCarriages,
        isSearchButtonClicked,
        deleteCarriages,
    } = props;

    const [checkboxSelectedData, setCheckboxSelectedData] = useState([]);
    const [isVagonsAddActive, setVagonsAddActive] = useState(false);
    const [isShowRemoveTooltip, setShowRemoveTooltip] = useState(false);
    const [isShowSaveTooltip, setShowSaveTooltip] = useState(false);
    const [isShowDownloadTooltip, setShowDownloadTooltip] = useState(false);

    function onCheckboxClick(checkbox, dataToSend) {
        if (checkbox === true) {
            setCheckboxSelectedData(checkboxSelectedData => ([...checkboxSelectedData, dataToSend]));
        } else {
            const filteredItems = (checkboxSelectedData => checkboxSelectedData.filter(item => item.id !== dataToSend.id));
            setCheckboxSelectedData(filteredItems);
        }
    }

    function removeAllSelectedVagons() {
        const carriagesArray = checkboxSelectedData.map((item) => {
            return item.id
        })
        deleteCarriages(carriagesArray);
    }

    function handleShowRemoveTooltip() {
        setShowRemoveTooltip(true);
    }

    function handleCloseRemoveTooltip() {
        setShowRemoveTooltip(false);
    }

    function handleShowSaveTooltip() {
        setShowSaveTooltip(true);
    }

    function handleCloseSaveTooltip() {
        setShowSaveTooltip(false);
    }

    function handleShowDownloadTooltip() {
        setShowDownloadTooltip(true);
    }

    function handleCloseDownloadTooltip() {
        setShowDownloadTooltip(false);
    }

    function handleAddVagonsClick() {
        if (isVagonsAddActive) {
            setVagonsAddActive(false);
        } else {
            setVagonsAddActive(true);
        }
    }

    return (
        <div className="my-list-vagons-tab">
            <GroupList
                carriageGroups={carriageGroups}
                onSearchGroupClick={onSearchGroupClick}
            />
            <div className="my-list-vagons-tab__add-vagons" onClick={handleAddVagonsClick}>
                <div className={`my-list-vagons-tab__add-vagons-icon ${isVagonsAddActive && 'my-list-vagons-tab__add-vagons-icon_active'}`} />
                <p className={`my-list-vagons-tab__add-vagons-text ${isVagonsAddActive && 'my-list-vagons-tab__add-vagons-text_active'}`}>добавить вагоны</p>
            </div>
            {isVagonsAddActive && (
                <VagonsAdd
                    carriageGroups={carriageGroups}
                    closeVagonsAdd={handleAddVagonsClick}
                    postNewCarriages={postNewCarriages}
                />
            )}
            <div className="my-list-vagons-tab__table-heading-container">
                <p className="my-list-vagons-tab__table-heading-vagons-result">Найдено 423456 вагонов</p>
                <div className="my-list-vagons-tab__table-heading-icons-container">
                    <div className="my-list-vagons-tab__table-heading-icon-save" onMouseEnter={handleShowSaveTooltip} onMouseLeave={handleCloseSaveTooltip}>
                        {isShowSaveTooltip && (
                            <div className="my-list-vagons-tab__table-heading-above-icon-tooltip-save" />
                        )}
                    </div>
                    <div className="my-list-vagons-tab__table-heading-icon-download" onMouseEnter={handleShowDownloadTooltip} onMouseLeave={handleCloseDownloadTooltip}>
                        {isShowDownloadTooltip && (
                            <div className="my-list-vagons-tab__table-heading-above-icon-tooltip-download" />
                        )}
                    </div>
                    <div className="my-list-vagons-tab__table-heading-icon-remove" onMouseEnter={handleShowRemoveTooltip} onMouseLeave={handleCloseRemoveTooltip} onClick={removeAllSelectedVagons}>
                        {isShowRemoveTooltip && (
                            <div className="my-list-vagons-tab__table-heading-above-icon-tooltip-remove" />
                        )}
                    </div>
                </div>
            </div>
            <MyListResult
                onCheckboxClick={onCheckboxClick}
                carriageList={carriageList}
                selectedGroupCarriages={selectedGroupCarriages}
                isSearchButtonClicked={isSearchButtonClicked}
            />
        </div>
    );

}

export default MyListVagonsTab;