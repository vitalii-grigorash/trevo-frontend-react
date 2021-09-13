import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function SideBar() {

    const { pathname } = useLocation();

    const [isCardFileOpen, setCardFileOpen] = useState(false);
    const [isOperationalOpen, setOperationalOpen] = useState(true);
    const [isRegulatedOpen, setRegulatedOpen] = useState(false);

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
                <h1 className="side-bar__logo">trevo</h1>
                <div className="side-bar__links-container">
                    <div className={`side-bar__main-link-container ${isCardFileOpen && 'side-bar__main-link-container_active'}`} onClick={toggCardFileOpen}>
                        <p className={`side-bar__main-link-text ${isCardFileOpen && 'side-bar__main-link-text_open'}`}>Картотека</p>
                        <div className={`side-bar__main-link-arrow ${isCardFileOpen && 'side-bar__main-link-arrow_open'}`} />
                    </div>
                    {isCardFileOpen &&
                        <>
                            <div className="side-bar__link-container">
                                <div className="side-bar__link-icon side-bar__link-icon_flag" />
                                <Link to={'/'} className="side-bar__link">Общие запросы</Link>
                            </div>
                            <div className="side-bar__link-container">
                                <div className="side-bar__link-icon side-bar__link-icon_tool" />
                                <Link to={'/'} className="side-bar__link">Ремонты</Link>
                            </div>
                            <div className="side-bar__link-container">
                                <div className="side-bar__link-icon side-bar__link-icon_settings" />
                                <Link to={'/'} className="side-bar__link">Детали</Link>
                            </div>
                            <div className="side-bar__link-container">
                                <div className="side-bar__link-icon side-bar__link-icon_info" />
                                <Link to={'/'} className="side-bar__link">Паспорта</Link>
                            </div>
                            <div className="side-bar__link-container">
                                <div className="side-bar__link-icon side-bar__link-icon_random" />
                                <Link to={'/'} className="side-bar__link">Пробеги</Link>
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
                            <div className={pathname === '/' ? 'side-bar__link-container side-bar__link-container_active' : 'side-bar__link-container'}>
                                <div className="side-bar__link-icon side-bar__link-icon_home" />
                                <Link to={'/'} className={pathname === '/' ? 'side-bar__link side-bar__link_active' : 'side-bar__link'}>Станции</Link>
                            </div>
                            <div className="side-bar__link-container">
                                <div className="side-bar__link-icon side-bar__link-icon_train" />
                                <Link to={'/'} className="side-bar__link">Поезда</Link>
                            </div>
                            <div className="side-bar__link-container">
                                <div className="side-bar__link-icon side-bar__link-icon_vagon" />
                                <Link to={'/'} className="side-bar__link">Вагоны</Link>
                            </div>
                            <div className="side-bar__link-container">
                                <div className="side-bar__link-icon side-bar__link-icon_container" />
                                <Link to={'/'} className="side-bar__link">Контейнеры</Link>
                            </div>
                        </>
                    }
                </div>
                <div className="side-bar__links-container">
                    <div className={`side-bar__main-link-container ${isRegulatedOpen && 'side-bar__main-link-container_active'}`} onClick={toggleRegulatedOpen}>
                        <p className={`side-bar__main-link-text side-bar__main-link-text_regulated ${isRegulatedOpen && 'side-bar__main-link-text_open'}`}>Регламентированное слежение</p>
                        <div className={`side-bar__main-link-arrow ${isRegulatedOpen && 'side-bar__main-link-arrow_open'}`} />
                    </div>
                    {isRegulatedOpen &&
                        <>
                            <div className="side-bar__link-container">
                                <div className="side-bar__link-icon side-bar__link-icon_vagon" />
                                <Link to={'/'} className="side-bar__link">Дислокация</Link>
                            </div>
                            <div className="side-bar__link-container">
                                <div className="side-bar__link-icon side-bar__link-icon_container" />
                                <Link to={'/'} className="side-bar__link">Настройки</Link>
                            </div>
                        </>
                    }
                </div>
                <Link to={'/'} className="side-bar__link side-bar__link_bottom">Финансовая панель</Link>
                <Link to={'/'} className="side-bar__link side-bar__link_bottom">Администрирование</Link>
            </nav>
        </section>
    );
}

export default SideBar;