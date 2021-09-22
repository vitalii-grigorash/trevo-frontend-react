import React, { useState } from 'react';
import GroupList from '../GroupList/GroupList';

function MyListVagonsTab() {

    const [groupsData, setGroupsData] = useState([
        {
            groupName: 'Группа 4546',
            vagonsValue : '5 634'
        },
        {
            groupName: 'Группа 34356',
            vagonsValue : '35 634'
        },
        {
            groupName: 'Группа 426',
            vagonsValue : '34'
        },
        {
            groupName: 'Группа 678765',
            vagonsValue : '355'
        },
    ]);

    return (
        <div className="my-list-vagons-tab">
            <GroupList
                groupsData={groupsData}
            />
        </div>
    );

}

export default MyListVagonsTab;