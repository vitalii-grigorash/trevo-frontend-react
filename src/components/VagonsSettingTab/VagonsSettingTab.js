import React, { useState } from 'react';
import MyListVagonsTab from '../MyListVagonsTab/MyListVagonsTab';
import FieldVisibilityVagonsTab from '../FieldVisibilityVagonsTab/FieldVisibilityVagonsTab';
import ScheduleAndMailingVagonsTab from '../ScheduleAndMailingVagonsTab/ScheduleAndMailingVagonsTab';
import AlertsVagonsTab from '../AlertsVagonsTab/AlertsVagonsTab';

function VagonsSettingTab() {

    const [isMyListTabOpen, setMyListTabOpen] = useState(true);
    const [isFieldVisibilityTabOpen, setFieldVisibilityTabOpen] = useState(false);
    const [isScheduleAndMailingTabOpen, setScheduleAndMailingTabOpen] = useState(false);
    const [isAlertsTabOpen, setAlertsTabOpen] = useState(false);

    function handleMyListTabOpen() {
        setMyListTabOpen(true);
        setFieldVisibilityTabOpen(false);
        setScheduleAndMailingTabOpen(false);
        setAlertsTabOpen(false);
    }

    function handleFieldVisibilityTabOpen() {
        setFieldVisibilityTabOpen(true);
        setMyListTabOpen(false);
        setScheduleAndMailingTabOpen(false);
        setAlertsTabOpen(false);
    }

    function handleScheduleAndMailingTabOpen() {
        setScheduleAndMailingTabOpen(true);
        setMyListTabOpen(false);
        setFieldVisibilityTabOpen(false);
        setAlertsTabOpen(false);
    }

    function handleAlertsTabOpen() {
        setAlertsTabOpen(true);
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
            {isMyListTabOpen && <MyListVagonsTab />}
            {isFieldVisibilityTabOpen && <FieldVisibilityVagonsTab />}
            {isScheduleAndMailingTabOpen && <ScheduleAndMailingVagonsTab  />}
            {isAlertsTabOpen && <AlertsVagonsTab  />}
        </div>
    );

}

export default VagonsSettingTab;