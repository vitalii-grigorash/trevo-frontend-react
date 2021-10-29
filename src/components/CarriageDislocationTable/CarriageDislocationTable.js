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
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_carriage-operation">Операция с вагоном</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_carriage-operation">Отправление вагона в составе поезда со станции (2)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_operation-mnemonic">Мнемокод операции</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_operation-mnemonic">ОТПР</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_operation-date-and-time">Дата и время операции</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_operation-date-and-time">12.10.2021 12:07</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_date-of-operation">Дата операции</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_date-of-operation">12.10.2021</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_park-type">Тип парка</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_park-type">Транзитный, Порожний, Вагон рабочего парка</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_delivery-road">Дорога сдачи</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_delivery-road">- - - (0)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_reception-road">Дорога приема</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_reception-road">ОКТЯБРЬСКАЯ (1)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_train-index">Индекс поезда</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_train-index">076300 283 314909 (ЛУЖСКАЯ+283+НОВОЯРОСЛАВ.)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_train-number">Номер поезда</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_train-number">9485</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_train-carriage-number">Номер вагона в составе поезда</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_train-carriage-number">64</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_park-number">Номер парка</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_park-number">I (1)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_path-number">Номер пути</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_path-number">(1)</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_number-of-fillings">Количество пломб</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_number-of-fillings">1</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_number-of-loaded-containers">Количество груженых контейнеров</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_number-of-loaded-containers">0</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_number-of-empty-containers">Количество порожних контейнеров</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_number-of-empty-containers">0</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_container-numbers-on-wagon">Номера контейнеров на вагоне</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_container-numbers-on-wagon">0</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_standard-delivery-time">Нормативный срок доставки</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_standard-delivery-time">19.10.2021</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_distance-traveled-km">Расстояние пройденное (км)</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_distance-traveled-km">255</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_distance-remaining-km">Расстояние оставшееся (км)</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_distance-remaining-km">780</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_total-distance-km">Расстояние общее (км)</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_total-distance-km">1035</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_downtime-under-last-operation">Время простоя под посленей операцией (сутки:часы:минуты)</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_downtime-under-last-operation">0:0:13</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_downtime-under-last-operation-day">Время простоя под посленей операцией (сутки)</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_downtime-under-last-operation-day">0</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_dispatch-id">Идентификатор отправки по досылке</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_dispatch-id">0</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_forwarding-invoice-id">Идентификатор накладной по досылке</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_forwarding-invoice-id">0</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_date-and-time-departure-aoup-from-station">Дата и время отправления (АОУП) со станции приема груза к перевозке</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_date-and-time-departure-aoup-from-station">11.10.2021 21:27</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_date-and-time-of-arrival-aoup-at-station">Дата и время прибытия (АОУП) на станцию назначения</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_date-and-time-of-arrival-aoup-at-station">11.10.2021 21:27</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_submission-id">Идентификатор отправки</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_submission-id">2001ЭE579629</p>
                    </div>
                </div>
                <div className="summary-dislocation-table__table-column">
                    <div className="summary-dislocation-table__table-column-heading-container">
                        <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_invoice-id">Идентификатор накладной</p>
                    </div>
                    <div className="summary-dislocation-table__table-row-container">
                        <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_invoice-id">1196047204</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarriageDislocationTable;