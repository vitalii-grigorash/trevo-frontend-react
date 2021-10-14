import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import VagonsSettingTab from '../VagonsSettingTab/VagonsSettingTab';
import ContainersSettingTab from '../ContainersSettingTab/ContainersSettingTab';
import StationsSettingTab from '../StationsSettingTab/StationsSettingTab';
import TrainsSettingTab from '../TrainsSettingTab/TrainsSettingTab';

function Settings(props) {

  const {
    carriageList,
    getAllCarriage,
    deleteCarriages,
    onSearchGroupClick,
    selectedGroupCarriages,
    isSearchButtonClicked,
    postNewCarriages,
    onCheckboxChekedArray,
    selectAllWagons,
    isAllWagonsSelected
  } = props;

  const [isVagonsTabOpen, setVagonsTabOpen] = useState(true);
  const [isContainersTabOpen, setContainersTabOpen] = useState(false);
  const [isStationsTabOpen, setStationsTabOpen] = useState(false);
  const [isTrainsTabOpen, setTrainsTabOpen] = useState(false);

  function handleVagonsTabOpen() {
    setVagonsTabOpen(true);
    setContainersTabOpen(false);
    setStationsTabOpen(false);
    setTrainsTabOpen(false);
  }

  function handleContainersTabOpen() {
    setContainersTabOpen(true);
    setVagonsTabOpen(false);
    setStationsTabOpen(false);
    setTrainsTabOpen(false);
  }

  function handleStationsTabOpen() {
    setStationsTabOpen(true);
    setContainersTabOpen(false);
    setVagonsTabOpen(false);
    setTrainsTabOpen(false);
  }

  function handleTrainsTabOpen() {
    setTrainsTabOpen(true);
    setStationsTabOpen(false);
    setContainersTabOpen(false);
    setVagonsTabOpen(false);
  }

  return (
    <div className="settings">
      <Helmet
        title='TREVO: Настройки'
      />
      <div className="settings-content">
        <h2 className="settings-content__heading">Настройки</h2>
        <div className="settings-content__nav-container">
          <p className={`settings-content__nav-link ${isVagonsTabOpen && 'settings-content__nav-link_active'}`} onClick={handleVagonsTabOpen}>вагоны (132 258)</p>
          <p className={`settings-content__nav-link ${isContainersTabOpen && 'settings-content__nav-link_active'}`} onClick={handleContainersTabOpen}>контейнеры (125 545)</p>
          <p className={`settings-content__nav-link ${isStationsTabOpen && 'settings-content__nav-link_active'}`} onClick={handleStationsTabOpen}>станции (198)</p>
          <p className={`settings-content__nav-link ${isTrainsTabOpen && 'settings-content__nav-link_active'}`} onClick={handleTrainsTabOpen}>поезда (4 235)</p>
        </div>

        {isVagonsTabOpen && <VagonsSettingTab 
          carriageList={carriageList}
          getAllCarriage={getAllCarriage}
          deleteCarriages={deleteCarriages}
          onSearchGroupClick={onSearchGroupClick}
          selectedGroupCarriages={selectedGroupCarriages}
          isSearchButtonClicked={isSearchButtonClicked}
          postNewCarriages={postNewCarriages}
          onCheckboxChekedArray={onCheckboxChekedArray}
          selectAllWagons={selectAllWagons}
          isAllWagonsSelected={isAllWagonsSelected}
        />}
        {isContainersTabOpen && <ContainersSettingTab />}
        {isStationsTabOpen && <StationsSettingTab />}
        {isTrainsTabOpen && <TrainsSettingTab />}

      </div>
    </div>
  );

}

export default Settings;