import React, { useState } from 'react';
import GroupList from '../GroupList/GroupList';
import VagonsAdd from '../VagonsAdd/VagonsAdd';
import MyListResult from '../MyListResult/MyListResult';

function MyListVagonsTab(props) {

    const {
        groupsData
    } = props;

    const [checkboxSelectedData, setCheckboxSelectedData] = useState([]);
    const [isVagonsAddActive, setVagonsAddActive] = useState(false);
    const [isShowRemoveTooltip, setShowRemoveTooltip] = useState(false);
    const [isShowSaveTooltip, setShowSaveTooltip] = useState(false);
    const [isShowDownloadTooltip, setShowDownloadTooltip] = useState(false);

    function onCheckboxClick(e, checkbox, vagonNumber, groupName, date, description) {
        if (checkbox === true) {
            setCheckboxSelectedData([...checkboxSelectedData, { vagonNumber, groupName, date, description }])
            e.target.closest('.my-list-result__info-container').classList.add('my-list-result__info-container_checked');
        } else {
            const filteredItems = checkboxSelectedData.filter(item => item.vagonNumber !== vagonNumber);
            e.target.closest('.my-list-result__info-container').classList.remove('my-list-result__info-container_checked');
            setCheckboxSelectedData(filteredItems);
        }
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
                groupsData={groupsData}
            />
            <div className="my-list-vagons-tab__add-vagons" onClick={handleAddVagonsClick}>
                <div className={`my-list-vagons-tab__add-vagons-icon ${isVagonsAddActive && 'my-list-vagons-tab__add-vagons-icon_active'}`} />
                <p className={`my-list-vagons-tab__add-vagons-text ${isVagonsAddActive && 'my-list-vagons-tab__add-vagons-text_active'}`}>добавить вагоны</p>
            </div>
            {isVagonsAddActive && (
                <VagonsAdd
                    groupsData={groupsData}
                    closeVagonsAdd={handleAddVagonsClick}
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
                    <div className="my-list-vagons-tab__table-heading-icon-remove" onMouseEnter={handleShowRemoveTooltip} onMouseLeave={handleCloseRemoveTooltip}>
                        {isShowRemoveTooltip && (
                            <div className="my-list-vagons-tab__table-heading-above-icon-tooltip-remove" />
                        )}
                    </div>
                </div>
            </div>
            <MyListResult
                onCheckboxClick={onCheckboxClick}
            />
        </div>
    );

}

export default MyListVagonsTab;