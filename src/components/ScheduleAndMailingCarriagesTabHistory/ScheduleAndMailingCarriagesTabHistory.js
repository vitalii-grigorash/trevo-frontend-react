import React, { useState } from 'react';

function ScheduleAndMailingCarriagesTabHistory(props) {

    const {
        id,
        email,
        comment,
        isEveryday,
        time,
        removeMailing
    } = props;

    const [isOptionsShow, setOptionsShow] = useState(false);
    const executionDays = `${isEveryday ? 'Ежедневно' : 'По рабочим дням'}`;
    const timeArr = time.split(':');
    const localHours = timeArr[0] === '00' ? '21' : timeArr[0] - 3;
    const hours = String(localHours).length === 1 ? '0' + String(localHours) : String(localHours);
    const minutes = timeArr[1];
    const localTime = hours + ':' + minutes;

    function onOptionsShowClick() {
        if (isOptionsShow) {
            setOptionsShow(false);
        } else {
            setOptionsShow(true);
        }
    }

    function onRemoveClick() {
        removeMailing(id);
    }

    return (
        <div className="schedule-and-mailing-carriages-tab-history">
            <p className="schedule-and-mailing-carriages-tab-history__value schedule-and-mailing-carriages-tab-history__value_email">{email}</p>
            <p className="schedule-and-mailing-carriages-tab-history__value schedule-and-mailing-carriages-tab-history__value_description">{comment}</p>
            <p className="schedule-and-mailing-carriages-tab-history__value schedule-and-mailing-carriages-tab-history__value_execution-days">{executionDays}</p>
            <p className="schedule-and-mailing-carriages-tab-history__value schedule-and-mailing-carriages-tab-history__value_time">{localTime}</p>
            <div className="schedule-and-mailing-carriages-tab-history__options-icon-container" onClick={onOptionsShowClick}>
                <div className="schedule-and-mailing-carriages-tab-history__options-icon" />
                <div className={`schedule-and-mailing-carriages-tab-history__options-container ${isOptionsShow && 'schedule-and-mailing-carriages-tab-history__options-container_active'}`}>
                    <p className="schedule-and-mailing-carriages-tab-history__option" onClick={onRemoveClick}>Удалить</p>
                </div>
            </div>
        </div>
    );
}

export default ScheduleAndMailingCarriagesTabHistory;