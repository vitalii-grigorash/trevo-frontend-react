import React from 'react';
import CarriageDataTable from '../CarriageDataTable/CarriageDataTable';
import CarriageDislocationTable from '../CarriageDislocationTable/CarriageDislocationTable';

function SummaryDislocationTable() {

    return (
        <div className="summary-dislocation-table">
            <div className="summary-dislocation-table__tables-container">
                <CarriageDataTable />
                <CarriageDislocationTable />
            </div>
            <div className="summary-dislocation-table__bottom-container"></div>
        </div>
    );

}

export default SummaryDislocationTable;