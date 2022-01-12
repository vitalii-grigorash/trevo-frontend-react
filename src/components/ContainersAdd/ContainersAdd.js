import React, { useState } from 'react';

function ContainersAdd(props) {

    const {
        containersGroups,
        closeContainersAdd,
        postNewContainers
    } = props;

    const [isGroupSelectOpen, setGroupSelectOpen] = useState(false);
    const [groupName, setGroupName] = useState('Выберите группу');
    const [groupId, setGroupId] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [isGroupSelected, setGroupSelected] = useState(false);
    const [containersTextareaValue, setContainersTextareaValue] = useState('');
    const [textareaErrorText, setTextareaErrorText] = useState('');
    const [groupSelectErrorText, setGroupSelectErrorText] = useState('');

    function handleContainersTextareaChange(evt) {
        setContainersTextareaValue(evt.target.value);
    }

    function validateFormAndSend() {
        if (containersTextareaValue === '') {
            setTextareaErrorText('Необходимо добавить контейнеры');
        } else if (groupId === '') {
            setGroupSelectErrorText('Необходимо выбрать группу');
        } else {
            addContainers();
        }
    }

    function addContainers() {
        const containersArray = containersTextareaValue.trim().split(/(?:\n| |,)+/);
        const containersToAdd = containersArray.map((container) => {
            return {
                containersNumber: container,
                description: groupDescription
            }
        })
        postNewContainers(groupId, containersToAdd);
        setContainersTextareaValue('');
        setGroupName('Выберите группу');
        setGroupSelected(false);
        setGroupId('');
        setTextareaErrorText('');
        setGroupSelectErrorText('');
    }

    const selectData = (groupName, groupId, groupDescription) => {
        setGroupName(groupName);
        setGroupId(groupId);
        setGroupDescription(groupDescription);
        setGroupSelected(true);
    }

    function handleGroupSelectOpen() {
        if (isGroupSelectOpen) {
            setGroupSelectOpen(false);
        } else {
            setGroupSelectOpen(true);
        }
    }

    return (
        <div className="containers-add">
            <div className="containers-add__close-icon" onClick={closeContainersAdd} />
            <p className="containers-add__heading">Добавить контейнеры</p>
            <span className="containers-add__span">Список контейнеров</span>
            <textarea
                className="containers-add__textarea"
                type="text"
                onChange={handleContainersTextareaChange}
                value={containersTextareaValue}
            />
            <span className="containers-add__textarea-error">{textareaErrorText}</span>
            <span className="containers-add__group-add-span">Добавить в группу</span>
            <div className="containers-add__group-add" onClick={handleGroupSelectOpen}>
                <p className={`containers-add__select-group-text ${isGroupSelected && 'containers-add__select-group-text_active'}`}>{groupName}</p>
                <div className="containers-add__select-group-arrow" />
                {isGroupSelectOpen && (
                    <div className="containers-add__group-select-container">
                        {containersGroups === null ? (
                            <div className="containers-add__group-select-group-container">
                                <p className="containers-add__group-select-group-text">Необходимо добавить группу</p>
                            </div>
                        ) : (
                            containersGroups.map((data) => (
                                <div key={data.id} className="containers-add__group-select-group-container containers-add__group-select-group-container_result" onClick={() => selectData(data.name, data.id, data.description)}>
                                    <p className="containers-add__group-select-group-text">{data.name}</p>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
            <span className="containers-add__group-select-error">{groupSelectErrorText}</span>
            <button className="containers-add__add-button" type="button" onClick={validateFormAndSend}>добавить</button>
        </div>
    );
}

export default ContainersAdd;
