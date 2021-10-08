import React, { useState, useEffect } from 'react';

function MyListResultItem(props) {

    const {
        onCheckboxClick,
        isAllWagonsSelected,
        id,
        vagonNumber,
        groupName,
        date,
        description,
    } = props;

    const [isCheckboxChecked, setCheckboxChecked] = useState(false);

    const dataToSend = {
        date: date,
        description: description,
        groupName: groupName,
        vagonNumber: vagonNumber
    }

    useEffect(() => {
        if (isAllWagonsSelected) {
            if (isCheckboxChecked) {
                return
            } else {
                setCheckboxChecked(true);
                onCheckboxClick(true, dataToSend)
            }
        } else {
            setCheckboxChecked(false);
            onCheckboxClick(false, dataToSend)
        }
        // eslint-disable-next-line
    }, [isAllWagonsSelected])

    function handleCheckboxCheck() {
        if (isCheckboxChecked) {
            setCheckboxChecked(false);
        } else {
            setCheckboxChecked(true);
        }
    }

    return (
        <div className={`my-list-result-item ${isCheckboxChecked && 'my-list-result-item_checked'}`}>
            <div className="my-list-result-item__checkbox">
                <input
                    id={id}
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxCheck}
                    onClick={() => onCheckboxClick(!isCheckboxChecked, dataToSend)}
                    type="checkbox"
                />
                <label htmlFor={id}></label>
            </div>
            <p className="my-list-result-item__number">{vagonNumber}</p>
            <p className="my-list-result-item__name">{groupName}</p>
            <p className="my-list-result-item__date">{date}</p>
            <p className="my-list-result-item__description">{description}</p>
            <div className="my-list-result-item__menu-icon" />
        </div>
    )
}

export default MyListResultItem;