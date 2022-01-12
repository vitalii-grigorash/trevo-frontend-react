import React, { useState, useEffect } from 'react';
import { Validation } from '../../utils/Validation';
import StationsDislocationTable from '../StationsDislocationTable/StationsDislocationTable';
import StationsDislocationTableData from '../../utils/StationsDislocationTableData.json'; 

function StationsDislocation() {

  const [isOptionsOpen, setOptionsOpen] = useState(false);
  const [optionForSearch, setOptionForSearch] = useState('Подход вагонов');
  const [isOptionSelected, setOptionSelected] = useState(false);
  const [stationsSearchInputValue, setStationsSearchInputValue] = useState('');
  const [isButtonEnable, setButtonEnable] = useState(false);
  const [isStationsAddActive, setStationsAddActive] = useState(false);
  const [stationAddInputValue, setStationAddInputValue] = useState('');
  const [isAddButtonEnable, setAddButtonEnable] = useState(false);
  const [isEmailSendModalActive, setEmailSendModalActive] = useState(false);
  const [isFilterActive, setFilterActive] = useState(false);
  const [isConsigneesOpened, setConsigneesOpened] = useState(false);
  const [consignee, setConsignee] = useState('Выберите грузополучателя')
  const [isConsigneeActive, setConsigneeActive] = useState(false);
  const [isTypeOfCargoOpened, setTypeOfCargoOpened] = useState(false);
  const [typeOfCargo, setTypeOfCargo] = useState('Выберите род груза');
  const [isTypeOfCargoActive, setTypeOfCargoActive] = useState(false);
  const [isCargoOpened, setCargoOpened] = useState(false);
  const [cargo, setCargo] = useState('Выберите груз');
  const [isCargoActive, setCargoActive] = useState(false);
  const [isRollingStockOpened, setRollingStockOpened] = useState(false);
  const [rollingStock, setRollingStock] = useState('Выберите подвижной состав');
  const [isRollingStockActive, setRollingStockActive] = useState(false);
  const [tables, setTables] = useState({});
  const [isStationsDislicationTableActive, setStationsDislocationTableActive] = useState(false);
  const [stationsValue, setStationsValue] = useState('');
  const email = Validation();

  function getTablesForRender(data) {
    if (data === null) {
      setTables(null);
      setStationsDislocationTableActive(false);
      setStationsValue('0');
      return
    } else {
      setTables(data);
      const stationsLength = data.stationsData.columns.map((column) => column.data.length);
      setStationsValue(stationsLength[0]);
      setStationsDislocationTableActive(true);
    }
  }

  useEffect(() => {
    const data = StationsDislocationTableData;
    getTablesForRender(data);
  }, []);

  const rollingStocks = [
    'Цистерны',
    'Полувагоны',
    'Платформы',
    'Вагоны специального назначения',
    'Изометрические',
    'Цистерны',
    'Полувагоны',
    'Платформы',
    'Вагоны специального назначения',
    'Изометрические'
  ]

  function handleRollingStockOpened() {
    if (isRollingStockOpened) {
      setRollingStockOpened(false);
    } else {
      setConsigneesOpened(false);
      setTypeOfCargoOpened(false);
      setCargoOpened(false);
      setRollingStockOpened(true);
    }
  }

  function onRollingStockOptionClick(stock) {
    setRollingStock(stock);
    setRollingStockActive(true);
  }

  const cargos = [
    'Антрацит',
    'Брикеты буроугольные',
    'Полуантрацит',
    'Уголь пылевидный',
    'Уголь каменный',
    'Антрацит',
    'Брикеты буроугольные',
    'Полуантрацит',
    'Уголь пылевидный',
    'Уголь каменный'
  ]

  function handleCargoOpened() {
    if (isCargoOpened) {
      setCargoOpened(false);
    } else {
      setConsigneesOpened(false);
      setTypeOfCargoOpened(false);
      setRollingStockOpened(false);
      setCargoOpened(true);
    }
  }

  function onCargoOptionClick(cargo) {
    setCargo(cargo);
    setCargoActive(true);
  }

  const typeOfCargos = [
    'Каменный уголь',
    'Нефть и нефтепродукты',
    'Сланцы  горючие',
    'Руда железная и марганцевая',
    'Черные металлы',
    'Каменный уголь',
    'Нефть и нефтепродукты',
    'Сланцы  горючие',
    'Руда железная и марганцевая',
    'Черные металлы'
  ]

  function handleTypeOfCargoOpened() {
    if (isTypeOfCargoOpened) {
      setTypeOfCargoOpened(false);
    } else {
      setConsigneesOpened(false);
      setCargoOpened(false);
      setRollingStockOpened(false);
      setTypeOfCargoOpened(true);
    }
  }

  function onTypeOfCargoOptionClick(type) {
    setTypeOfCargo(type);
    setTypeOfCargoActive(true);
  }

  const consignees = [
    'ООО "ТМРП" (19724812)',
    'ООО "РАТВ" (99765497)',
    'ООО "ААСР" (44567456)',
    'ООО "КААВ" (88667754)',
    'ООО "ЛЛПР" (34563786)',
    'ООО "ТТМК" (88789878)',
    'ООО "ГГЛС" (44223354)',
    'ООО "ВВСА" (13243546)',
    'ООО "ППИС" (64534231)',
    'ООО "ТМНР" (24354657)'
  ]

  function handleConsigneesOpened() {
    if (isConsigneesOpened) {
      setConsigneesOpened(false);
    } else {
      setTypeOfCargoOpened(false);
      setCargoOpened(false);
      setRollingStockOpened(false);
      setConsigneesOpened(true);
    }
  }

  function onConsigneeOptionClick(consignee) {
    setConsignee(consignee);
    setConsigneeActive(true);
  }

  function handleOptionsOpen() {
    if (isOptionsOpen) {
      setOptionsOpen(false);
    } else {
      setOptionsOpen(true);
    }
  }

  function selectOption(value) {
    setOptionForSearch(value);
    setOptionSelected(true);
  }

  function handleSearchInputChange(evt) {
    setStationsSearchInputValue(evt.target.value);
    if (evt.target.value.trim() !== '') {
      setButtonEnable(true);
    } else {
      setButtonEnable(false);
    }
  }

  function onSearchButtonClick() {
    console.log(optionForSearch);
    console.log(stationsSearchInputValue);
    setStationsSearchInputValue('');
    setButtonEnable(false);
    setOptionForSearch('Подход вагонов');
    setOptionSelected(false);
  }

  function handleAddStationsClick() {
    if (isStationsAddActive) {
      setStationsAddActive(false);
      setStationAddInputValue('');
      setAddButtonEnable(false);
    } else {
      setStationsAddActive(true);
    }
  }

  function handleAddStationInputChange(evt) {
    setStationAddInputValue(evt.target.value);
    if (evt.target.value.trim() !== '') {
      setAddButtonEnable(true);
    } else {
      setAddButtonEnable(false);
    }
  }

  function onAddStationButtonClick() {
    console.log(stationAddInputValue);
    setStationAddInputValue('');
    setAddButtonEnable(false);
  }

  function tableFilterResetAll() {
    setConsigneesOpened(false);
    setConsignee('Выберите грузополучателя');
    setConsigneeActive(false);
    setTypeOfCargoOpened(false);
    setTypeOfCargo('Выберите род груза');
    setTypeOfCargoActive(false);
    setCargoOpened(false);
    setCargo('Выберите груз');
    setCargoActive(false);
    setRollingStockOpened(false);
    setRollingStock('Выберите подвижной состав');
    setRollingStockActive(false);
  }

  function handleShowEmailSendModal() {
    if (isEmailSendModalActive) {
      setEmailSendModalActive(false);
      email.setValue('');
    } else {
      tableFilterResetAll();
      setFilterActive(false);
      setEmailSendModalActive(true);
    }
  }

  function handleShowFilter() {
    if (isFilterActive) {
      setFilterActive(false);
      tableFilterResetAll();
    } else {
      email.setValue('');
      setEmailSendModalActive(false);
      setFilterActive(true);
    }
  }

  function onSendClick(evt) {
    evt.preventDefault();
    console.log(email.value)
    email.setValue('');
    handleShowEmailSendModal();
  }

  function onApplyFilterClick() {
    if (
      isConsigneeActive === true &&
      isTypeOfCargoActive === true &&
      isCargoActive === true &&
      isRollingStockActive === true
    ) {
      console.log(consignee);
      console.log(typeOfCargo);
      console.log(cargo);
      console.log(rollingStock);
      handleShowFilter();
    } else {
      console.log('Необходимо выбрать опции для применения фильтра');
    }
  }

  function onResetFilterClick() {
    tableFilterResetAll();
  }

  return (
    <div className="stations-dislocation">
      <div className="stations-dislocation__search-container">
        <div className="stations-dislocation__filter-container">
          <p className="stations-dislocation__filter-heading">Фильтр</p>
          <div className="stations-dislocation__filter" onClick={handleOptionsOpen}>
            <p className={`stations-dislocation__filter-value ${isOptionSelected && 'stations-dislocation__filter-value_selected'}`}>{optionForSearch}</p>
            <div className="stations-dislocation__filter-arrow" />
            <div className={`stations-dislocation__filter-options-container ${isOptionsOpen && 'stations-dislocation__filter-options-container_active'}`}>
              <div className="stations-dislocation__filter-option-container" onClick={() => selectOption('Подход вагонов')}>
                <p className="stations-dislocation__filter-option">Подход вагонов</p>
              </div>
              <div className="stations-dislocation__filter-option-container" onClick={() => selectOption('Отгрузка')}>
                <p className="stations-dislocation__filter-option">Отгрузка</p>
              </div>
              <div className="stations-dislocation__filter-option-container" onClick={() => selectOption('Наличие вагонов на станции')}>
                <p className="stations-dislocation__filter-option">Наличие вагонов на станции</p>
              </div>
            </div>
          </div>
        </div>
        <div className="stations-dislocation__search-stations-container">
          <p className="stations-dislocation__search-stations-heading">Поиск станции</p>
          <input
            type="text"
            className="stations-dislocation__search-stations-input"
            placeholder="Введите код станции"
            onChange={handleSearchInputChange}
            value={stationsSearchInputValue}
          />
        </div>
        {isButtonEnable ? (
          <button className="stations-dislocation__search-button" type="button" onClick={onSearchButtonClick}>поиск</button>
        ) : (
          <button className="stations-dislocation__search-button stations-dislocation__search-button_disabled" type="button">поиск</button>
        )}
      </div>
      <div className="stations-dislocation__add-station" onClick={handleAddStationsClick}>
        <div className={`stations-dislocation__add-station-icon ${isStationsAddActive && 'stations-dislocation__add-station-icon_active'}`} />
        <p className={`stations-dislocation__add-station-text ${isStationsAddActive && 'stations-dislocation__add-station-text_active'}`}>добавить станцию</p>
      </div>
      {isStationsAddActive && (
        <div className="stations-dislocation__station-add-container">
          <p className="stations-dislocation__station-add-heading">Добавить станцию</p>
          <span className="stations-dislocation__station-add-input-span">Код станции</span>
          <input
            type="text"
            className="stations-dislocation__station-add-input"
            onChange={handleAddStationInputChange}
            value={stationAddInputValue}
          />
          {isAddButtonEnable ? (
            <button type="button" className="stations-dislocation__station-add-button" onClick={onAddStationButtonClick}>добавить</button>
          ) : (
            <button type="button" className="stations-dislocation__station-add-button stations-dislocation__station-add-button_disabled">добавить</button>
          )}
        </div>
      )}
      <div className="stations-dislocation__table-heading-container">
        <p className="stations-dislocation__table-heading-results">Найдено {stationsValue} контейнеров</p>
        <div className="stations-dislocation__table-heading-icons-container">
          <div className={`stations-dislocation__table-heading-email-icon ${isEmailSendModalActive && 'stations-dislocation__table-heading-email-icon_active'}`} onClick={handleShowEmailSendModal} />
          {isEmailSendModalActive && (
            <form className="stations-dislocation__email-send-container" onSubmit={onSendClick}>
              <div className="stations-dislocation__email-send-heading-container">
                <div className="stations-dislocation__email-send-close-button" onClick={handleShowEmailSendModal} />
                <p className="stations-dislocation__email-send-heading">Отправить на почту</p>
              </div>
              <div className="stations-dislocation__input-container">
                <input
                  type="email"
                  className="stations-dislocation__input"
                  id="email-input"
                  name="email"
                  value={email.value}
                  onChange={email.onChange}
                  placeholder="example@mail.com"
                  required
                />
                <span id="email-input" className="stations-dislocation__input-error">{email.errorMessage}</span>
              </div>
              <button className="stations-dislocation__send-button" type="submit">отправить</button>
            </form>
          )}
          <div className="stations-dislocation__table-heading-save-icon" />
          <div className={`stations-dislocation__table-heading-filter-icon ${isFilterActive && 'stations-dislocation__table-heading-filter-icon_active'}`} onClick={handleShowFilter} />
          {isFilterActive && (
            <div className="stations-dislocation__table-filter">
              <div className="stations-dislocation__table-filter-heading-container">
                <p className="stations-dislocation__table-filter-heading">Фильтр</p>
                <div className="stations-dislocation__table-filter-close-button" onClick={handleShowFilter} />
              </div>
              <div className="stations-dislocation__table-filter-options-container">
                <p className="stations-dislocation__table-filter-options-heading">Грузополучатель</p>
                <div className="stations-dislocation__table-filter-option-container" onClick={handleConsigneesOpened}>
                  <p className={`stations-dislocation__table-filter-option-text ${isConsigneeActive && 'stations-dislocation__table-filter-option-text_active'}`}>{consignee}</p>
                  <div className="stations-dislocation__table-filter-option-arrow" />
                  {isConsigneesOpened && (
                    <div className="stations-dislocation__table-filter-option-container-main">
                      {consignees.map((consignee, index) => (
                        <div className="stations-dislocation__table-filter-option" key={index} onClick={() => onConsigneeOptionClick(consignee)}>
                          <p className="stations-dislocation__table-filter-options-text">{consignee}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="stations-dislocation__table-filter-options-container">
                <p className="stations-dislocation__table-filter-options-heading">Род груза</p>
                <div className="stations-dislocation__table-filter-option-container" onClick={handleTypeOfCargoOpened}>
                  <p className={`stations-dislocation__table-filter-option-text ${isTypeOfCargoActive && 'stations-dislocation__table-filter-option-text_active'}`}>{typeOfCargo}</p>
                  <div className="stations-dislocation__table-filter-option-arrow" />
                  {isTypeOfCargoOpened && (
                    <div className="stations-dislocation__table-filter-option-container-main">
                      {typeOfCargos.map((type, index) => (
                        <div className="stations-dislocation__table-filter-option" key={index} onClick={() => onTypeOfCargoOptionClick(type)}>
                          <p className="stations-dislocation__table-filter-options-text">{type}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="stations-dislocation__table-filter-options-container">
                <p className="stations-dislocation__table-filter-options-heading">Груз</p>
                <div className="stations-dislocation__table-filter-option-container" onClick={handleCargoOpened}>
                  <p className={`stations-dislocation__table-filter-option-text ${isCargoActive && 'stations-dislocation__table-filter-option-text_active'}`}>{cargo}</p>
                  <div className="stations-dislocation__table-filter-option-arrow" />
                  {isCargoOpened && (
                    <div className="stations-dislocation__table-filter-option-container-main">
                      {cargos.map((cargo, index) => (
                        <div className="stations-dislocation__table-filter-option" key={index} onClick={() => onCargoOptionClick(cargo)}>
                          <p className="stations-dislocation__table-filter-options-text">{cargo}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="stations-dislocation__table-filter-options-container">
                <p className="stations-dislocation__table-filter-options-heading">Подвижной состав</p>
                <div className="stations-dislocation__table-filter-option-container" onClick={handleRollingStockOpened}>
                  <p className={`stations-dislocation__table-filter-option-text ${isRollingStockActive && 'stations-dislocation__table-filter-option-text_active'}`}>{rollingStock}</p>
                  <div className="stations-dislocation__table-filter-option-arrow" />
                  {isRollingStockOpened && (
                    <div className="stations-dislocation__table-filter-option-container-main">
                      {rollingStocks.map((stock, index) => (
                        <div className="stations-dislocation__table-filter-option" key={index} onClick={() => onRollingStockOptionClick(stock)}>
                          <p className="stations-dislocation__table-filter-options-text">{stock}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="stations-dislocation__table-filter-buttons-container">
                <button className="stations-dislocation__table-filter-apply" type="button" onClick={onApplyFilterClick}>применить</button>
                <p className="stations-dislocation__table-filter-reset" onClick={onResetFilterClick}>Сбросить все фильтры</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {isStationsDislicationTableActive && (
        <>
          {tables === null ? (
            <>
              <div className='stations-dislocation__no-result-container'>
                <div className='stations-dislocation__no-result-heading-container' />
                <div className='stations-dislocation__no-result-text-container'>
                  <p className='stations-dislocation__no-result-text'>Необходимо добавить станции</p>
                </div>
                <div className='stations-dislocation__no-result-bottom-container' />
              </div>
            </>
          ) : (
            <StationsDislocationTable
              tables={tables}
            />
          )}
        </>
      )}
    </div>
  );
}

export default StationsDislocation;
