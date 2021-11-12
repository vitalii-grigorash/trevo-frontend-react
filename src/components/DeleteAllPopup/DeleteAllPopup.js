import React from 'react';

function DeleteAllPopup(props) {

    const {
        isOpen,
        deleteAllCarriagesAndGroups,
        onClose
    } = props;

    function handleOverlayClose(evt) {
        if ((evt.target).classList.contains('delete-all-popup_opened')) {
            onClose();
        }
    }

    return (
        <div className={`delete-all-popup ${isOpen && 'delete-all-popup_opened'}`} onClick={handleOverlayClose}>
            <div className="delete-all-popup__confirmation-container">
                <div className="delete-all-popup__confirmation-trash-icon" />
                <h2 className="delete-all-popup__confirmation-question">Удалить все вагоны и группы?</h2>
                <p className="delete-all-popup__confirmation-description">Вы действительно хотите удалить все вагоны и группы? Восстановить их будет невозможно.</p>
                <div className="delete-all-popup__buttons-container">
                    <button className="delete-all-popup__button-cancel" onClick={onClose}>отмена</button>
                    <button className="delete-all-popup__button-delete" onClick={deleteAllCarriagesAndGroups}>удалить</button>
                </div>
            </div>
        </div>
    );

}

export default DeleteAllPopup;