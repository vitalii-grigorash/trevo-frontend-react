import React, { useState } from 'react';

function RequestHistoryList(props) {

    const {
        date,
        id,
        request,
        params,
        status,
        handleShowHistoryList,
        removeHistoryListRequest
    } = props;

    const showStatus = `${status === 'done' ? 'Выполнен' : 'В обработке'}`
    const statusStyles = `${status === 'done' ? 'request-history-list__status' : 'request-history-list__status request-history-list__status_processing'}`
    const [isOptionsShow, setOptionsShow] = useState(false);
    const [currentRow, setCurrentRow] = useState(0);
    const allParams = Object.entries(params);
    const paramsPerRow = 1;
    const paramsToRender = allParams.slice(0, (currentRow + 1) * paramsPerRow);
    const isMoreParams = paramsToRender.length !== allParams.length;

    function handleShowMore() {
        setCurrentRow(currentRow + allParams.length);
    }

    function handleCollapseParams () {
        setCurrentRow(currentRow - allParams.length);
    }

    function handleOptionsShow() {
        if (isOptionsShow) {
            setOptionsShow(false);
        } else {
            setOptionsShow(true);
        }
    }

    return (

        <div className="request-history-list">
            <p className="request-history-list__date">{date}</p>
            <p className="request-history-list__request" onClick={(evt) => handleShowHistoryList(id)}>{request}</p>
            <div className="request-history-list__params-container">
                {paramsToRender.map(([key, val]) => (
                    <div key={key} className="request-history-list__param-container">
                        <p className="request-history-list__key">{key}:</p>
                        <p className="request-history-list__val">{val}</p>
                    </div>
                ))}
                {isMoreParams === true ?
                    (
                        <p className="request-history-list__show-more" onClick={handleShowMore}>Развернуть</p>
                    ) : (
                        <>
                            {allParams.length > 1 && (
                                <p className="request-history-list__show-more" onClick={handleCollapseParams}>Свернуть</p>
                            )}
                        </>
                    )
                }
            </div>
            <p className={statusStyles}>{showStatus}</p>
            <div className="request-history-list__actions-container">
                <a href={`http://evote65-vm.dltc.spbu.ru:5555/operational/station/request/download/${id}`} target="_blank" rel="noreferrer">
                    <div className="request-history-list__action-download" />
                </a>
            </div>
            <div className="request-history-list__options-button" onClick={handleOptionsShow}>
                {isOptionsShow && (
                    <div className="request-history-list__options-container">
                        <p className="request-history-list__options" onClick={(evt) => removeHistoryListRequest(id)}>Удалить запрос</p>
                    </div>
                )}
            </div>
        </div>

    );

}

export default RequestHistoryList;