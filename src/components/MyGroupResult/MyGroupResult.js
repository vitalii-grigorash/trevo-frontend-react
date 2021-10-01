import React from 'react';
import MyGroupResultData from '../../utils/MyGroupResultData.json';
import MyGroupResultTableItems from '../MyGroupResultTableItems/MyGroupResultTableItems';

function MyGroupResult() {

    return (
        <div className="my-group-result">
            <div className="my-group-result__heading-container">
                <p className="my-group-result__heading-group-number">№ группы</p>
                <p className="my-group-result__heading-group-name">Название группы</p>
                <p className="my-group-result__heading-vagons-value">Количество вагонов</p>
            </div>
            {MyGroupResultData.map((data, index) => {
                return <MyGroupResultTableItems
                    key={index}
                    groupNumber={data.groupNumber}
                    groupName={data.groupName}
                    vagonsValue={data.vagonsValue}
                />
            })}
            <div className="my-group-result__bottom-container">
                <div className="my-group-result__sort-result-container">
                    <p className="my-group-result__sort-result-text">Показать: 10</p>
                    <div className="my-group-result__sort-result-arrow" />
                </div>
                <p className="my-group-result__sort-result-pages">1-4 из 4</p>
                <div className="my-group-result__sort-result-arrows-container">
                    <div className="my-group-result__sort-result-arrow-prev" />
                    <div className="my-group-result__sort-result-arrow-next" />
                </div>
            </div>
        </div>
    );

}

export default MyGroupResult;