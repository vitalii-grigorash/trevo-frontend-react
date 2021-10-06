import React from 'react';

function RequestHistoryList(props) {

    const {
        date,
        id,
        request,
        params,
        status,
        handleShowHistoryList
    } = props;

    const showStatus = `${status === 'done' ? 'Выполнен' : 'В обработке'}`
    const statusStyles = `${status === 'done' ? 'request-history-list__status' : 'request-history-list__status request-history-list__status_processing'}`

    return (

        <div className="request-history-list">
            <p className="request-history-list__date">{date}</p>
            <p className="request-history-list__request" onClick={(evt) => handleShowHistoryList(id)}>{request}</p>
            <div className="request-history-list__params-container">
                {Object.entries(params).map(([ key, val ]) => (
                    <p key={key} className="request-history-list__param">{val}</p>
                ))}
            </div>
            <p className={statusStyles}>{showStatus}</p>
            <div className="request-history-list__actions-container">
                <div className="request-history-list__action-download" />
                <div className="request-history-list__action-print" />
            </div>
            <div className="request-history-list__options" />
        </div>

    );

}

export default RequestHistoryList;