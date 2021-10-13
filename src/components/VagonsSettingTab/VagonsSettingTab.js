import React, { useState, useEffect } from 'react';
import MyListVagonsTab from '../MyListVagonsTab/MyListVagonsTab';
import FieldVisibilityVagonsTab from '../FieldVisibilityVagonsTab/FieldVisibilityVagonsTab';
import ScheduleAndMailingVagonsTab from '../ScheduleAndMailingVagonsTab/ScheduleAndMailingVagonsTab';
import AlertsVagonsTab from '../AlertsVagonsTab/AlertsVagonsTab';
import MyGroupVagonsTab from '../MyGroupVagonsTab/MyGroupVagonsTab';
import * as SettingsPageApi from '../../utils/SettingPageApi';

function VagonsSettingTab() {

    const [isMyListTabOpen, setMyListTabOpen] = useState(true);
    const [isMyGroupTabOpen, setMyGroupTabOpen] = useState(false);
    const [isFieldVisibilityTabOpen, setFieldVisibilityTabOpen] = useState(false);
    const [isScheduleAndMailingTabOpen, setScheduleAndMailingTabOpen] = useState(false);
    const [isAlertsTabOpen, setAlertsTabOpen] = useState(false);
    const [carriageGroups, setCarriageGroups] = useState([]);
    const [carriageList, setCarriageList] = useState([]);
    const [selectedGroupCarriages, setSelectedGroupCarriages] = useState([]);
    const [isSearchButtonClicked, setSearchButtonClicked] = useState(false);
    const [selectedGroupId, setSelectedGroupId] = useState('');
    const [isRemoveButtonClicked, setRemoveButtonClicked] = useState(false);

    function getAllCarriage() {
        SettingsPageApi.getAllCarriage()
            .then((data) => {
                setCarriageList(data.reverse());
            })
            .catch((err) => console.log(`Ошибка при загрузке списка вагонов: ${err}`));
    }

    function onSearchGroupClick(id) {
        setSelectedGroupId(id);
        setSearchButtonClicked(true);
        setSelectedGroupCarriages([]);
        // eslint-disable-next-line
        carriageList.find((item) => {
            if (item.groupId === id) {
                setSelectedGroupCarriages(selectedGroupCarriages => ([...selectedGroupCarriages, item]));
            }
        });
    }

    function deleteCarriages(carriagesArray) {
        setRemoveButtonClicked(true);
        SettingsPageApi.deleteCarriages(carriagesArray)
            .then(() => {
                getAllCarriage();
            })
            .catch((err) => console.log(`Ошибка при загрузке списка вагонов: ${err}`));
    }

    function postNewCarriages(groupId, carriagesToAdd) {
        SettingsPageApi.postNewCarriages(groupId, carriagesToAdd)
            .then(() => {
                getAllCarriage();
            })
            .catch((err) => console.log(`Ошибка при отправки запроса: ${err}`));
    }

    function getCarriageGroups() {
        SettingsPageApi.getCarriageGroups()
            .then((data) => {
                setCarriageGroups(data);
            })
            .catch((err) => console.log(`Ошибка при загрузке списка вагонов: ${err}`));
    }

    function postNewGroup(newGroupData) {
        SettingsPageApi.postNewCarriageGroup(newGroupData)
            .then((res) => {
                console.log(res);
                getCarriageGroups();
            })
            .catch((err) => console.log(`Ошибка при отправки запроса: ${err}`));
    }

    useEffect(() => {
        getCarriageGroups();
    }, []);

    useEffect(() => {
        getAllCarriage();
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
                isRemoveButtonClicked={isRemoveButtonClicked}
                selectedGroupId={selectedGroupId}
            />}
            {isMyGroupTabOpen && <MyGroupVagonsTab
                carriageGroups={carriageGroups}
                postNewGroup={postNewGroup}
            />}
            {isFieldVisibilityTabOpen && <FieldVisibilityVagonsTab />}
            {isScheduleAndMailingTabOpen && <ScheduleAndMailingVagonsTab />}
            {isAlertsTabOpen && <AlertsVagonsTab />}
        </div>
    );

}

export default VagonsSettingTab;