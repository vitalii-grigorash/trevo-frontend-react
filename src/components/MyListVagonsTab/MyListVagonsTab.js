import React, { useState } from 'react';
import GroupList from '../GroupList/GroupList';
import VagonsAdd from '../VagonsAdd/VagonsAdd';

function MyListVagonsTab() {

    const [groupsData, setGroupsData] = useState([
        {
            groupName: 'Группа 4546',
            vagonsValue: '5 634'
        },
        {
            groupName: 'Группа 34356',
            vagonsValue: '35 634'
        },
        {
            groupName: 'Группа 426',
            vagonsValue: '34'
        },
        {
            groupName: 'Группа 678765',
            vagonsValue: '355'
        },
    ]);

    const [isVagonsAddActive, setVagonsAddActive] = useState(false);

    function handleAddVagonsClick() {
        if (isVagonsAddActive) {
            setVagonsAddActive(false);
        } else {
            setVagonsAddActive(true);
        }
    }

    return (
        <div className="my-list-vagons-tab">
            <GroupList
                groupsData={groupsData}
            />
            <div className="my-list-vagons-tab__add-vagons" onClick={handleAddVagonsClick}>
                <div className={`my-list-vagons-tab__add-vagons-icon ${isVagonsAddActive && 'my-list-vagons-tab__add-vagons-icon_active'}`} />
                <p className={`my-list-vagons-tab__add-vagons-text ${isVagonsAddActive && 'my-list-vagons-tab__add-vagons-text_active'}`}>добавить вагоны</p>
            </div>
            {isVagonsAddActive && (
                <VagonsAdd
                    groupsData={groupsData}
                />
            )}
        </div>
    );

}

export default MyListVagonsTab;