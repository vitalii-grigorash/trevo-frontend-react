import React from 'react';

function RequestHistory() {

  return (
    <div className="request-history">
      <div className="request-history__main-container">
        <div className="request-history__heading-container">
          <h2 className="request-history__heading">Запросы</h2>
          <div className="request-history__search-container">
            <input className="request-history__search-input" type="text" placeholder="Номер станции" />
            <div className="request-history__search-icon" />
          </div>
        </div>

        <div className="request-history__reqests-heading">
          <div className="request-history__date-container">
            <p className="request-history__date">Дата запроса</p>
            <div className="request-history__date-sort-icon" />
          </div>
          <p className="request-history__request">Запрос</p>
          <p className="request-history__param">Параметр</p>
          <p className="request-history__status">Статус</p>
          <p className="request-history__actions">Действия</p>
        </div>

      </div>
    </div>
  );

}

export default RequestHistory;