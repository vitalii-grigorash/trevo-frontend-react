import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import VagonsSettingTab from '../VagonsSettingTab/VagonsSettingTab';
import ContainersSettingTab from '../ContainersSettingTab/ContainersSettingTab';
import StationsSettingTab from '../StationsSettingTab/StationsSettingTab';
import TrainsSettingTab from '../TrainsSettingTab/TrainsSettingTab';

function Settings() {

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
          <p className={`settings-content__nav-link ${isVagonsTabOpen && 'settings-content__nav-link_active'}`} onClick={handleVagonsTabOpen}>Вагоны (132 258)</p>
          <p className={`settings-content__nav-link ${isContainersTabOpen && 'settings-content__nav-link_active'}`} onClick={handleContainersTabOpen}>Контейнеры (125 545)</p>
          <p className={`settings-content__nav-link ${isStationsTabOpen && 'settings-content__nav-link_active'}`} onClick={handleStationsTabOpen}>Станции (198)</p>
          <p className={`settings-content__nav-link ${isTrainsTabOpen && 'settings-content__nav-link_active'}`} onClick={handleTrainsTabOpen}>Поезда (4 235)</p>
        </div>

        {isVagonsTabOpen && <VagonsSettingTab />}
        {isContainersTabOpen && <ContainersSettingTab />}
        {isStationsTabOpen && <StationsSettingTab />}
        {isTrainsTabOpen && <TrainsSettingTab />}

      </div>
    </div>
  );

}

export default Settings;