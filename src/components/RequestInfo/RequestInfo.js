import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import CarriageInfoTable from '../CarriageInfoTable/CarriageInfoTable';

function RequestInfo(props) {

    const {
        isPreloaderShow,
        isInfoShow,
        requestInfo,
        requesName,
        requestId,
        urlTypeForDownload
    } = props;

    const lat = `${isPreloaderShow ? '' : requestInfo.result.lat}`
    const lon = `${isPreloaderShow ? '' : requestInfo.result.lon}`
    const request = `${isPreloaderShow ? requesName : requestInfo.requestTypeName}`

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
                <p className="request-info__request-text">{request}</p>
                {isPreloaderShow ? (
                    <></>
                ) : (
                    <div className="request-info__options-container">
                        <div className="request-info__option-container">
                            <a className="request-info__option-link-container" href={`http://evote65-vm.dltc.spbu.ru:5555/operational/${urlTypeForDownload}/request/download/${requestId}`} target="_blank" rel="noreferrer">
                                <div className="request-info__option-icon request-info__option-icon_download" />
                                <p className="request-info__option-text">скачать</p>
                            </a>
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
                        {requestInfo.result.text ? (
                            <div className="request-info__text-container">
                                <p className="request-info__text">{requestInfo.result.text}</p>
                            </div>
                        ) : (
                            <CarriageInfoTable
                                carriageData={requestInfo.result.table.carriageData}
                                locationData={requestInfo.result.table.locationData}
                            />
                        )}
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