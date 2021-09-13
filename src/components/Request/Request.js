import React, { useState } from 'react';

function Request(props) {

    const {
        heading,
        handleOpenRequestList,
        isRequestListOpen
    } = props;

    const [price, setPrice] = useState('0')
    const [selectText, setSelectText] = useState('Выберите запрос')

    const sendRequest = () => {
        console.log(selectText, price);
    }

    return (
        <div className="request">

            <div className="request__main-container">

                <div className="request__heading-container">
                    <h2 className="request__heading">{heading}</h2>
                    <p className="request__price">Стоимость: {price} &#8381;</p>
                </div>

                <p className="request__select-heading">Список запросов</p>

                <div className="request__select-container" onClick={handleOpenRequestList}>
                    <p className="request__select-text">{selectText}</p>
                    <div className="request__select-arrow" />
                    {isRequestListOpen &&
                        <div className="request__lists-container">
                            <div className="reques__list-container">
                                <p className="reques__list-text">Данные по литым деталям тележки и колесным парам</p>
                            </div>
                            <div className="reques__list-container">
                                <p className="reques__list-text">Розыск детали, история (2733)</p>
                            </div>
                            <div className="reques__list-container">
                                <p className="reques__list-text">Справка о выполненных ремонтах вагона (2653)</p>
                            </div>
                            <div className="reques__list-container">
                                <p className="reques__list-text">Сведения по узлам и деталям вагона (2730)</p>
                            </div>
                            <div className="reques__list-container">
                                <p className="reques__list-text">Картотечные данные по вагонам (ремонт, пробег) (2612)</p>
                            </div>
                        </div>
                    }
                </div>

                <button type="submit" className="request__submit-button" onClick={sendRequest}>Запросить</button>

            </div>

        </div>
    );

}

export default Request;