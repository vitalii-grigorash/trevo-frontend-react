import React from 'react';

function CarriageDislocationTable() {

    return (
        <div className="summary-dislocation-table__table">
            <div className="summary-dislocation-table__table-heading-container">
                <p className="summary-dislocation-table__table-heading">Дислокация вагона</p>
            </div>
            <div className="summary-dislocation-table__table-columns-container">
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_operation-station">Станция операции</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_operation-station">ЛЯМЦЕВО (071716)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_operation-road">Дорога операции</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_operation-road">ОКТЯБРЬСКАЯ (01)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarriageDislocationTable;