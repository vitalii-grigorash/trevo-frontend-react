import React, { useState } from 'react';

function VagonsAdd(props) {

    const {
        carriageGroups,
        closeVagonsAdd,
        postNewCarriages
    } = props;

    const [isGroupSelectOpen, setGroupSelectOpen] = useState(false);
    const [groupName, setGroupName] = useState('Выберите группу');
    const [groupId, setGroupId] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [isGroupSelected, setGroupSelected] = useState(false);
    const [carriageTextareaValue, setCarriageTextareaValue] = useState('');
    const [textareaErrorText, setTextareaErrorText] = useState('');
    const [groupSelectErrorText, setGroupSelectErrorText] = useState('');

    function handleCarriageTextareaChange(evt) {
        setCarriageTextareaValue(evt.target.value);
    }

    function validateFormAndSend() {
        if (carriageTextareaValue === '') {
            setTextareaErrorText('Необходимо добавить вагоны');
        } else if (groupId === '') {
            setGroupSelectErrorText('Необходимо выбрать группу');
        } else {
            addCarriages();
        }
    }

    function addCarriages() {
        const carriagesArray = carriageTextareaValue.trim().split(/(?:\n| |,)+/);
        const carriagesToAdd = carriagesArray.map((carriage) => {
            return {
                carriageNumber: carriage,
                description: groupDescription
            }
        })
        postNewCarriages(groupId, carriagesToAdd);
        setCarriageTextareaValue('');
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
        <div className="vagons-add">
            <div className="vagons-add__close-icon" onClick={closeVagonsAdd} />
            <p className="vagons-add__heading">Добавить вагоны</p>
            <span className="vagons-add__span">Список вагонов</span>
            <textarea
                className="vagons-add__textarea"
                type="text"
                onChange={handleCarriageTextareaChange}
                value={carriageTextareaValue}
            />
            <span className="vagons-add__textarea-error">{textareaErrorText}</span>
            <span className="vagons-add__group-add-span">Добавить в группу</span>
            <div className="vagons-add__group-add" onClick={handleGroupSelectOpen}>
                <p className={`vagons-add__select-group-text ${isGroupSelected && 'vagons-add__select-group-text_active'}`}>{groupName}</p>
                <div className="vagons-add__select-group-arrow" />
                {isGroupSelectOpen && (
                    <div className="vagons-add__group-select-container">
                        {carriageGroups.length === 0 ? (
                            <div className="vagons-add__group-select-group-container">
                                <p className="vagons-add__group-select-group-text">Необходимо добавить группу</p>
                            </div>
                        ) : (
                            carriageGroups.map((data) => (
                                <div key={data.id} className="vagons-add__group-select-group-container vagons-add__group-select-group-container_result" onClick={() => selectData(data.name, data.id, data.description)}>
                                    <p className="vagons-add__group-select-group-text">{data.name}</p>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
            <span className="vagons-add__group-select-error">{groupSelectErrorText}</span>
            <button className="vagons-add__add-button" type="button" onClick={validateFormAndSend}>добавить</button>
        </div>
    );

}

export default VagonsAdd;