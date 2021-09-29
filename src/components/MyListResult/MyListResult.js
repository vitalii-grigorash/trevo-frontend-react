import React from 'react';
import MyListResultData from '../../utils/MyListResultData.json';

function MyListResult(props) {

  const {
    onCheckboxClick,
  } = props;

  return (
    <div className="my-list-result">
      <div className="my-list-result__heading-container">
        <input className="my-list-result__checkbox" type="checkbox" />
        <p className="my-list-result__heading-number">№ вагона</p>
        <p className="my-list-result__heading-name">Название группы</p>
        <p className="my-list-result__heading-date">Дата постановки</p>
        <p className="my-list-result__heading-description">Примечание</p>
      </div>
      {MyListResultData.map((data, index) => {
        return (
          <div key={index} className="my-list-result__info-container">
            <input 
              className="my-list-result__checkbox" 
              type="checkbox"
              onClick={(e) => onCheckboxClick(e, e.target.checked, data.vagonNumber, data.groupName, data.date, data.description)}
            />
            <p className="my-list-result__number">{data.vagonNumber}</p>
            <p className="my-list-result__name">{data.groupName}</p>
            <p className="my-list-result__date">{data.date}</p>
            <p className="my-list-result__description">{data.description}</p>
            <div className="my-list-result__menu-icon" />
          </div>
        )
      })}
      <div className="my-list-result__bottom-container">
        <div className="my-list-result__sort-result-container">
          <p className="my-list-result__sort-result-text">Показать: 10</p>
          <div className="my-list-result__sort-result-arrow" />
        </div>
        <p className="my-list-result__sort-result-pages">1-4 из 4</p>
        <div className="my-list-result__sort-result-arrows-container">
          <div className="my-list-result__sort-result-arrow-prev" />
          <div className="my-list-result__sort-result-arrow-next" />
        </div>
      </div>
    </div>
  );

}

export default MyListResult;