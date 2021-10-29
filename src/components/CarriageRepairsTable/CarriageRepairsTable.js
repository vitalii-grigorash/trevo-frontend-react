import React from 'react';

function CarriageRepairsTable() {

    return (
        <div className="summary-dislocation-table__table">
            <div className="summary-dislocation-table__table-heading-container">
                <p className="summary-dislocation-table__table-heading">Ремонты вагона</p>
            </div>
            <div className="summary-dislocation-table__table-columns-container">
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_date-time-data-entry">Дата и время ввода данных</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_date-time-data-entry">15.07.2021 16:47</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_repair-carriage-type">Вид ремонта</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_repair-carriage-type">Текущий ремонт 2 (4)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_repair-road">Дорога ремонта</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_repair-road">ОКТЯБРЬСКАЯ (1)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_repair-depot">Депо ремонта</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_repair-depot">ВРД Петрозаводск АО "ВРК-1" (343)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_fault-one">Неисправность 1</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_fault-one">Провисание автосцепки (302)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_fault-two">Неисправность 2</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_fault-two">(0)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_fault-three">Неисправность 3</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_fault-three">(0)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_date-and-time-of-failure">Дата и время неисправности</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_date-and-time-of-failure">14.07.2021 18:37</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_date-time-start-repair">Дата и время начала ремонта</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_date-time-start-repair">15.07.2021 10:00</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_transfer-uncoupling-station">Станция передачи-отцепки</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_transfer-uncoupling-station">ПЕТРОЗАВОДСК (010002)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_notification-number-vu-twenty-three">Номер уведомления ВУ-23</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_notification-number-vu-twenty-three">1302</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_notification-number-vu-thirty-six">Номер уведомления ВУ-36</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_notification-number-vu-thirty-six">229</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_modernization">Модернизация 1</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_modernization">(0)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_modernization">Модернизация 2</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_modernization">(0)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_modernization">Модернизация 3</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_modernization">(0)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_modernization">Модернизация 4</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_modernization">(0)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_modernization">Модернизация 5</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_modernization">(0)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_modernization">Модернизация 6</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_modernization">(0)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_modernization">Модернизация 7</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_modernization">(0)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_modernization">Модернизация 8</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_modernization">(0)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_modernization">Модернизация 9</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_modernization">(0)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_modernization">Модернизация 10</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_modernization">(0)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_car-condition">Состояние вагона</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_car-condition">ВАГОН PП</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarriageRepairsTable;