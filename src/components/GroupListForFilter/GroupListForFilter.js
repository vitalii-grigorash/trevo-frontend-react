import React, { useState } from 'react';

function GroupListForFilter(props) {

    const {
        name,
        id
    } = props;

    const [isCheckboxChecked, setCheckboxChecked] = useState(false);

    const dataToSend = {
        id: id,
    }

    function handleCheckboxCheck() {
        if (isCheckboxChecked) {
            setCheckboxChecked(false);
        } else {
            setCheckboxChecked(true);
        }
    }

    function onCheckboxClick() {
        console.log(dataToSend);
    }

    return (
        <div className={`group-list-for-filter ${isCheckboxChecked && 'group-list-for-filter_checked'}`}>
            <div className="group-list-for-filter__checkbox">
                <input
                    id={id}
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxCheck}
                    onClick={onCheckboxClick}
                    type="checkbox"
                />
                <label htmlFor={id}></label>
            </div>
            <p className="group-list-for-filter__name">{name}</p>
        </div>
    );

}

export default GroupListForFilter;