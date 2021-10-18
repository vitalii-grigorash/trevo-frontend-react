import React, { useState } from 'react';

function VagonsList(props) {

    const {
        vagonsNumber,
        vagonsDate,
        vagonsDescription,
    } = props;

    const [carriageDescriptionValue, setCarriageDescriptionValue] = useState(vagonsDescription);
    const [isInputActive, setInputActive] = useState(false);

    function handleChangeCarriageDescription(evt) {
        setCarriageDescriptionValue(evt.target.value);
        if (evt.target.focus) {
            console.log('focus')
            setInputActive(true);
        } else if (!evt.target.focus) {
            setInputActive(false);
        }
    }

    function sendNewCarriageDescription() {
        console.log(carriageDescriptionValue);
        setInputActive(false);
    }

    return (
        <div className="vagons-list">
            <p className="vagons-list__number">{vagonsNumber}</p>
            <p className="vagons-list__date">{vagonsDate}</p>
            <input
                className="vagons-list__description"
                type="text"
                onChange={handleChangeCarriageDescription}
                value={carriageDescriptionValue}
            />
            {isInputActive && (
                <p className="vagons-list__save-button" onClick={sendNewCarriageDescription}>Сохранить</p>
            )}
        </div>
    );

}

export default VagonsList;