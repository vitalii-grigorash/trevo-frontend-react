import React, { useState } from 'react';

function VagonsAdd(props) {

    const {
        groupsData,
        closeVagonsAdd
    } = props;

    const [isGroupSelectOpen, setGroupSelectOpen] = useState(false);
    const [groupName, setGroupName] = useState('Выберите группу');
    const [isGroupSelected, setGroupSelected] = useState(false);
    const [isCreateGroupActive, setCreateGroupActive] = useState(false);
    const [isNoteActive, setNoteActive] = useState(false);

    const selectData = (groupName) => {
        setGroupName(groupName);
        setGroupSelected(true);
    }

    function handleGroupSelectOpen() {
        if (isGroupSelectOpen) {
            setGroupSelectOpen(false);
        } else {
            setGroupSelectOpen(true);
        }
    }

    function handleCreateGroupClick() {
        if (isCreateGroupActive) {
            setCreateGroupActive(false);
        } else {
            setCreateGroupActive(true);
        }
    }

    function handleNoteClick() {
        if (isNoteActive) {
            setNoteActive(false);
        } else {
            setNoteActive(true);
        }
    }

    return (
        <div className="vagons-add">
            <div className="vagons-add__close-icon" onClick={closeVagonsAdd}/>
            <p className="vagons-add__heading">Добавить вагоны</p>
            <span className="vagons-add__span">Список вагонов</span>
            <textarea className="vagons-add__textarea" type="text" />
            <span className="vagons-add__span">Добавить в группу</span>
            <div className="vagons-add__group-add" onClick={handleGroupSelectOpen}>
                <p className={`vagons-add__select-group-text ${isGroupSelected && 'vagons-add__select-group-text_active'}`}>{groupName}</p>
                <div className="vagons-add__select-group-arrow" />
                {isGroupSelectOpen && (
                    <div className="vagons-add__group-select-container">
                        {groupsData.length === 0 ? (
                            <div className="vagons-add__group-select-group-container">
                                <p className="vagons-add__group-select-group-text">Необходимо добавить группу</p>
                            </div>
                        ) : (
                            groupsData.map((data, index) => (
                                <div key={index} className="vagons-add__group-select-group-container vagons-add__group-select-group-container_result" onClick={() => selectData(data.groupName)}>
                                    <p className="vagons-add__group-select-group-text">{data.groupName}</p>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
            <div className="vagons-add__create-group" onClick={handleCreateGroupClick}>
                <div className={`vagons-add__create-group-icon ${isCreateGroupActive && 'vagons-add__create-group-icon_active'}`} />
                <p className={`vagons-add__create-group-text ${isCreateGroupActive && 'vagons-add__create-group-text_active'}`}>создать группу</p>
            </div>
            {isCreateGroupActive && (
                <>
                    <span className="vagons-add__span">Название</span>
                    <input className="vagons-add__create-group-input" type="text" />
                    <div className="vagons-add__note-container" onClick={handleNoteClick}>
                        <p className="vagons-add__note-text">Примечание к группе</p>
                        <div className="vagons-add__note-arrow" />
                    </div>
                    {isNoteActive && (
                        <input className="vagons-add__create-group-input" type="text" />
                    )}
                </>
            )}
            <button className="vagons-add__add-button" type="button">добавить</button>
        </div>
    );

}

export default VagonsAdd;