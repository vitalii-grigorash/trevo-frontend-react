import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CarriagesDislocation from '../CarriagesDislocation/CarriagesDislocation';
import ContainersDislocation from '../ContainersDislocation/ContainersDislocation';
import StationsDislocation from '../StationsDislocation/StationsDislocation';
import TrainsDislocation from '../TrainsDislocation/TrainsDislocation';

function Dislocation(props) {

  const {
    carriageGroups,
    postNewCarriages,
    getCarriageGroups
  } = props;

  const [isCarriagesTabOpen, setCarriagesTabOpen] = useState(true);
  const [isContainersTabOpen, setContainersTabOpen] = useState(false);
  const [isStationsTabOpen, setStationsTabOpen] = useState(false);
  const [isTrainsTabOpen, setTrainsTabOpen] = useState(false);

  function handleCarriagesTabOpen() {
    setCarriagesTabOpen(true);
    setContainersTabOpen(false);
    setStationsTabOpen(false);
    setTrainsTabOpen(false);
  }

  function handleContainersTabOpen() {
    setContainersTabOpen(true);
    setCarriagesTabOpen(false);
    setStationsTabOpen(false);
    setTrainsTabOpen(false);
  }

  function handleStationsTabOpen() {
    setStationsTabOpen(true);
    setContainersTabOpen(false);
    setCarriagesTabOpen(false);
    setTrainsTabOpen(false);
  }

  function handleTrainsTabOpen() {
    setTrainsTabOpen(true);
    setStationsTabOpen(false);
    setContainersTabOpen(false);
    setCarriagesTabOpen(false);
  }

  return (
    <div className="dislocation">
      <Helmet
        title='TREVO: Дислокация'
      />
      <div className="dislocation-content">
        <h2 className="dislocation-content__heading">Дислокация</h2>
        <div className="dislocation-content__nav-container">
          <p className={`dislocation-content__nav-link ${isCarriagesTabOpen && 'dislocation-content__nav-link_active'}`} onClick={handleCarriagesTabOpen}>вагоны (132 258)</p>
          <p className={`dislocation-content__nav-link ${isContainersTabOpen && 'dislocation-content__nav-link_active'}`} onClick={handleContainersTabOpen}>контейнеры (125 545)</p>
          <p className={`dislocation-content__nav-link ${isStationsTabOpen && 'dislocation-content__nav-link_active'}`} onClick={handleStationsTabOpen}>станции (198)</p>
          <p className={`dislocation-content__nav-link ${isTrainsTabOpen && 'dislocation-content__nav-link_active'}`} onClick={handleTrainsTabOpen}>поезда (4 235)</p>
        </div>
        {isCarriagesTabOpen && <CarriagesDislocation
          carriageGroups={carriageGroups}
          postNewCarriages={postNewCarriages}
          getCarriageGroups={getCarriageGroups}
        />}
        {isContainersTabOpen && <ContainersDislocation />}
        {isStationsTabOpen && <StationsDislocation />}
        {isTrainsTabOpen && <TrainsDislocation />}
      </div>
    </div>
  );

}

export default Dislocation;