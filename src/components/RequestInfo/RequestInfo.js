import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

function RequestInfo(props) {

    const {
        isPreloaderShow,
        isInfoShow,
        requestInfo
    } = props;

    const lat = requestInfo.result.lat;
    const lon = requestInfo.result.lon;

    const placeMark = {
        geometry: [lat, lon],
        properties: {
            hintContent: '',
            balloonContent: '',
        },
        options: {
            iconLayout: 'default#image',
            iconImageSize: [40, 50],
            iconImageOffset: [-20, -48],
        },
        modules: ['geoObject.addon.balloon', 'geoObject.addon.hint']
    }

    return (
        <div className="request-info">
            <div className="request-info__heading-container">
                <div className="request-info__request-container">
                    <p className="request-info__request-param">Вагон № 1234567</p>
                    <p className="request-info__request-text">{requestInfo.requestTypeName}</p>
                </div>
                {isPreloaderShow ? (
                    <></>
                ) : (
                    <div className="request-info__options-container">
                        <div className="request-info__option-container">
                            <div className="request-info__option-icon request-info__option-icon_download" />
                            <p className="request-info__option-text">скачать</p>
                        </div>
                        <div className="request-info__option-container">
                            <div className="request-info__option-icon request-info__option-icon_print" />
                            <p className="request-info__option-text">распечатать</p>
                        </div>
                    </div>
                )}
            </div>

            {isPreloaderShow ? (
                <div className="request-info__spinner-container">
                    <p className="request-info__search-text">Запрос обрабатывается...</p>
                    <div className="spinner__container">
                        <i className="spinner__circle-preloader"></i>
                    </div>
                </div>
            ) : (
                isInfoShow && (
                    <div className="request-info__info-container">
                        <div className="request-info__text-container">
                            <p className="request-info__text">{requestInfo.result.text}</p>
                        </div>
                        <YMaps>
                            <div className="request-info__map-container">
                                <Map
                                    defaultState={{ center: [lat, lon], zoom: 16 }}
                                    width={"100%"}
                                    height={"100%"}
                                >
                                    <Placemark {...placeMark} />
                                </Map>
                            </div>
                        </YMaps>
                    </div>
                )
            )}

        </div>
    );

}

export default RequestInfo;