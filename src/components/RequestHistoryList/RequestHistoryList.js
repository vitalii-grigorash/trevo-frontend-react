import React from 'react';

function RequestHistoryList(props) {

    const {
        date,
        request,
        options,
        status,
        handleShowPreloader,
    } = props;

    return (

        <div className="request-history-list">
            <p className="request-history-list__date">{date}</p>
            <p className="request-history-list__request" onClick={(evt) => handleShowPreloader(request)}>{request}</p>
            <div className="request-history-list__params-container">
                {options.map((option, index) => (
                    <p key={index} className="request-history-list__param">{option}</p>
                ))}
            </div>
            <p className="request-history-list__status">{status}</p>
            <div className="request-history-list__actions-container">
                <div className="request-history-list__action-download" />
                <div className="request-history-list__action-print" />
            </div>
            <div className="request-history-list__options" />
        </div>

    );

}

export default RequestHistoryList;