import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

function RequestInfo(props) {

    const {
        isPreloaderShow,
        isInfoShow,
        requestInfo
    } = props;

    const placeMark = {
        geometry: [55.998442, 92.951590],
        properties: {
            hintContent: 'Злобино',
            balloonContent: 'Ж/Д Станция "Злобино"',
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
                    <p className="request-info__request-text">{requestInfo}</p>
                </div>
                {isPreloaderShow ? (
                    <></>
                ) : (
                    <div className="request-info__options-container">
                        <div className="request-info__option-container">
                            <div className="request-info__option-icon request-info__option-icon_download" />
                            <p className="request-info__option-text">Скачать</p>
                        </div>
                        <div className="request-info__option-container">
                            <div className="request-info__option-icon request-info__option-icon_print" />
                            <p className="request-info__option-text">Распечатать</p>
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
                            <p className="request-info__text">
                                ГВЦ ОАО `РЖД` СПРАВКА 2612. СРЕДА 27 ОКТЯБРЯ 2010 Г. 16:51
                                ВАГОН 53777983  СОБСТВЕННИК РОССИЯ (СОБСТВЕННЫЙ ВАГОН) `
                                ПРЕДПРИЯТИЕ 880246  ЗАО `ПЦЦ РЕЙЛ`
                                ДОРОГА ПРИПИСКИ 88    - КРАСНОЯРСКАЯ Ж.Д.
                                СТАНЦ. ПРИПИСКИ 89180 - ЗЛОБИНО
                                ПОСТРОЕН 19 ДЕКАБРЯ  1988 Г. ЗАВОДОМ 27 АО `КВСЗ`
                                ПОСЛЕДНИЕ РЕМОНТЫ:
                                КАПИТАЛЬНЫЙ - 21 МАЯ      2010 Г. НА МСК Ж.Д. В 334 - ТУЛА-ВЧД
                                ДЕПОВСКОЙ   - 04 АПРЕЛЯ   2009 Г. НА ВСБ Ж.Д. В 651 - ТАЙШЕТ-ВЧД
                                СВЕДЕНИЯ О ЗАЯВЛЕННОМ ПРОДЛЕНИИ СРОКА СЛУЖБЫ ИЗ 1354:
                                8107 21 МАЯ 2010 Г. НА 7 ЛЕТ ПО ТЕХ.РЕШЕНИЮ (ДО 2017 Г.)
                                СВЕДЕНИЯ ОБ УТВЕРЖДЕННОМ ПРОДЛЕНИИ СРОКА СЛУЖБЫ:
                                ПО ТЕХ.РЕШЕНИЮ (ДО 01 АПРЕЛЯ 2017 Г.)
                                СЛЕД.РЕМОНТ: 21 МАЯ      2012 Г. ДЕПОВСКОЙ
                                ГВЦ ОАО `РЖД` СПРАВКА 2612. СРЕДА 27 ОКТЯБРЯ 2010 Г. 16:51
                                ВАГОН 53777983  СОБСТВЕННИК РОССИЯ (СОБСТВЕННЫЙ ВАГОН) `
                                ПРЕДПРИЯТИЕ 880246  ЗАО `ПЦЦ РЕЙЛ`
                                ДОРОГА ПРИПИСКИ 88    - КРАСНОЯРСКАЯ Ж.Д.
                                СТАНЦ. ПРИПИСКИ 89180 - ЗЛОБИНО
                                ПОСТРОЕН 19 ДЕКАБРЯ  1988 Г. ЗАВОДОМ 27 АО `КВСЗ`
                                ПОСЛЕДНИЕ РЕМОНТЫ:
                                КАПИТАЛЬНЫЙ - 21 МАЯ      2010 Г. НА МСК Ж.Д. В 334 - ТУЛА-ВЧД
                                ДЕПОВСКОЙ   - 04 АПРЕЛЯ   2009 Г. НА ВСБ Ж.Д. В 651 - ТАЙШЕТ-ВЧД
                                СВЕДЕНИЯ О ЗАЯВЛЕННОМ ПРОДЛЕНИИ СРОКА СЛУЖБЫ ИЗ 1354:
                                8107 21 МАЯ 2010 Г. НА 7 ЛЕТ ПО ТЕХ.РЕШЕНИЮ (ДО 2017 Г.)
                                СВЕДЕНИЯ ОБ УТВЕРЖДЕННОМ ПРОДЛЕНИИ СРОКА СЛУЖБЫ:
                                ПО ТЕХ.РЕШЕНИЮ (ДО 01 АПРЕЛЯ 2017 Г.)
                                СЛЕД.РЕМОНТ: 21 МАЯ      2012 Г. ДЕПОВСКОЙ
                                ГВЦ ОАО `РЖД` СПРАВКА 2612. СРЕДА 27 ОКТЯБРЯ 2010 Г. 16:51
                                ВАГОН 53777983  СОБСТВЕННИК РОССИЯ (СОБСТВЕННЫЙ ВАГОН) `
                                ПРЕДПРИЯТИЕ 880246  ЗАО `ПЦЦ РЕЙЛ`
                                ДОРОГА ПРИПИСКИ 88    - КРАСНОЯРСКАЯ Ж.Д.
                                СТАНЦ. ПРИПИСКИ 89180 - ЗЛОБИНО
                                ПОСТРОЕН 19 ДЕКАБРЯ  1988 Г. ЗАВОДОМ 27 АО `КВСЗ`
                                ПОСЛЕДНИЕ РЕМОНТЫ:
                                КАПИТАЛЬНЫЙ - 21 МАЯ      2010 Г. НА МСК Ж.Д. В 334 - ТУЛА-ВЧД
                                ДЕПОВСКОЙ   - 04 АПРЕЛЯ   2009 Г. НА ВСБ Ж.Д. В 651 - ТАЙШЕТ-ВЧД
                                СВЕДЕНИЯ О ЗАЯВЛЕННОМ ПРОДЛЕНИИ СРОКА СЛУЖБЫ ИЗ 1354:
                                8107 21 МАЯ 2010 Г. НА 7 ЛЕТ ПО ТЕХ.РЕШЕНИЮ (ДО 2017 Г.)
                                СВЕДЕНИЯ ОБ УТВЕРЖДЕННОМ ПРОДЛЕНИИ СРОКА СЛУЖБЫ:
                                ПО ТЕХ.РЕШЕНИЮ (ДО 01 АПРЕЛЯ 2017 Г.)
                                СЛЕД.РЕМОНТ: 21 МАЯ      2012 Г. ДЕПОВСКОЙ
                                ГВЦ ОАО `РЖД` СПРАВКА 2612. СРЕДА 27 ОКТЯБРЯ 2010 Г. 16:51
                                ВАГОН 53777983  СОБСТВЕННИК РОССИЯ (СОБСТВЕННЫЙ ВАГОН) `
                                ПРЕДПРИЯТИЕ 880246  ЗАО `ПЦЦ РЕЙЛ`
                                ДОРОГА ПРИПИСКИ 88    - КРАСНОЯРСКАЯ Ж.Д.
                                СТАНЦ. ПРИПИСКИ 89180 - ЗЛОБИНО
                                ПОСТРОЕН 19 ДЕКАБРЯ  1988 Г. ЗАВОДОМ 27 АО `КВСЗ`
                                ПОСЛЕДНИЕ РЕМОНТЫ:
                                КАПИТАЛЬНЫЙ - 21 МАЯ      2010 Г. НА МСК Ж.Д. В 334 - ТУЛА-ВЧД
                                ДЕПОВСКОЙ   - 04 АПРЕЛЯ   2009 Г. НА ВСБ Ж.Д. В 651 - ТАЙШЕТ-ВЧД
                                СВЕДЕНИЯ О ЗАЯВЛЕННОМ ПРОДЛЕНИИ СРОКА СЛУЖБЫ ИЗ 1354:
                                8107 21 МАЯ 2010 Г. НА 7 ЛЕТ ПО ТЕХ.РЕШЕНИЮ (ДО 2017 Г.)
                                СВЕДЕНИЯ ОБ УТВЕРЖДЕННОМ ПРОДЛЕНИИ СРОКА СЛУЖБЫ:
                                ПО ТЕХ.РЕШЕНИЮ (ДО 01 АПРЕЛЯ 2017 Г.)
                                СЛЕД.РЕМОНТ: 21 МАЯ      2012 Г. ДЕПОВСКОЙ
                                ГВЦ ОАО `РЖД` СПРАВКА 2612. СРЕДА 27 ОКТЯБРЯ 2010 Г. 16:51
                                ВАГОН 53777983  СОБСТВЕННИК РОССИЯ (СОБСТВЕННЫЙ ВАГОН) `
                                ПРЕДПРИЯТИЕ 880246  ЗАО `ПЦЦ РЕЙЛ`
                                ДОРОГА ПРИПИСКИ 88    - КРАСНОЯРСКАЯ Ж.Д.
                                СТАНЦ. ПРИПИСКИ 89180 - ЗЛОБИНО
                                ПОСТРОЕН 19 ДЕКАБРЯ  1988 Г. ЗАВОДОМ 27 АО `КВСЗ`
                                ПОСЛЕДНИЕ РЕМОНТЫ:
                                КАПИТАЛЬНЫЙ - 21 МАЯ      2010 Г. НА МСК Ж.Д. В 334 - ТУЛА-ВЧД
                                ДЕПОВСКОЙ   - 04 АПРЕЛЯ   2009 Г. НА ВСБ Ж.Д. В 651 - ТАЙШЕТ-ВЧД
                                СВЕДЕНИЯ О ЗАЯВЛЕННОМ ПРОДЛЕНИИ СРОКА СЛУЖБЫ ИЗ 1354:
                                8107 21 МАЯ 2010 Г. НА 7 ЛЕТ ПО ТЕХ.РЕШЕНИЮ (ДО 2017 Г.)
                                СВЕДЕНИЯ ОБ УТВЕРЖДЕННОМ ПРОДЛЕНИИ СРОКА СЛУЖБЫ:
                                ПО ТЕХ.РЕШЕНИЮ (ДО 01 АПРЕЛЯ 2017 Г.)
                                СЛЕД.РЕМОНТ: 21 МАЯ      2012 Г. ДЕПОВСКОЙ
                                ГВЦ ОАО `РЖД` СПРАВКА 2612. СРЕДА 27 ОКТЯБРЯ 2010 Г. 16:51
                                ВАГОН 53777983  СОБСТВЕННИК РОССИЯ (СОБСТВЕННЫЙ ВАГОН) `
                                ПРЕДПРИЯТИЕ 880246  ЗАО `ПЦЦ РЕЙЛ`
                                ДОРОГА ПРИПИСКИ 88    - КРАСНОЯРСКАЯ Ж.Д.
                                СТАНЦ. ПРИПИСКИ 89180 - ЗЛОБИНО
                                ПОСТРОЕН 19 ДЕКАБРЯ  1988 Г. ЗАВОДОМ 27 АО `КВСЗ`
                                ПОСЛЕДНИЕ РЕМОНТЫ:
                                КАПИТАЛЬНЫЙ - 21 МАЯ      2010 Г. НА МСК Ж.Д. В 334 - ТУЛА-ВЧД
                                ДЕПОВСКОЙ   - 04 АПРЕЛЯ   2009 Г. НА ВСБ Ж.Д. В 651 - ТАЙШЕТ-ВЧД
                                СВЕДЕНИЯ О ЗАЯВЛЕННОМ ПРОДЛЕНИИ СРОКА СЛУЖБЫ ИЗ 1354:
                                8107 21 МАЯ 2010 Г. НА 7 ЛЕТ ПО ТЕХ.РЕШЕНИЮ (ДО 2017 Г.)
                                СВЕДЕНИЯ ОБ УТВЕРЖДЕННОМ ПРОДЛЕНИИ СРОКА СЛУЖБЫ:
                                ПО ТЕХ.РЕШЕНИЮ (ДО 01 АПРЕЛЯ 2017 Г.)
                                СЛЕД.РЕМОНТ: 21 МАЯ      2012 Г. ДЕПОВСКОЙ
                                ГВЦ ОАО `РЖД` СПРАВКА 2612. СРЕДА 27 ОКТЯБРЯ 2010 Г. 16:51
                                ВАГОН 53777983  СОБСТВЕННИК РОССИЯ (СОБСТВЕННЫЙ ВАГОН) `
                                ПРЕДПРИЯТИЕ 880246  ЗАО `ПЦЦ РЕЙЛ`
                                ДОРОГА ПРИПИСКИ 88    - КРАСНОЯРСКАЯ Ж.Д.
                                СТАНЦ. ПРИПИСКИ 89180 - ЗЛОБИНО
                                ПОСТРОЕН 19 ДЕКАБРЯ  1988 Г. ЗАВОДОМ 27 АО `КВСЗ`
                                ПОСЛЕДНИЕ РЕМОНТЫ:
                                КАПИТАЛЬНЫЙ - 21 МАЯ      2010 Г. НА МСК Ж.Д. В 334 - ТУЛА-ВЧД
                                ДЕПОВСКОЙ   - 04 АПРЕЛЯ   2009 Г. НА ВСБ Ж.Д. В 651 - ТАЙШЕТ-ВЧД
                                СВЕДЕНИЯ О ЗАЯВЛЕННОМ ПРОДЛЕНИИ СРОКА СЛУЖБЫ ИЗ 1354:
                                8107 21 МАЯ 2010 Г. НА 7 ЛЕТ ПО ТЕХ.РЕШЕНИЮ (ДО 2017 Г.)
                                СВЕДЕНИЯ ОБ УТВЕРЖДЕННОМ ПРОДЛЕНИИ СРОКА СЛУЖБЫ:
                                ПО ТЕХ.РЕШЕНИЮ (ДО 01 АПРЕЛЯ 2017 Г.)
                                СЛЕД.РЕМОНТ: 21 МАЯ      2012 Г. ДЕПОВСКОЙ
                                ГВЦ ОАО `РЖД` СПРАВКА 2612. СРЕДА 27 ОКТЯБРЯ 2010 Г. 16:51
                                ВАГОН 53777983  СОБСТВЕННИК РОССИЯ (СОБСТВЕННЫЙ ВАГОН) `
                                ПРЕДПРИЯТИЕ 880246  ЗАО `ПЦЦ РЕЙЛ`
                                ДОРОГА ПРИПИСКИ 88    - КРАСНОЯРСКАЯ Ж.Д.
                                СТАНЦ. ПРИПИСКИ 89180 - ЗЛОБИНО
                                ПОСТРОЕН 19 ДЕКАБРЯ  1988 Г. ЗАВОДОМ 27 АО `КВСЗ`
                                ПОСЛЕДНИЕ РЕМОНТЫ:
                                КАПИТАЛЬНЫЙ - 21 МАЯ      2010 Г. НА МСК Ж.Д. В 334 - ТУЛА-ВЧД
                                ДЕПОВСКОЙ   - 04 АПРЕЛЯ   2009 Г. НА ВСБ Ж.Д. В 651 - ТАЙШЕТ-ВЧД
                                СВЕДЕНИЯ О ЗАЯВЛЕННОМ ПРОДЛЕНИИ СРОКА СЛУЖБЫ ИЗ 1354:
                                8107 21 МАЯ 2010 Г. НА 7 ЛЕТ ПО ТЕХ.РЕШЕНИЮ (ДО 2017 Г.)
                                СВЕДЕНИЯ ОБ УТВЕРЖДЕННОМ ПРОДЛЕНИИ СРОКА СЛУЖБЫ:
                                ПО ТЕХ.РЕШЕНИЮ (ДО 01 АПРЕЛЯ 2017 Г.)
                                СЛЕД.РЕМОНТ: 21 МАЯ      2012 Г. ДЕПОВСКОЙ
                            </p>
                        </div>
                        <YMaps>
                            <div className="request-info__map-container">
                                <Map
                                    defaultState={{ center: [55.998212, 92.952887], zoom: 16 }}
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