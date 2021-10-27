import React from 'react';

function SummaryDislocationTable() {

    return (
        <div className="summary-dislocation-table">
            <div className="summary-dislocation-table__tables-container">
                <div className="summary-dislocation-table__table">
                    <div className="summary-dislocation-table__table-heading-container">
                        <p className="summary-dislocation-table__table-heading">Данные о вагоне</p>
                    </div>
                    <div className="summary-dislocation-table__table-columns-container">
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_carriage-number">Номер вагона</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_carriage-number">50000090</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_group-name">Группа</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_group-name">Группа 1</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_invoice-number">Номер накладной</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_invoice-number">ЭЕ579629</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_type-of-carriage">Род вагона</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_type-of-carriage">Цистерны (70)</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_owner-administration">Администрация собственника</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_owner-administration">РЖД (20)</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_start-date-and-time">Дата и время начала рейса</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_start-date-and-time">11.10.2021 14:45</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_state-of-departure">Государство отправления</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_state-of-departure">Королевство Нидерланды (528)</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_departure-road">Дорога отправления</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_departure-road">ОКТЯБРЬСКАЯ (1)</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_departure-station">Станция отправления</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_departure-station">ЛУЖСКАЯ (ЭКСП.) (076404)</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_end-date-and-time">Дата и время окончания рейса</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_end-date-and-time">11.10.2021 14:45</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_state-of-destination">Государство назначения</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_state-of-destination">Российская Федерация (643)</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_destination-road">Дорога назначения</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_destination-road">СЕВЕРНАЯ (28)</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_destination-station">Станция назначения</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_destination-station">НОВОЯРОСЛАВСКАЯ (314909)</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_shipper-tgnl">Грузоотправитель (ТГНЛ)</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_shipper-tgnl">6520</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_shipper">Грузоотправитель</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_shipper">ООО "БАЛТТРАНССЕРВИС" (52142548)</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_shipper-okpo">Грузоотправитель (ОКПО)</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_shipper-okpo">52142548</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_shipper-name">Грузоотправитель (наим)</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_shipper-name">ООО "БАЛТТРАНССЕРВИС"</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_consignee-tgnl">Грузополучатель (ТГНЛ)</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_consignee-tgnl">7366</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_consignee">Грузополучатель</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_consignee">(00064537)</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_consignee-okpo">Грузополучатель (ОКПО)</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_consignee-okpo">64537</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_consignee-name">Грузополучатель (наим)</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_consignee-name">64537</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_shipping-name">Наименование груза</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_shipping-name">Вагоны железнодорожные всякие, перевозимые на своих осях (421034)</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_cargo-code-gng">Код груза (ГНГ)</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_cargo-code-gng">99220000</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_cargo-weight-kg">Вес груза (кг)</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_cargo-weight-kg">0</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_loaded-mileage-km">Пробег в груженом состоянии (км)</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_loaded-mileage-km">4170</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_empty-mileage-km">Пробег в порожнем состоянии (км)</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_empty-mileage-km">3311</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_total-mileage-km">Пробег общий (км)</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_total-mileage-km">7481</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_standard-mileage-km">Нормативная величина пробега (км)</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_standard-mileage-km">160000</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_remaining-mileage-km">Остаток пробега (км)</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_remaining-mileage-km">152519</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_mileage-sign">Признак пробега</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_mileage-sign">152519</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_special-marks">Особые отметки</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_special-marks">3, 8, 0</p>
                            </div>
                        </div>
                        <div className="summary-dislocation-table__table-column">
                            <div className="summary-dislocation-table__table-column-heading-container">
                                <p className="summary-dislocation-table__table-column-heading summary-dislocation-table__table-column-heading_previously-unloaded-cargo">Ранее выгруженный груз</p>
                            </div>
                            <div className="summary-dislocation-table__table-row-container">
                                <p className="summary-dislocation-table__table-row-text summary-dislocation-table__table-row-text_previously-unloaded-cargo">Мазут топочный (221066)</p>
                            </div>
                        </div>
                    </div>
                </div>
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
            </div>
            <div className="summary-dislocation-table__bottom-container"></div>
        </div>
    );

}

export default SummaryDislocationTable;