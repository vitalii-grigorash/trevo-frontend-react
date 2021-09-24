import React, { useState } from 'react';

function VagonsAdd(props) {

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
        <div className="vagons-add">
            <div className="vagons-add__close-icon" />
            <p className="vagons-add__heading">Добавить вагоны</p>
            <span className="vagons-add__span">Список вагонов</span>
            <textarea className="vagons-add__textarea" type="text" />
            <span className="vagons-add__span">Добавить в группу</span>
            <div className="vagons-add__group-add" onClick={handleGroupSelectContainerOpen}>
                <p className={`group-list__select-group-text ${isGroupSelected && 'group-list__select-group-text_active'}`}>{groupName}</p>
                <div className="group-list__select-group-arrow" />
                {isGroupSelectContainerOpen && (
                    <div className="vagons-add__group-select-container">
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
            <span className="vagons-add__span">Создать группу</span>
            <input className="vagons-add__create-group-input" type="text" />
            <span className="vagons-add__span">Примечание</span>
            <input className="vagons-add__create-group-input" type="text" />
            <button className="vagons-add__add-button" type="button">добавить</button>
        </div>
    );

}

export default VagonsAdd;