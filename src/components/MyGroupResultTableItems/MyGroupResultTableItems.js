import React, { useState } from 'react';
import VagonsList from '../VagonsList/VagonsList';

function MyGroupResultTableItems(props) {

    const {
        groupNumber,
        groupName,
        vagonsValue,
        vagonsList,
        isMyGroupResultTableItemsOpened,
        handleMyGroupResultTableItemsOpened
    } = props;

    const [isGroupOptionsOpened, setGroupOptionsOpened] = useState(false);
    const [isVagonsListOpened, setVagonsListOpened] = useState(true);
    const [isVagonsAddOpened, setVagonsAddOpened] = useState(false);
    const [isVagonsRemoveOpened, setVagonsRemoveOpened] = useState(false);
    const [isVagonsChangeOpened, setVagonsChangeOpened] = useState(false);
    const [isChangeBackground, setChangeBackground] = useState(false);

    function handleChangeBackgroundColor() {
        if (!isChangeBackground) {
            handleMyGroupResultTableItemsOpened();
            setChangeBackground(true);
        } else {
            setChangeBackground(false);
        }
    }

    function handleGroupOptionsOpen() {
        if (isGroupOptionsOpened) {
            setGroupOptionsOpened(false);
            handleChangeBackgroundColor();
        } else {
            setGroupOptionsOpened(true);
            handleChangeBackgroundColor();
        }
    }

    function handleVagonsListOpen() {
        setVagonsListOpened(true);
        setVagonsAddOpened(false);
        setVagonsRemoveOpened(false);
        setVagonsChangeOpened(false);
    }

    function handleVagonsAddOpen() {
        setVagonsAddOpened(true);
        setVagonsListOpened(false);
        setVagonsRemoveOpened(false);
        setVagonsChangeOpened(false);
    }

    function handleVagonsRemoveOpen() {
        setVagonsRemoveOpened(true);
        setVagonsAddOpened(false);
        setVagonsListOpened(false);
        setVagonsChangeOpened(false);
    }

    function handleVagonsChangeOpen() {
        setVagonsChangeOpened(true);
        setVagonsRemoveOpened(false);
        setVagonsAddOpened(false);
        setVagonsListOpened(false);
    }

    return (
        <div className={`my-group-result-table-items ${isChangeBackground ? 'my-group-result-table-items_opened' : isMyGroupResultTableItemsOpened && ''}`}>
            <div className='my-group-result-table-items__container'>
                <div className={`my-group-result-table-items__expand-icon ${isGroupOptionsOpened && 'my-group-result-table-items__expand-icon_active'}`} onClick={handleGroupOptionsOpen} />
                <p className="my-group-result-table-items__group-number">{groupNumber}</p>
                <p className="my-group-result-table-items__group-name">{groupName}</p>
                <p className="my-group-result-table-items__vagons-value">{vagonsValue}</p>
                <p className="my-group-result-table-items__expand-text" onClick={handleGroupOptionsOpen}>{isGroupOptionsOpened ? ('Свернуть') : ('Развернуть')}</p>
                <div className="my-group-result-table-items__settings-icon" />
            </div>
            {isGroupOptionsOpened && (
                <div className="table-items">
                    <div className="table-items__links-container">
                        <p className={`table-items__link ${isVagonsListOpened && 'table-items__link_active'}`} onClick={handleVagonsListOpen}>Список вагонов</p>
                        <p className={`table-items__link ${isVagonsAddOpened && 'table-items__link_active'}`} onClick={handleVagonsAddOpen}>Добавить вагоны</p>
                        <p className={`table-items__link ${isVagonsRemoveOpened && 'table-items__link_active'}`} onClick={handleVagonsRemoveOpen}>Удалить вагоны</p>
                        <p className={`table-items__link ${isVagonsChangeOpened && 'table-items__link_active'}`} onClick={handleVagonsChangeOpen}>Заменить вагоны</p>
                    </div>
                    {isVagonsListOpened && (
                        <div className="vagons-list-container">
                            <div className="vagons-list-container__heading">
                                <p className="vagons-list-container__vagon-number">№ вагона</p>
                                <p className="vagons-list-container__date">Дата постановки</p>
                                <p className="vagons-list-container__description">Примечание</p>
                            </div>
                            {vagonsList.map((list, index) => {
                                return <VagonsList
                                    key={index}
                                    vagonsNumber={list.vagonsNumber}
                                    vagonsDate={list.vagonsDate}
                                    vagonsDescription={list.vagonsDescription}
                                />
                            })}
                            <div className="vagons-list-container__bottom">
                                <p className="vagons-list-container__show">Показать: 10</p>
                                <div className="vagons-list-container__sort-optioms-icon" />
                                <p className="vagons-list-container__pages">1-4 из 4</p>
                                <div className="vagons-list-container__arrows-container">
                                    <div className="vagons-list-container__arrow-prev" />
                                    <div className="vagons-list-container__arrow-next" />
                                </div>
                            </div>
                        </div>
                    )}
                    {isVagonsAddOpened && (
                        <div className="vagons-action-container">
                            <p className="vagons-action-container__heading">Список вагонов</p>
                            <textarea className="vagons-action-container__textarea" type="text" />
                            <button className="vagons-action-container__button" type="button">добавить</button>
                        </div>
                    )}
                    {isVagonsRemoveOpened && (
                        <div className="vagons-action-container">
                            <p className="vagons-action-container__heading">Список вагонов</p>
                            <textarea className="vagons-action-container__textarea" type="text" />
                            <button className="vagons-action-container__button" type="button">удалить</button>
                        </div>
                    )}
                    {isVagonsChangeOpened && (
                        <div className="vagons-action-container">
                            <p className="vagons-action-container__heading">Список вагонов</p>
                            <textarea className="vagons-action-container__textarea" type="text" />
                            <button className="vagons-action-container__button" type="button">заменить</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );

}

export default MyGroupResultTableItems;