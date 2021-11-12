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

    console.log(carriageData);
    console.log(carriageDislocation);
    console.log(carriageTechnicalCondition);
    console.log(carriageDataSmall);
    console.log(carriageRepairs);

    return (
        <div className="summary-dislocation-table">
            <div className="summary-dislocation-table__tables-container">
                <Table 
                    table={carriageData}
                />
            </div>
            <div className="summary-dislocation-table__bottom-container"></div>
        </div>
    );

}

export default SummaryDislocationTable;