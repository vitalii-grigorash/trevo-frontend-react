import React, { useState } from 'react';

function SummaryDislocationCarriages() {

    const [carriageSearchInputValue, setCarriageSearchInputValue] = useState('');

    function handleSearchInputChange(evt) {
        setCarriageSearchInputValue(evt.target.value);
    }

    return (
        <div className="summary-dislocation-carriages">
            <p className="summary-dislocation-carriages__carriage-search-name">Поиск вагона</p>
            <div className="summary-dislocation-carriages__carriage-search-container">
                <input
                    type="text"
                    className="summary-dislocation-carriages__carriage-search-input"
                    placeholder='Введите номер вагона'
                    onChange={handleSearchInputChange}
                    value={carriageSearchInputValue}
                />
                <button type='button' className="summary-dislocation-carriages__carriage-search-button">поиск</button>
            </div>
        </div>
    );

}

export default SummaryDislocationCarriages;