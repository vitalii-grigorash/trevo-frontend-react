import React from 'react';
import CarriageDataTable from '../CarriageDataTable/CarriageDataTable';
import CarriageDislocationTable from '../CarriageDislocationTable/CarriageDislocationTable';
import CarriageTechnicalConditionTable from '../CarriageTechnicalConditionTable/CarriageTechnicalConditionTable';
import CarriageDataSmallTable from '../CarriageDataSmallTable/CarriageDataSmallTable';
import CarriageRepairsTable from '../CarriageRepairsTable/CarriageRepairsTable';

function SummaryDislocationTable() {

    return (
        <div className="summary-dislocation-table">
            <div className="summary-dislocation-table__tables-container">
                <CarriageDataTable />
                <CarriageDislocationTable />
                <CarriageTechnicalConditionTable />
                <CarriageDataSmallTable />
                <CarriageRepairsTable  />
            </div>
            <div className="summary-dislocation-table__bottom-container"></div>
        </div>
    );

}

export default SummaryDislocationTable;