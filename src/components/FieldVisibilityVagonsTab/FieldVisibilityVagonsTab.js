import React, { useState, useEffect } from 'react';
import FieldVisibilityTable from '../FieldVisibilityTable/FieldVisibilityTable';
import * as SettingsPageApi from '../../utils/SettingPageApi';

function FieldVisibilityVagonsTab() {

    const [visibilitySettings, setVisibilitySettings] = useState({});
    const [isVisibilitySettingsShow, setVisibilitySettingsShow] = useState(false);
    const [isAllCheckboxesSelected, setAllCheckboxesSelected] = useState(false);

    function selectAllCheckboxes() {
        if (isAllCheckboxesSelected) {
            setAllCheckboxesSelected(false);
            const data = {
                isVisible: false
            }
            SettingsPageApi.selectAllVisibilityFields(data);
        } else {
            setAllCheckboxesSelected(true);
            const data = {
                isVisible: true
            }
            SettingsPageApi.selectAllVisibilityFields(data);
        }
    }

    useEffect(() => {
        SettingsPageApi.getVisibilitySettings()
            .then((settings) => {
                setVisibilitySettings(settings);
            })
            .then(() => {
                setVisibilitySettingsShow(true);
            })
    }, [])

    return (
        <div className="field-visibility-vagons-tab">
            <div className="field-visibility-vagons-tab__select-all-checkbox-container">
                <div className="field-visibility-vagons-tab__select-all-checkbox">
                    <input
                        id="selectAll"
                        type="checkbox"
                        onChange={selectAllCheckboxes}
                        checked={isAllCheckboxesSelected}
                    />
                    <label htmlFor="selectAll"></label>
                </div>
                <p className="field-visibility-vagons-tab__select-all-checkbox-text">Выбрать все</p>
            </div>
            {isVisibilitySettingsShow && (
                <div className="field-visibility-vagons-tab__all-checkboxes-main-container">
                    {visibilitySettings.carriageData !== null && (
                        <FieldVisibilityTable
                            data={visibilitySettings.carriageData}
                            isAllCheckboxesSelected={isAllCheckboxesSelected}
                        />
                    )}
                    {visibilitySettings.carriageDislocation !== null && (
                        <FieldVisibilityTable
                            data={visibilitySettings.carriageDislocation}
                            isAllCheckboxesSelected={isAllCheckboxesSelected}
                        />
                    )}
                    {visibilitySettings.carriageTechnicalCondition !== null && (
                        <FieldVisibilityTable
                            data={visibilitySettings.carriageTechnicalCondition}
                            isAllCheckboxesSelected={isAllCheckboxesSelected}
                        />
                    )}
                    {visibilitySettings.carriageDataSmall !== null && (
                        <FieldVisibilityTable
                            data={visibilitySettings.carriageDataSmall}
                            isAllCheckboxesSelected={isAllCheckboxesSelected}
                        />
                    )}
                    {visibilitySettings.carriageRepairs !== null && (
                        <FieldVisibilityTable
                            data={visibilitySettings.carriageRepairs}
                            isAllCheckboxesSelected={isAllCheckboxesSelected}
                        />
                    )}
                </div>
            )}
        </div>
    );

}

export default FieldVisibilityVagonsTab;