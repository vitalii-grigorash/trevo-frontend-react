import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

function SideBar () {

    const { pathname } = useLocation();

    const [isCardFileOpen, setCardFileOpen] = useState(false);
    const [isOperationalOpen, setOperationalOpen] = useState(false);
    const [isRegulatedOpen, setRegulatedOpen] = useState(false);
    const history = useHistory();

    function onLogoClick () {
        history.push('/');
    }

    useEffect(() => {
        if (
            pathname === '/stations' ||
            pathname === '/trains' ||
            pathname === '/сarriages' ||
            pathname === '/containers'
        ) {
            setOperationalOpen(true);
        } else if (
            pathname === '/dislocation' ||
            pathname === '/settings'
        ) {
            setRegulatedOpen(true);
        } else if (
            pathname === '/general-inquiries' ||
            pathname === '/repairs' ||
            pathname === '/details' ||
            pathname === '/passports' ||
            pathname === '/runs'
        ) {
            setCardFileOpen(true);
        }
    },[pathname]);

    const toggCardFileOpen = () => {
        if (isCardFileOpen) {
            setCardFileOpen(false)
        } else {
            setCardFileOpen(true);
        }
    }

    const toggleOperationalOpen = () => {
        if (isOperationalOpen) {
            setOperationalOpen(false)
        } else {
            setOperationalOpen(true);
        }
    }

    const toggleRegulatedOpen = () => {
        if (isRegulatedOpen) {
            setRegulatedOpen(false)
        } else {
            setRegulatedOpen(true);
        }
    }

    return (
        <section className="side-bar">
            <nav className="side-bar__main-container">
                <div className="side-bar__logo" onClick={onLogoClick}/>
                <div className="side-bar__links-container">
                    <div className={`side-bar__main-link-container ${isCardFileOpen && 'side-bar__main-link-container_active'}`} onClick={toggCardFileOpen}>
                        <p className={`side-bar__main-link-text ${isCardFileOpen && 'side-bar__main-link-text_open'}`}>Картотека</p>
                        <div className={`side-bar__main-link-arrow ${isCardFileOpen && 'side-bar__main-link-arrow_open'}`} />
                    </div>
                    {isCardFileOpen &&
                        <>
                            <div className={pathname === '/general-inquiries' ? 'side-bar__link-container side-bar__link-container_active' : 'side-bar__link-container'}>
                                <div className="side-bar__link-icon side-bar__link-icon_flag" />
                                <Link to={'/general-inquiries'} className={pathname === '/general-inquiries' ? 'side-bar__link side-bar__link_active' : 'side-bar__link'}>Общие запросы</Link>
                            </div>
                            <div className={pathname === '/repairs' ? 'side-bar__link-container side-bar__link-container_active' : 'side-bar__link-container'}>
                                <div className="side-bar__link-icon side-bar__link-icon_tool" />
                                <Link to={'/repairs'} className={pathname === '/repairs' ? 'side-bar__link side-bar__link_active' : 'side-bar__link'}>Ремонты</Link>
                            </div>
                            <div className={pathname === '/details' ? 'side-bar__link-container side-bar__link-container_active' : 'side-bar__link-container'}>
                                <div className="side-bar__link-icon side-bar__link-icon_settings" />
                                <Link to={'/details'} className={pathname === '/details' ? 'side-bar__link side-bar__link_active' : 'side-bar__link'}>Детали</Link>
                            </div>
                            <div className={pathname === '/passports' ? 'side-bar__link-container side-bar__link-container_active' : 'side-bar__link-container'}>
                                <div className="side-bar__link-icon side-bar__link-icon_info" />
                                <Link to={'/passports'} className={pathname === '/passports' ? 'side-bar__link side-bar__link_active' : 'side-bar__link'}>Паспорта</Link>
                            </div>
                            <div className={pathname === '/runs' ? 'side-bar__link-container side-bar__link-container_active' : 'side-bar__link-container'}>
                                <div className="side-bar__link-icon side-bar__link-icon_random" />
                                <Link to={'/runs'} className={pathname === '/runs' ? 'side-bar__link side-bar__link_active' : 'side-bar__link'}>Пробеги</Link>
                            </div>
                        </>
                    }
                </div>
                <div className="side-bar__links-container">
                    <div className={`side-bar__main-link-container ${isOperationalOpen && 'side-bar__main-link-container_active'}`} onClick={toggleOperationalOpen}>
                        <p className={`side-bar__main-link-text ${isOperationalOpen && 'side-bar__main-link-text_open'}`}>Оперативное слежение</p>
                        <div className={`side-bar__main-link-arrow ${isOperationalOpen && 'side-bar__main-link-arrow_open'}`} />
                    </div>
                    {isOperationalOpen &&
                        <>
                            <div className={pathname === '/stations' ? 'side-bar__link-container side-bar__link-container_active' : 'side-bar__link-container'}>
                                <div className="side-bar__link-icon side-bar__link-icon_home" />
                                <Link to={'/stations'} className={pathname === '/stations' ? 'side-bar__link side-bar__link_active' : 'side-bar__link'}>Станции</Link>
                            </div>
                            <div className={pathname === '/trains' ? 'side-bar__link-container side-bar__link-container_active' : 'side-bar__link-container'}>
                                <div className="side-bar__link-icon side-bar__link-icon_train" />
                                <Link to={'/trains'} className={pathname === '/trains' ? 'side-bar__link side-bar__link_active' : 'side-bar__link'}>Поезда</Link>
                            </div>
                            <div className={pathname === '/сarriages' ? 'side-bar__link-container side-bar__link-container_active' : 'side-bar__link-container'}>
                                <div className="side-bar__link-icon side-bar__link-icon_vagon" />
                                <Link to={'/сarriages'} className={pathname === '/сarriages' ? 'side-bar__link side-bar__link_active' : 'side-bar__link'}>Вагоны</Link>
                            </div>
                            <div className={pathname === '/containers' ? 'side-bar__link-container side-bar__link-container_active' : 'side-bar__link-container'}>
                                <div className="side-bar__link-icon side-bar__link-icon_container" />
                                <Link to={'/containers'} className={pathname === '/containers' ? 'side-bar__link side-bar__link_active' : 'side-bar__link'}>Контейнеры</Link>
                            </div>
                        </>
                    }
                </div>
                <div className="side-bar__links-container">
                    <div className={`side-bar__main-link-container ${isRegulatedOpen && 'side-bar__main-link-container_active'}`} onClick={toggleRegulatedOpen}>
                        <p className={`side-bar__main-link-text side-bar__main-link-text_regulated ${isRegulatedOpen && 'side-bar__main-link-text_regulated-open'}`}>Регламентированное слежение</p>
                        <div className={`side-bar__main-link-arrow ${isRegulatedOpen && 'side-bar__main-link-arrow_open'}`} />
                    </div>
                    {isRegulatedOpen &&
                        <>
                            <div className={pathname === '/dislocation' ? 'side-bar__link-container side-bar__link-container_active' : 'side-bar__link-container'}>
                                <div className="side-bar__link-icon side-bar__link-icon_dislocation" />
                                <Link to={'/dislocation'} className={pathname === '/dislocation' ? 'side-bar__link side-bar__link_active' : 'side-bar__link'}>Дислокация</Link>
                            </div>
                            <div className={pathname === '/settings' ? 'side-bar__link-container side-bar__link-container_active' : 'side-bar__link-container'}>
                                <div className="side-bar__link-icon side-bar__link-icon_regulated-settings" />
                                <Link to={'/settings'} className={pathname === '/settings' ? 'side-bar__link side-bar__link_active' : 'side-bar__link'}>Настройки</Link>
                            </div>
                        </>
                    }
                </div>
                <Link to={'/financial-panel'} className={pathname === '/financial-panel' ? 'side-bar__link-bottom side-bar__link-bottom_active' : 'side-bar__link-bottom'}>Финансовая панель</Link>
                <Link to={'/administration'} className={pathname === '/administration' ? 'side-bar__link-bottom side-bar__link-bottom_active' : 'side-bar__link-bottom'}>Администрирование</Link>
                <Link to={'/personal-account'} className={pathname === '/personal-account' ? 'side-bar__link-bottom side-bar__link-bottom_active' : 'side-bar__link-bottom'}>Личный кабинет</Link>
            </nav>
        </section>
    );
}

export default SideBar;