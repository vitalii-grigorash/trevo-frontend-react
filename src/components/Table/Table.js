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
                {table.columns.map((column) => {
                    return (
                        <div key={column.id}>
                            {column.isVisible && (
                                <div className="table__column">
                                    <div className="table__column-heading-container">
                                        <p className="table__column-heading">{column.heading}</p>
                                    </div>
                                    {column.data.map((value, index) => (
                                        <div className="table__row-container" key={index}>
                                            <p className="table__row-text">{value}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Table;