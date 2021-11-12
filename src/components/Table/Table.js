import React from 'react';

function Table(props) {

    const {
        table
    } = props;

    return (
        <div className="table">
            <div className="table__heading-container">
                <p className="table__heading">{table.name}</p>
            </div>
            <div className="table__columns-container">
                <div className="table__column">
                    <div className="table__column-heading-container">
                        <p className="table__column-heading">Номер вагона</p>
                    </div>
                    <div className="table__row-container">
                        <p className="table__row-text">50000090</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;