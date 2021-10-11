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
    const [carriageList, setCarriageList] = useState([]);

    console.log(carriageList);

    useEffect(() => {
        SettingsPageApi.getAllCarriage()
            .then((data) => {
                setCarriageList(data);
            })
            .catch((err) => console.log(`Ошибка при загрузке списка вагонов: ${err}`));
    }, []);

    const groupsData = [
        {
            groupName: 'Группа 4546',
            vagonsValue: '5 634'
        },
        {
            groupName: 'Группа 34356',
            vagonsValue: '35 634'
        },
        {
            groupName: 'Группа 426',
            vagonsValue: '34'
        },
        {
            groupName: 'Группа 678765',
            vagonsValue: '355'
        },
    ]

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
                groupsData={groupsData}
                carriageList={carriageList}
            />}
            {isMyGroupTabOpen && <MyGroupVagonsTab
                groupsData={groupsData}
            />}
            {isFieldVisibilityTabOpen && <FieldVisibilityVagonsTab />}
            {isScheduleAndMailingTabOpen && <ScheduleAndMailingVagonsTab />}
            {isAlertsTabOpen && <AlertsVagonsTab />}
        </div>
    );

}

export default VagonsSettingTab;