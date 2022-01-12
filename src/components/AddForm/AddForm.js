import React, { useState } from 'react';
import { Validation } from '../../utils/Validation';

function AddForm(props) {

    const {
        formHeading,
        firstSelect,
        firstContainerSpan,
        secondSelect,
        secondContainerSpan,
        firstDefault,
        secondDefault,
        sendForm
    } = props;

    const [isFirstSelectContainerOpen, setFirstSelectContainerOpen] = useState(false);
    const [isFirstSelected, setFirstSelected] = useState(false);
    const [first, setFirst] = useState(firstDefault);
    const [isSecondSelectContainerOpen, setSecondSelectContainerOpen] = useState(false);
    const [isSecondSelected, setSecondSelected] = useState(false);
    const [second, setSecond] = useState(secondDefault);

    const email = Validation();
    const theme = Validation();
    const text = Validation();
    const description = Validation();

    function onFirstSelectClick(value) {
        setFirst(value);
        setFirstSelected(true);
    }

    function onSecondSelectClick(value) {
        setSecond(value);
        setSecondSelected(true);
    }

    function handleShowFirstSelectContainer() {
        if (isFirstSelectContainerOpen) {
            setFirstSelectContainerOpen(false);
        } else {
            setFirstSelectContainerOpen(true);
            setSecondSelectContainerOpen(false);
        }
    }

    function handleShowSecondSelectContainer() {
        if (isSecondSelectContainerOpen) {
            setSecondSelectContainerOpen(false);
        } else {
            setSecondSelectContainerOpen(true);
            setFirstSelectContainerOpen(false);
        }
    }

    function onAddClick(evt) {
        evt.preventDefault();
        const sendData = {
            email: email.value,
            theme: theme.value,
            text: text.value,
            description: description.value,
            firstValue: first,
            secondValue: second
        }
        sendForm(sendData);
        email.setValue('');
        theme.setValue('');
        text.setValue('');
        description.setValue('');
        setFirst(firstDefault);
        setFirstSelected(false);
        setFirstSelectContainerOpen(false);
        setSecond(secondDefault);
        setSecondSelected(false);
        setSecondSelectContainerOpen(false);
    }

    return (
        <form className="add-form" onSubmit={onAddClick}>
            <p className="add-form__heading">{formHeading}</p>
            <div className="add-form__inputs-main-container">
                <div className="add-form__inputs-container">
                    <div className="add-form__input-container">
                        <span className="add-form__input-heading">Почта</span>
                        <input
                            type="email"
                            className="add-form__input"
                            id="email-input"
                            name="email"
                            value={email.value}
                            onChange={email.onChange}
                            placeholder="example@mail.com"
                            required
                        />
                        <span id="email-input" className="add-form__input-error">{email.errorMessage}</span>
                    </div>
                    <div className="add-form__input-container">
                        <span className="add-form__input-heading">Тема письма</span>
                        <input
                            type="text"
                            className="add-form__input"
                            id="theme-input"
                            name="theme"
                            value={theme.value}
                            onChange={theme.onChange}
                            minLength="2"
                            maxLength="50"
                            required
                        />
                        <span id="theme-input" className="add-form__input-error">{theme.errorMessage}</span>
                    </div>
                    <div className="add-form__input-container">
                        <span className="add-form__input-heading">Текст письма</span>
                        <input
                            type="text"
                            className="add-form__input"
                            id="text-input"
                            name="text"
                            value={text.value}
                            onChange={text.onChange}
                            minLength="2"
                            required
                        />
                        <span id="text-input" className="add-form__input-error">{text.errorMessage}</span>
                    </div>
                </div>
                <div className="add-form__inputs-container">
                    <div className="add-form__input-container">
                        <span className="add-form__input-heading">Комментарий</span>
                        <input
                            type="text"
                            className="add-form__input"
                            id="description-input"
                            name="description"
                            value={description.value}
                            onChange={description.onChange}
                            minLength="2"
                        />
                        <span id="description-input" className="add-form__input-error">{description.errorMessage}</span>
                    </div>
                    <div className="add-form__input-container">
                        <span className="add-form__input-heading">{firstContainerSpan}</span>
                        <div className="add-form__select-container" onClick={handleShowFirstSelectContainer}>
                            <p className={`add-form__select-text ${isFirstSelected && 'add-form__select-text_active'}`}>{first}</p>
                            <div className="add-form__select-icon" />
                            {isFirstSelectContainerOpen && (
                                <div className="add-form__select-value-container">
                                    {firstSelect.map((first, index) => (
                                        <div key={index} className="add-form__select-value-item-container" onClick={() => onFirstSelectClick(first)}>
                                            <p className="add-form__select-value-item">{first}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="add-form__input-container add-form__input-container_last">
                        <span className="add-form__input-heading">{secondContainerSpan}</span>
                        <div className="add-form__select-container" onClick={handleShowSecondSelectContainer}>
                            <p className={`add-form__select-text ${isSecondSelected && 'add-form__select-text_active'}`}>{second}</p>
                            <div className="add-form__select-icon" />
                            {isSecondSelectContainerOpen && (
                                <div className="add-form__select-value-container">
                                    {secondSelect.map((second, index) => (
                                        <div key={index} className="add-form__select-value-item-container" onClick={() => onSecondSelectClick(second)}>
                                            <p className="add-form__select-value-item">{second}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <button className="add-form__button" type="submit">добавить</button>
        </form>
    );
}

export default AddForm;