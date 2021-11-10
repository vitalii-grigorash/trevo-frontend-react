import React, { useState, useEffect } from 'react';

function FieldVisibilityTableItem(props) {

    const {
        heading,
        isAllCheckboxesSelected,
        isVisible,
        id
    } = props;

    const [isCheckboxChecked, setCheckboxChecked] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setCheckboxChecked(true);
        }
    }, [isVisible])

    useEffect(() => {
        if (isAllCheckboxesSelected) {
            if (isCheckboxChecked) {
                return
            } else {
                setCheckboxChecked(true);
            }
        } else {
            if (isCheckboxChecked) {
                setCheckboxChecked(false);
            }
        }
        // eslint-disable-next-line
    }, [isAllCheckboxesSelected])

    function handleCheckboxCheck() {
        if (isCheckboxChecked) {
            setCheckboxChecked(false);
        } else {
            setCheckboxChecked(true);
        }
    }

    return (
        <div className={`field-visibility-table-item ${isCheckboxChecked && 'field-visibility-table-item__active'}`}>
            <div className="field-visibility-table-item__checkbox">
                <input
                    id={id}
                    type="checkbox"
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxCheck}
                />
                <label htmlFor={id}></label>
            </div>
            <p className="field-visibility-table-item__heading">{heading}</p>
        </div>
    );

}

export default FieldVisibilityTableItem;