import React from 'react';
import FieldVisibilityTableItem from '../FieldVisibilityTableItem/FieldVisibilityTableItem';

function FieldVisibilityTable(props) {

    const {
        data,
        isAllCheckboxesSelected
    } = props;

    console.log(data);

    return (
        <div className="field-visibility-table">
            <div className="field-visibility-table__heading-container">
                <p className="field-visibility-table__heading">{data.name}</p>
            </div>
            {data.columns.map((column) => {
                return (
                    <FieldVisibilityTableItem
                        key={column.id}
                        id={column.id}
                        heading={column.heading}
                        isVisible={column.isVisible}
                        isAllCheckboxesSelected={isAllCheckboxesSelected}
                    />
                )
            })}
        </div>
    );

}

export default FieldVisibilityTable;