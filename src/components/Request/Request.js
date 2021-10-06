import React, { useState } from 'react';

function Request(props) {

    const {
        heading,
        handleOpenRequestList,
        isRequestListOpen,
        addRequest,
        requesList
    } = props;

    const [requestTypeId, setrequestTypeId] = useState('');
    const [request, setRequest] = useState('Выберите запрос');
    const [price, setPrice] = useState('0');
    const [params, setParams] = useState([]);
    const [isRequestSelected, setRequestSelected] = useState(false);
    const [isOptionsShow, setOptionsShow] = useState(false);
    const [values, setValues] = useState({});
    const [isButtonEnable, setButtonEnable] = useState(false);

    const resetFormInputs = () => {
        if (document.getElementById("form")) {
            document.getElementById("form").reset();
            setValues({});
        }
    }

    const selectRequest = (id, name, price, params) => {
        setrequestTypeId(id);
        setRequest(name);
        setPrice(price);
        setParams(params);
        setRequestSelected(true);
        setOptionsShow(true);
        setButtonEnable(true);
        resetFormInputs();
    }

    const sendRequest = () => {
        const requestData = {
            requestTypeId: requestTypeId,
            params: values,
        }
        addRequest(requestData, request);
        resetFormInputs();
    }

    function handleChange(evt, paramId) {
        Object.assign(values, {[paramId]: evt.target.value});
    }

    return (
        <div className="request">
            <div className="request__main-container">
                <div className="request__heading-container">
                    <h2 className="request__heading">{heading}</h2>
                    <p className="request__price">Стоимость: {price} &#8381;</p>
                </div>
                <p className="request__select-heading">Список запросов</p>
                <div className="request__select-container" onClick={handleOpenRequestList}>
                    <p className={`request__select-text ${isRequestSelected && 'request__select-text_selected'}`}>{request}</p>
                    <div className="request__select-arrow" />
                    {isRequestListOpen &&
                        <div className="request__lists-container">
                            {requesList.map((data) => (
                                <div key={data.id} className="reques__list-container" onClick={() => selectRequest(data.id, data.name, data.price, data.params)}>
                                    <p className="reques__list-text">{data.name}</p>
                                </div>
                            ))}
                        </div>
                    }
                </div>
                {isOptionsShow &&
                    <form id="form" className="request__options-container">
                        {params.map((data, index) => (
                            <div key={index} className="request__option-container">
                                <span className="request__option-span">{data.name}</span>
                                <input
                                    className="request__option-input"
                                    type="text"
                                    placeholder="Введите параметр"
                                    onChange={(e) => handleChange(e, data.paramId)}
                                />
                            </div>
                        ))}
                    </form>
                }
                {isButtonEnable ? (
                    <button type="submit" className="request__submit-button" onClick={sendRequest}>запросить</button>
                ) : (
                    <button type="submit" disabled className="request__submit-button request__submit-button_disabled">запросить</button>
                )}
            </div>
        </div>
    );

}

export default Request;