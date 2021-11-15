import React from 'react';
import Table from '../Table/Table';

function SummaryDislocationTable(props) {

    const {
        carriageData,
        carriageDislocation,
        carriageTechnicalCondition,
        carriageDataSmall,
        carriageRepairs,
    } = props;

    return (
        <div className="summary-dislocation-table">
            <div className="summary-dislocation-table__tables-container">
                {carriageData !== null && (
                    <Table
                        table={carriageData}
                    />
                )}
                {carriageDislocation !== null && (
                    <Table
                        table={carriageDislocation}
                    />
                )}
                {carriageTechnicalCondition !== null && (
                    <Table
                        table={carriageTechnicalCondition}
                    />
                )}
                {carriageDataSmall !== null && (
                    <Table
                        table={carriageDataSmall}
                    />
                )}
                {carriageRepairs !== null && (
                    <Table
                        table={carriageRepairs}
                    />
                )}
            </div>
            <div className="summary-dislocation-table__bottom-container"></div>
        </div>
    );

}

export default SummaryDislocationTable;