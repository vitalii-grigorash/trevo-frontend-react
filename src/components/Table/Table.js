import React from 'react';

function Table(props) {

    const {
        table,
        resultsShow,
        showResultsFrom,
    } = props;

    return (
        <div className="table">
            {table.name !== '' && (
                <div className="table__heading-container">
                    <p className="table__heading">{table.name}</p>
                </div>
            )}
            <div className="table__columns-container">
                {table.columns.map((column) => {
                    return (
                        <div key={column.id}>
                            {column.isVisible && (
                                <div className="table__column">
                                    <div className="table__column-heading-container">
                                        <p className="table__column-heading">{column.heading}</p>
                                    </div>
                                    {column.data.slice(showResultsFrom, resultsShow).map((value, index) => (
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
