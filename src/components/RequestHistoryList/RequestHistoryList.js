import React, { useState, useEffect } from 'react';

function RequestHistoryList(props) {

    const {
        date,
        id,
        request,
        params,
        status,
        handleShowHistoryList,
        removeHistoryListRequest,
        urlTypeForDownload
    } = props;

    const showStatus = `${status === 'done' ? 'Выполнен' : 'В обработке'}`
    const statusStyles = `${status === 'done' ? 'request-history-list__status' : 'request-history-list__status request-history-list__status_processing'}`
    const [isOptionsShow, setOptionsShow] = useState(false);
    const [currentRow, setCurrentRow] = useState(0);
    const [isParams, setParams] = useState([]);
    const allParams = isParams;
    const paramsPerRow = 1;
    const paramsToRender = allParams.slice(0, (currentRow + 1) * paramsPerRow);
    const isMoreParams = paramsToRender.length !== allParams.length;

    useEffect(() => {
        if (params === null) {
            setParams([]);
        } else {
            setParams(params);
        }
    }, [params])

    function handleShowMore() {
        setCurrentRow(currentRow + allParams.length);
    }

    function handleCollapseParams() {
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
                {paramsToRender.map((param) => (
                    <div key={param.paramId} className="request-history-list__param-container">
                        <p className="request-history-list__key">{param.name}:</p>
                        <p className="request-history-list__val">{param.value}</p>
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
                <a href={`http://evote65-vm.dltc.spbu.ru:5555/operational/${urlTypeForDownload}/request/download/${id}`} target="_blank" rel="noreferrer">
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