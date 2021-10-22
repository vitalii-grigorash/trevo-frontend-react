import React from 'react';

function CarriageInfoTable(props) {

    const {
        carriageData,
        locationData
    } = props;

    return (
        <div className="carriage-info-table">
            <div className="carriage-info-table__container">
                <div className="carriage-info-table__row carriage-info-table__row_heading">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Данные о вагоне</p>
                    </div>
                    <div className="carriage-info-table__column" />
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Номер вагона</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.carriageNumber}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Номер накладной</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.invoiceNumber}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Род вагона</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.carriageType}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Администрация собственника</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.adminOwner}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Дата и время начала рейса</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.tripStartDate}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Государство отправления</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.departureCountry}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Дорога отправления</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.departureRoad}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Станция отправления</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.departureStation}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Дата и время окончания рейса</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.tripEndDate}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Государство назначения</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.destinationCountry}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Дорога назначения</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.destinationRoad}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Станция назначения</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.destinationStation}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Грузоотправитель ТГНЛ</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.senderTGNLCode}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Грузоотправитель</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.sender}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Грузополучатель ТГНЛ</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.receiverTGNLCode}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Грузополучатель</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.receiver}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Наименование груза</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.cargoName}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Код груза ГНГ</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.cargoGNGCode}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Вес груза (кг)</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.cargoMass}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Пробег в груженом состоянии (км)</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.loadedMileage}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Пробег в порожнем состоянии (км)</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.emptyMileage}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Пробег общий (км)</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.totalMileage}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Норматив величины пробега (км)</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.mileageStandard}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Остаток пробега (км)</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.mileageLeft}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Особые отметки</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.specialNotes}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Идентификатор накладной</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{carriageData.invoiceIdentifier}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row carriage-info-table__row_heading">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Дислокация вагона</p>
                    </div>
                    <div className="carriage-info-table__column" />
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Дата и время операции</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.operationDate}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Станция операции</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.operationStation}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Дорога операции</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.operationRoad}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Операция</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.operation}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Мнемокод операции</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.operationMnemonicCode}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Тип парка</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.parkType}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Дорога приема</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.receivingRoad}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Дорога сдачи</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.returningRoad}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Индекс поезда</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.trainIndex}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Номер поезда</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.trainNumber}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Номер вагона в составе поезда</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.carriagePlaceNumberInTrain}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Номер парка</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.parkNumber}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Номер пути</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.pathNumber}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Количество пломб</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.sealNumber}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Количество груженых контейнеров</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.loadedContainerNumber}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Количество порожних контейнеров</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.emptyContainerNumber}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Номера контейнеров на вагоне</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.containerNumbersInCarriage}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Нормативный срок доставки</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.standardDeliveryDate}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Расстояние пройденное (км)</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.distanceTraveled}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Расстояние оставшееся (км)</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.distanceLeft}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Расстояние общее (км)</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.totalDistance}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Время простоя под последней операцией (сутки:часы:минуты)</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.downtimeUnderLastOperation}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Время простоя под последней операцией (сутки)</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.downtimeUnderLastOperationDays}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Номер накладной по досылке</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.redeliveryInvoiceNumber}</p>
                    </div>
                </div>
                <div className="carriage-info-table__row">
                    <div className="carriage-info-table__column carriage-info-table__column_left">
                        <p className="carriage-info-table__text">Уникальный номер отправки по досылке</p>
                    </div>
                    <div className="carriage-info-table__column">
                        <p className="carriage-info-table__text carriage-info-table__text_value">{locationData.redeliveryUniqueNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CarriageInfoTable;