import React, { useState } from 'react';
import GroupList from '../GroupList/GroupList';
import MyGroupResult from '../MyGroupResult/MyGroupResult';
import MyGroupResultData from '../../utils/MyGroupResultData.json';

function MyGroupVagonsTab(props) {

    const {
        carriageGroups
    } = props;

    const [isGroupAddActive, setGroupAddActive] = useState(false);
    const [isShowSaveTooltip, setShowSaveTooltip] = useState(false);
    const [isShowDownloadTooltip, setShowDownloadTooltip] = useState(false);

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


    function handleAddGroupClick() {
        if (isGroupAddActive) {
            setGroupAddActive(false);
        } else {
            setGroupAddActive(true);
        }
    }

    return (
        <div className="my-group-vagons-tab">
            <GroupList
                carriageGroups={carriageGroups}
            />
            <div className="my-group-vagons-tab__add-group" onClick={handleAddGroupClick}>
                <div className={`my-group-vagons-tab__add-group-icon ${isGroupAddActive && 'my-group-vagons-tab__add-group-icon_active'}`} />
                <p className={`my-group-vagons-tab__add-group-text ${isGroupAddActive && 'my-group-vagons-tab__add-group-text_active'}`}>добавить группу</p>
            </div>
            {isGroupAddActive && (
                <div className="my-group-vagons-tab__add-group-container">
                    <div className="my-group-vagons-tab__add-group-close-icon" onClick={handleAddGroupClick} />
                    <p className="my-group-vagons-tab__add-group-heading">Добавить группу</p>
                    <span className="my-group-vagons-tab__add-group-span">Название</span>
                    <input className="my-group-vagons-tab__add-group-input" type="text" />
                    <span className="my-group-vagons-tab__add-group-span">Примечание к группе</span>
                    <input className="my-group-vagons-tab__add-group-input" type="text" />
                    <button className="my-group-vagons-tab__add-group-button">добавить</button>
                </div>
            )}
            <div className="my-group-vagons-tab__table-heading-container">
                <p className="my-group-vagons-tab__table-heading-result">Найдено {MyGroupResultData.length} группы</p>
                <div className="my-group-vagons-tab__table-heading-icons-container">
                    <div className="my-group-vagons-tab__table-heading-icon-save" onMouseEnter={handleShowSaveTooltip} onMouseLeave={handleCloseSaveTooltip}>
                        {isShowSaveTooltip && (
                            <div className="my-group-vagons-tab__table-heading-above-icon-tooltip-save" />
                        )}
                    </div>
                    <div className="my-group-vagons-tab__table-heading-icon-download" onMouseEnter={handleShowDownloadTooltip} onMouseLeave={handleCloseDownloadTooltip}>
                        {isShowDownloadTooltip && (
                            <div className="my-group-vagons-tab__table-heading-above-icon-tooltip-download" />
                        )}
                    </div>
                </div>
            </div>
            <MyGroupResult />
        </div>
    );

}

export default MyGroupVagonsTab;