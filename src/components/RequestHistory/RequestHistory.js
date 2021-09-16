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

        <div className="request-history__list-container">
          <p className="request-history__list-date">2018/11/29 22:00:11</p>
          <p className="request-history__list-request">Данные по литым деталям тележки и колесным парам</p>
          <p className="request-history__list-param">123455687</p>
          <p className="request-history__list-status">Выполнен</p>
          <div className="request-history__list-actions-container">
            <div className="request-history__list-action-download" />
            <div className="request-history__list-action-print" />
          </div>
          <div className="request-history__list-options" />
        </div>

        <div className="request-history__list-container">
          <p className="request-history__list-date">2018/11/29 22:00:11</p>
          <p className="request-history__list-request">Данные по литым деталям тележки и колесным парам</p>
          <p className="request-history__list-param">123455687</p>
          <p className="request-history__list-status">Выполнен</p>
          <div className="request-history__list-actions-container">
            <div className="request-history__list-action-download" />
            <div className="request-history__list-action-print" />
          </div>
          <div className="request-history__list-options" />
        </div>

        <div className="request-history__list-container">
          <p className="request-history__list-date">2018/11/29 22:00:11</p>
          <p className="request-history__list-request">Данные по литым деталям тележки и колесным парам</p>
          <p className="request-history__list-param">123455687</p>
          <p className="request-history__list-status">Выполнен</p>
          <div className="request-history__list-actions-container">
            <div className="request-history__list-action-download" />
            <div className="request-history__list-action-print" />
          </div>
          <div className="request-history__list-options" />
        </div>

      </div>
    </div>
  );

}

export default RequestHistory;