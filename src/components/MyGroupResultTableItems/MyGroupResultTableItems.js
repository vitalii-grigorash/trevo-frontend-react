import React, { useState } from 'react';

function MyGroupResultTableItems(props) {

    const {
        groupNumber,
        groupName,
        vagonsValue,
    } = props;

    const [isGroupOptionsOpened, setGroupOptionsOpened] = useState(false);

    function handleGroupOptionsOpen () {
        if (isGroupOptionsOpened) {
            setGroupOptionsOpened(false);
        } else {
            setGroupOptionsOpened(true);
        }
    }

    return (
        <div className="my-group-result-table-items__info-container">
            <div className={`my-group-result-table-items__info-expand-icon ${isGroupOptionsOpened && 'my-group-result-table-items__info-expand-icon_active'}`} onClick={handleGroupOptionsOpen} />
            <p className="my-group-result-table-items__info-group-number">{groupNumber}</p>
            <p className="my-group-result-table-items__info-group-name">{groupName}</p>
            <p className="my-group-result-table-items__info-vagons-value">{vagonsValue}</p>
            <p className="my-group-result-table-items__info-expand-text" onClick={handleGroupOptionsOpen}>{isGroupOptionsOpened ? ('Свернуть') : ('Развернуть')}</p>
            <div className="my-group-result-table-items__info-settings-icon" />
            {isGroupOptionsOpened && (
                <div className="table-items-options">
                    <div className="table-items-options__links-container">
                        <p className="table-items-options__link">Список вагонов</p>
                        <p className="table-items-options__link">Добавить вагоны</p>
                        <p className="table-items-options__link">Удалить вагоны</p>
                        <p className="table-items-options__link">Заменить вагоны</p>
                    </div>
                </div>
            )}
        </div>
    );

}

export default MyGroupResultTableItems;