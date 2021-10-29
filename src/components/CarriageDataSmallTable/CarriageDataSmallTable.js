import React from 'react';

function CarriageDataSmallTable() {

    return (
        <div className="summary-dislocation-table__table">
            <div className="summary-dislocation-table__table-heading-container">
                <p className="summary-dislocation-table__table-heading">Данные о вагоне</p>
            </div>
            <div className="summary-dislocation-table__table-columns-container">
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_scheduled-repair-type">Вид планового ремонта</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_scheduled-repair-type">Деповской ремонт (1)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_scheduled-repair-date">Дата планового ремонта</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_scheduled-repair-date">19.01.2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarriageDataSmallTable;