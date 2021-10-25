import React, { useState, useEffect } from 'react';
import SummaryDislocationCarriages from '../SummaryDislocationCarriages/SummaryDislocationCarriages';
import DislocationCarriages from '../DislocationCarriages/DislocationCarriages';
import PassportsCarriages from '../PassportsCarriages/PassportsCarriages';
import RepairsCarriages from '../RepairsCarriages/RepairsCarriages';
import RunsCarriages from '../RunsCarriages/RunsCarriages';
import InvoiceCarriages from '../InvoiceCarriages/InvoiceCarriages';
import DetailsCarriages from '../DetailsCarriages/DetailsCarriages';

function CarriagesDislocation(props) {

  const {
    carriageGroups,
    postNewCarriages,
    getCarriageGroups
  } = props;

  const [isSummaryDislocationCarriagesTabOpen, setSummaryDislocationCarriagesTabOpen] = useState(true);
  const [isDislocationCarriagesTabOpen, setDislocationCarriagesTabOpen] = useState(false);
  const [isPassportsCarriagesTabOpen, setPassportsCarriagesTabOpen] = useState(false);
  const [isRepairsCarriagesTabOpen, setRepairsCarriagesTabOpen] = useState(false);
  const [isRunsCarriagesTabOpen, setRunsCarriagesTabOpen] = useState(false);
  const [isInvoiceCarriagesTabOpen, setInvoiceCarriagesTabOpen] = useState(false);
  const [isDetailsCarriagesTabOpen, setDetailsCarriagesTabOpen] = useState(false);

  useEffect(() => {
    getCarriageGroups();
    // eslint-disable-next-line
  }, []);

  function handleSummaryDislocationCarriagesTabOpen() {
    setSummaryDislocationCarriagesTabOpen(true);
    setDislocationCarriagesTabOpen(false);
    setPassportsCarriagesTabOpen(false);
    setRepairsCarriagesTabOpen(false);
    setRunsCarriagesTabOpen(false);
    setInvoiceCarriagesTabOpen(false);
    setDetailsCarriagesTabOpen(false);
  }

  function handleDislocationCarriagesTabOpen() {
    setDislocationCarriagesTabOpen(true);
    setSummaryDislocationCarriagesTabOpen(false);
    setPassportsCarriagesTabOpen(false);
    setRepairsCarriagesTabOpen(false);
    setRunsCarriagesTabOpen(false);
    setInvoiceCarriagesTabOpen(false);
    setDetailsCarriagesTabOpen(false);
  }

  function handlePassportsCarriagesTabOpen() {
    setPassportsCarriagesTabOpen(true);
    setSummaryDislocationCarriagesTabOpen(false);
    setDislocationCarriagesTabOpen(false);
    setRepairsCarriagesTabOpen(false);
    setRunsCarriagesTabOpen(false);
    setInvoiceCarriagesTabOpen(false);
    setDetailsCarriagesTabOpen(false);
  }

  function handleRepairsCarriagesTabOpen() {
    setRepairsCarriagesTabOpen(true);
    setSummaryDislocationCarriagesTabOpen(false);
    setDislocationCarriagesTabOpen(false);
    setPassportsCarriagesTabOpen(false);
    setRunsCarriagesTabOpen(false);
    setInvoiceCarriagesTabOpen(false);
    setDetailsCarriagesTabOpen(false);
  }

  function handleRunsCarriagesTabOpen() {
    setRunsCarriagesTabOpen(true);
    setSummaryDislocationCarriagesTabOpen(false);
    setDislocationCarriagesTabOpen(false);
    setPassportsCarriagesTabOpen(false);
    setRepairsCarriagesTabOpen(false);
    setInvoiceCarriagesTabOpen(false);
    setDetailsCarriagesTabOpen(false);
  }

  function handleInvoiceCarriagesTabOpen() {
    setInvoiceCarriagesTabOpen(true);
    setSummaryDislocationCarriagesTabOpen(false);
    setDislocationCarriagesTabOpen(false);
    setPassportsCarriagesTabOpen(false);
    setRepairsCarriagesTabOpen(false);
    setRunsCarriagesTabOpen(false);
    setDetailsCarriagesTabOpen(false);
  }

  function handleDetailsCarriagesTabOpen() {
    setDetailsCarriagesTabOpen(true);
    setInvoiceCarriagesTabOpen(false);
    setSummaryDislocationCarriagesTabOpen(false);
    setDislocationCarriagesTabOpen(false);
    setPassportsCarriagesTabOpen(false);
    setRepairsCarriagesTabOpen(false);
    setRunsCarriagesTabOpen(false);
  }

  return (
    <div className="carriages-dislocation">
      <div className="carriages-dislocation__tabs-container">
        <div className={`carriages-dislocation__tab-container ${isSummaryDislocationCarriagesTabOpen && 'carriages-dislocation__tab-container_active'}`} onClick={handleSummaryDislocationCarriagesTabOpen}>
          <p className={`carriages-dislocation__tab ${isSummaryDislocationCarriagesTabOpen && 'carriages-dislocation__tab_active'}`}>Сводная дислокация</p>
        </div>
        <div className={`carriages-dislocation__tab-container ${isDislocationCarriagesTabOpen && 'carriages-dislocation__tab-container_active'}`} onClick={handleDislocationCarriagesTabOpen}>
          <p className={`carriages-dislocation__tab ${isDislocationCarriagesTabOpen && 'carriages-dislocation__tab_active'}`}>Дислокация</p>
        </div>
        <div className={`carriages-dislocation__tab-container ${isPassportsCarriagesTabOpen && 'carriages-dislocation__tab-container_active'}`} onClick={handlePassportsCarriagesTabOpen}>
          <p className={`carriages-dislocation__tab ${isPassportsCarriagesTabOpen && 'carriages-dislocation__tab_active'}`}>Паспорта</p>
        </div>
        <div className={`carriages-dislocation__tab-container ${isRepairsCarriagesTabOpen && 'carriages-dislocation__tab-container_active'}`} onClick={handleRepairsCarriagesTabOpen}>
          <p className={`carriages-dislocation__tab ${isRepairsCarriagesTabOpen && 'carriages-dislocation__tab_active'}`}>Ремонты</p>
        </div>
        <div className={`carriages-dislocation__tab-container ${isRunsCarriagesTabOpen && 'carriages-dislocation__tab-container_active'}`} onClick={handleRunsCarriagesTabOpen}>
          <p className={`carriages-dislocation__tab ${isRunsCarriagesTabOpen && 'carriages-dislocation__tab_active'}`}>Пробеги</p>
        </div>
        <div className={`carriages-dislocation__tab-container ${isInvoiceCarriagesTabOpen && 'carriages-dislocation__tab-container_active'}`} onClick={handleInvoiceCarriagesTabOpen}>
          <p className={`carriages-dislocation__tab ${isInvoiceCarriagesTabOpen && 'carriages-dislocation__tab_active'}`}>Накладные</p>
        </div>
        <div className={`carriages-dislocation__tab-container ${isDetailsCarriagesTabOpen && 'carriages-dislocation__tab-container_active'}`} onClick={handleDetailsCarriagesTabOpen}>
          <p className={`carriages-dislocation__tab ${isDetailsCarriagesTabOpen && 'carriages-dislocation__tab_active'}`}>Узлы и детали</p>
        </div>
      </div>
      {isSummaryDislocationCarriagesTabOpen && <SummaryDislocationCarriages
        carriageGroups={carriageGroups}
        postNewCarriages={postNewCarriages}
      />}
      {isDislocationCarriagesTabOpen && <DislocationCarriages />}
      {isPassportsCarriagesTabOpen && <PassportsCarriages />}
      {isRepairsCarriagesTabOpen && <RepairsCarriages />}
      {isRunsCarriagesTabOpen && <RunsCarriages />}
      {isInvoiceCarriagesTabOpen && <InvoiceCarriages />}
      {isDetailsCarriagesTabOpen && <DetailsCarriages />}
    </div>
  );

}

export default CarriagesDislocation;