import React, { useState } from 'react';
import MyListResultItem from '../MyListResultItem/MyListResultItem';

function MyListResult(props) {

  const {
    onCheckboxClick,
    carriageList
  } = props;

  const [isAllWagonsSelected, setAllWagonsSelected] = useState(false);

  function selectAllWagons() {
    if (isAllWagonsSelected) {
        setAllWagonsSelected(false);
    } else {
        setAllWagonsSelected(true);
    }
}

  return (
    <div className="my-list-result">
      <div className="my-list-result__heading-container">
        <div className="my-list-result__checkbox">
          <input
            id="AllWagonSelectCheckbox"
            type="checkbox"
            onClick={selectAllWagons}
          />
          <label htmlFor="AllWagonSelectCheckbox"></label>
        </div>
        <p className="my-list-result__heading-number">№ вагона</p>
        <p className="my-list-result__heading-name">Название группы</p>
        <p className="my-list-result__heading-date">Дата постановки</p>
        <p className="my-list-result__heading-description">Примечание</p>
      </div>
      {carriageList.map((data) => {
        return (
          <MyListResultItem
            key={data.id}
            id={data.id}
            groupId={data.groupId}
            carriageNumber={data.carriageNumber}
            groupName={data.groupName}
            trackingStartDate={data.trackingStartDate}
            description={data.description}
            onCheckboxClick={onCheckboxClick}
            isAllWagonsSelected={isAllWagonsSelected}
          />
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