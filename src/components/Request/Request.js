import React, { useState } from 'react';
import RequestList from '../../utils/RequestList.json';

function Request(props) {

    const {
        heading,
        handleOpenRequestList,
        isRequestListOpen
    } = props;

    const [price, setPrice] = useState('0');
    const [request, setRequest] = useState('Выберите запрос');
    const [options, setOptions] = useState([]);
    const [isRequestSelected, setRequestSelected] = useState(false);
    const [isOptionsShow, setOptionsShow] = useState(false);
    const [values, setValues] = useState({ val: [] });

    const resetFormInputs = () => {
        if (document.getElementById("form")) {
            document.getElementById("form").reset();
            setValues({ val: [] });
        }
    }

    const selectRequest = (request, price, options) => {
        setPrice(price)
        setRequest(request)
        setRequestSelected(true);
        setOptionsShow(true);
        setOptions(options);
        resetFormInputs();
    }

    const sendRequest = () => {
        console.log(request, price);
        console.log(values.val);
        resetFormInputs();
    }

    function handleChange(evt) {
        let vals = [...values.val];
        vals[this] = evt.target.value;
        setValues({ val: vals });
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
                            {RequestList.map((data, index) => (
                                <div key={index} className="reques__list-container" onClick={() => selectRequest(data.request, data.price, data.options)}>
                                    <p className="reques__list-text">{data.request} {data.result ? `(${data.result})` : ''}</p>
                                </div>
                            ))}
                        </div>
                    }
                </div>
                {isOptionsShow &&
                    <form id="form" className="request__options-container">
                        {options.map((data, index) => (
                            <div key={index} className="request__option-container">
                                <span className="request__option-span">{data.span}</span>
                                <input
                                    className="request__option-input"
                                    type="text"
                                    placeholder={data.placeholder}
                                    onChange={handleChange.bind(index)}
                                />
                            </div>
                        ))}
                    </form>
                }
                <button type="submit" className="request__submit-button" onClick={sendRequest}>Запросить</button>
            </div>
        </div>
    );

}

export default Request;