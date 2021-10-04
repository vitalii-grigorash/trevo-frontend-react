import React from 'react';

function VagonsList(props) {

    const {
        vagonsNumber,
        vagonsDate,
        vagonsDescription
    } = props;

    return (
        <div className="vagons-list">
            <p className="vagons-list__number">{vagonsNumber}</p>
            <p className="vagons-list__date">{vagonsDate}</p>
            <p className="vagons-list__description">{vagonsDescription}</p>
        </div>
    );

}

export default VagonsList;