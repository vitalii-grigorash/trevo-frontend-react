import React, { useState } from 'react';

function GroupList(props) {

    const {
        carriageGroups,
        onSearchGroupClick,
    } = props;

    const [isGroupSelectContainerOpen, setGroupSelectContainerOpen] = useState(false);
    const [groupName, setGroupName] = useState('Выберите группу');
    const [groupId, setGroupId] = useState('');
    const [isGroupSelected, setGroupSelected] = useState(false);

    const selectData = (groupName, groupId) => {
        setGroupName(groupName);
        setGroupSelected(true);
        setGroupId(groupId);
    }

    function onSearchButtonClick () {
        onSearchGroupClick(groupId);
    }

    function handleGroupSelectContainerOpen() {
        if (isGroupSelectContainerOpen) {
            setGroupSelectContainerOpen(false);
        } else {
            setGroupSelectContainerOpen(true);
        }
    }

    return (
        <div className="group-list">
            <div className="group-list__main-search-container">
                <p className="group-list__heading">Список групп</p>
                <div className="group-list__search-container">
                    <div className="group-list__select-group-container" onClick={handleGroupSelectContainerOpen}>
                        <p className={`group-list__select-group-text ${isGroupSelected && 'group-list__select-group-text_active'}`}>{groupName}</p>
                        <div className="group-list__select-group-arrow" />
                        {isGroupSelectContainerOpen && (
                            <div className="group-list__group-select-container">
                                {carriageGroups.length === 0 ? (
                                    <div className="group-list__group-select-group-container">
                                        <p className="group-list__group-select-group-text">Необходимо добавить группу</p>
                                    </div>
                                ) : (
                                    carriageGroups.map((data) => (
                                        <div key={data.id} className="group-list__group-select-group-container group-list__group-select-group-container_result" onClick={() => selectData(data.name, data.id)}>
                                            <p className="group-list__group-select-group-text">{data.name}</p>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                    <button className={`group-list__select-group-button ${isGroupSelected && 'group-list__select-group-button_active'}`} type="button" onClick={onSearchButtonClick}>поиск</button>
                </div>
            </div>
            <button className="group-list__remove-all" type="button">удалить все вагоны и группы</button>
        </div>
    );

}

export default GroupList;