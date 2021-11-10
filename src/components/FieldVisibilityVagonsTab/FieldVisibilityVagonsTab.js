import React, { useState } from 'react';
import FieldVisibilityTable from '../FieldVisibilityTable/FieldVisibilityTable';
import VisibilityAndTableData from '../../utils/VisibilityAndTableData.json';

function FieldVisibilityVagonsTab() {

    // const [carriageData, setCarriageData] = useState({});
    // const [carriageDislocation, setCarriageDislocation] = useState({});

    // useEffect(() => {
    //     setCarriageData(VisibilityAndTableData.carriageData);
    //     setCarriageDislocation(VisibilityAndTableData.carriageDislocation);
    //     console.log('useEffect');
    // }, [])

    const [isAllCheckboxesSelected, setAllCheckboxesSelected] = useState(false);

    function selectAllCheckboxes() {
        if (isAllCheckboxesSelected) {
          setAllCheckboxesSelected(false);
        } else {
          setAllCheckboxesSelected(true);
        }
      }

    return (
        <div className="field-visibility-vagons-tab">
            <div className="field-visibility-vagons-tab__select-all-checkbox-container">
                <div className="field-visibility-vagons-tab__select-all-checkbox">
                    <input
                        id="selectAll"
                        type="checkbox"
                        onChange={selectAllCheckboxes}
                        checked={isAllCheckboxesSelected}
                    />
                    <label htmlFor="selectAll"></label>
                </div>
                <p className="field-visibility-vagons-tab__select-all-checkbox-text">Выбрать все</p>
            </div>
            <div className="field-visibility-vagons-tab__all-checkboxes-main-container">
                <FieldVisibilityTable
                    data={VisibilityAndTableData.carriageData}
                    isAllCheckboxesSelected={isAllCheckboxesSelected}
                />
                <FieldVisibilityTable
                    data={VisibilityAndTableData.carriageDislocation}
                    isAllCheckboxesSelected={isAllCheckboxesSelected}
                />
                <FieldVisibilityTable
                    data={VisibilityAndTableData.carriageTechnicalCondition}
                    isAllCheckboxesSelected={isAllCheckboxesSelected}
                />
                <FieldVisibilityTable
                    data={VisibilityAndTableData.carriageDataSmall}
                    isAllCheckboxesSelected={isAllCheckboxesSelected}
                />
                <FieldVisibilityTable
                    data={VisibilityAndTableData.carriageRepairs}
                    isAllCheckboxesSelected={isAllCheckboxesSelected}
                />
            </div>
        </div>
    );

}

export default FieldVisibilityVagonsTab;