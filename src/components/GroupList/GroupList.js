import React, { useState } from 'react';

function GroupList(props) {

    const {
        groupsData
    } = props;

    const [isGroupSelectContainerOpen, setGroupSelectContainerOpen] = useState(false);
    const [groupName, setGroupName] = useState('Выберите группу');
    const [isGroupSelected, setGroupSelected] = useState(false);

    const selectData = (groupName) => {
        setGroupName(groupName);
        setGroupSelected(true);
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
                                {groupsData.length === 0 ? (
                                    <div className="group-list__group-select-group-container">
                                        <p className="group-list__group-select-group-text">Необходимо добавить группу</p>
                                    </div>
                                ) : (
                                    groupsData.map((data, index) => (
                                        <div key={index} className="group-list__group-select-group-container group-list__group-select-group-container_result" onClick={() => selectData(data.groupName)}>
                                            <p className="group-list__group-select-group-text">{data.groupName}</p>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                    <button className={`group-list__select-group-button ${isGroupSelected && 'group-list__select-group-button_active'}`} type="button">поиск</button>
                </div>
            </div>
            <button className="group-list__file-download-button" type="button">загрузить из файла</button>
        </div>
    );

}

export default GroupList;