import React from 'react';

function DeleteGroupPopup(props) {

    const {
        isOpen,
        onClose,
        deleteCarriageGroups
    } = props;

    function handleOverlayClose(evt) {
        if ((evt.target).classList.contains('delete-group-popup_opened')) {
            onClose();
        }
    }

    return (
        <div className={`delete-group-popup ${isOpen && 'delete-group-popup_opened'}`} onClick={handleOverlayClose}>
            <div className="delete-group-popup__confirmation-container">
                <div className="delete-group-popup__confirmation-red-line" />
                <div className="delete-group-popup__confirmation-trash-icon" />
                <h2 className="delete-group-popup__confirmation-question">Удалить группу</h2>
                <p className="delete-group-popup__confirmation-description">Вы действительно хотите удалить группу? Восстановить ее будет невозможно.</p>
                <div className="delete-group-popup__buttons-container">
                    <button className="delete-group-popup__button-cancel" onClick={onClose}>отмена</button>
                    <button className="delete-group-popup__button-delete" onClick={deleteCarriageGroups}>удалить</button>
                </div>
            </div>
        </div>
    );

}

export default DeleteGroupPopup;