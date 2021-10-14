import React, { useState, useEffect } from 'react';
import MyListVagonsTab from '../MyListVagonsTab/MyListVagonsTab';
import FieldVisibilityVagonsTab from '../FieldVisibilityVagonsTab/FieldVisibilityVagonsTab';
import ScheduleAndMailingVagonsTab from '../ScheduleAndMailingVagonsTab/ScheduleAndMailingVagonsTab';
import AlertsVagonsTab from '../AlertsVagonsTab/AlertsVagonsTab';
import MyGroupVagonsTab from '../MyGroupVagonsTab/MyGroupVagonsTab';
import * as SettingsPageApi from '../../utils/SettingPageApi';

function VagonsSettingTab(props) {

    const {
        carriageList,
        getAllCarriage,
        deleteCarriages,
        onSearchGroupClick,
        selectedGroupCarriages,
        isSearchButtonClicked,
        postNewCarriages,
        onCheckboxChekedArray,
        selectAllWagons,
        isAllWagonsSelected,
        deleteAllCarriagesAndGroups,
        getCarriageGroups,
        carriageGroups
    } = props;

    const [isMyListTabOpen, setMyListTabOpen] = useState(true);
    const [isMyGroupTabOpen, setMyGroupTabOpen] = useState(false);
    const [isFieldVisibilityTabOpen, setFieldVisibilityTabOpen] = useState(false);
    const [isScheduleAndMailingTabOpen, setScheduleAndMailingTabOpen] = useState(false);
    const [isAlertsTabOpen, setAlertsTabOpen] = useState(false);

    function postNewGroup(newGroupData) {
        SettingsPageApi.postNewCarriageGroup(newGroupData)
            .then(() => {
                getCarriageGroups();
            })
            .catch((err) => console.log(`Ошибка при отправки запроса: ${err}`));
    }

    useEffect(() => {
        getCarriageGroups();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        getAllCarriage();
        // eslint-disable-next-line
    }, []);

    function handleMyListTabOpen() {
        setMyListTabOpen(true);
        setMyGroupTabOpen(false);
        setFieldVisibilityTabOpen(false);
        setScheduleAndMailingTabOpen(false);
        setAlertsTabOpen(false);
    }
    function handleMyGroupTabOpen() {
        setMyGroupTabOpen(true);
        setMyListTabOpen(false);
        setFieldVisibilityTabOpen(false);
        setScheduleAndMailingTabOpen(false);
        setAlertsTabOpen(false);
    }

    function handleFieldVisibilityTabOpen() {
        setFieldVisibilityTabOpen(true);
        setMyGroupTabOpen(false);
        setMyListTabOpen(false);
        setScheduleAndMailingTabOpen(false);
        setAlertsTabOpen(false);
    }

    function handleScheduleAndMailingTabOpen() {
        setScheduleAndMailingTabOpen(true);
        setMyGroupTabOpen(false);
        setMyListTabOpen(false);
        setFieldVisibilityTabOpen(false);
        setAlertsTabOpen(false);
    }

    function handleAlertsTabOpen() {
        setAlertsTabOpen(true);
        setMyGroupTabOpen(false);
        setMyListTabOpen(false);
        setFieldVisibilityTabOpen(false);
        setScheduleAndMailingTabOpen(false);
    }

    return (
        <div className="vagons-setting-tab">
            <div className="vagons-setting-tab__tabs-container">
                <div className={`vagons-setting-tab__tab-container ${isMyListTabOpen && 'vagons-setting-tab__tab-container_active'}`} onClick={handleMyListTabOpen}>
                    <p className={`vagons-setting-tab__tab ${isMyListTabOpen && 'vagons-setting-tab__tab_active'}`}>Мой список</p>
                </div>
                <div className={`vagons-setting-tab__tab-container ${isMyGroupTabOpen && 'vagons-setting-tab__tab-container_active'}`} onClick={handleMyGroupTabOpen}>
                    <p className={`vagons-setting-tab__tab ${isMyGroupTabOpen && 'vagons-setting-tab__tab_active'}`}>Мои группы</p>
                </div>
                <div className={`vagons-setting-tab__tab-container ${isFieldVisibilityTabOpen && 'vagons-setting-tab__tab-container_active'}`} onClick={handleFieldVisibilityTabOpen}>
                    <p className={`vagons-setting-tab__tab ${isFieldVisibilityTabOpen && 'vagons-setting-tab__tab_active'}`}>Видимость полей</p>
                </div>
                <div className={`vagons-setting-tab__tab-container ${isScheduleAndMailingTabOpen && 'vagons-setting-tab__tab-container_active'}`} onClick={handleScheduleAndMailingTabOpen}>
                    <p className={`vagons-setting-tab__tab ${isScheduleAndMailingTabOpen && 'vagons-setting-tab__tab_active'}`}>Расписание и рассылка</p>
                </div>
                <div className={`vagons-setting-tab__tab-container ${isAlertsTabOpen && 'vagons-setting-tab__tab-container_active'}`} onClick={handleAlertsTabOpen}>
                    <p className={`vagons-setting-tab__tab ${isAlertsTabOpen && 'vagons-setting-tab__tab_active'}`}>Оповещения</p>
                </div>
            </div>
            {isMyListTabOpen && <MyListVagonsTab
                carriageGroups={carriageGroups}
                carriageList={carriageList}
                selectedGroupCarriages={selectedGroupCarriages}
                postNewCarriages={postNewCarriages}
                onSearchGroupClick={onSearchGroupClick}
                isSearchButtonClicked={isSearchButtonClicked}
                deleteCarriages={deleteCarriages}
                onCheckboxChekedArray={onCheckboxChekedArray}
                selectAllWagons={selectAllWagons}
                isAllWagonsSelected={isAllWagonsSelected}
                deleteAllCarriagesAndGroups={deleteAllCarriagesAndGroups}
            />}
            {isMyGroupTabOpen && <MyGroupVagonsTab
                carriageGroups={carriageGroups}
                postNewGroup={postNewGroup}
                deleteAllCarriagesAndGroups={deleteAllCarriagesAndGroups}
            />}
            {isFieldVisibilityTabOpen && <FieldVisibilityVagonsTab />}
            {isScheduleAndMailingTabOpen && <ScheduleAndMailingVagonsTab />}
            {isAlertsTabOpen && <AlertsVagonsTab />}
        </div>
    );

}

export default VagonsSettingTab;