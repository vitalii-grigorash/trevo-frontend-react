import React, { useState } from 'react';

function AlertsCarriagesTabHistory(props) {

    const {
        id,
        type,
        description,
        email,
        executionFrequency
    } = props;

    const [isOptionsShow, setOptionsShow] = useState(false);

    function onOptionsShowClick() {
        if (isOptionsShow) {
            setOptionsShow(false);
        } else {
            setOptionsShow(true);
        }
    }

    function onRemoveClick() {
        console.log(id);
    }

    return (
        <div className="alerts-carriages-tab-history">
            <p className="alerts-carriages-tab-history__value alerts-carriages-tab-history__value_type">{type}</p>
            <p className="alerts-carriages-tab-history__value alerts-carriages-tab-history__value_description">{description}</p>
            <p className="alerts-carriages-tab-history__value alerts-carriages-tab-history__value_email">{email}</p>
            <p className="alerts-carriages-tab-history__value alerts-carriages-tab-history__value_execution-frequency">{executionFrequency}</p>
            <div className="alerts-carriages-tab-history__options-icon-container" onClick={onOptionsShowClick}>
                <div className="alerts-carriages-tab-history__options-icon" />
                <div className={`alerts-carriages-tab-history__options-container ${isOptionsShow && 'alerts-carriages-tab-history__options-container_active'}`}>
                    <p className="alerts-carriages-tab-history__option" onClick={onRemoveClick}>Удалить</p>
                </div>
            </div>
        </div>
    );
}

export default AlertsCarriagesTabHistory;