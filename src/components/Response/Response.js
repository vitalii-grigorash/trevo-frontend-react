import React from 'react';
import RequestHistory from '../RequestHistory/RequestHistory';

function Response(props) {

  const {
    requestHistoryList,
  } = props;

  return (
    <div className="response">

      <RequestHistory
        requestHistoryList={requestHistoryList}
      />

    </div>
  );

}

export default Response;