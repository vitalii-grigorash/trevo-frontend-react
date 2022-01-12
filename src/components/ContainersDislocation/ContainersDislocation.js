import React, { useState, useEffect } from 'react';
import ContainersAdd from '../ContainersAdd/ContainersAdd';
import { Validation } from '../../utils/Validation';
import ContainersDislocationTable from '../ContainersDislocationTable/ContainersDislocationTable'
import ContainersDislicationTableData from '../../utils/ContainersDislocationTableData.json';

function ContainersDislocation(props) {

  const {
    postNewContainers,
    containersGroups
  } = props;

  const [containersSearchInputValue, setContainersSearchInputValue] = useState('');
  const [isButtonEnable, setButtonEnable] = useState(false);
  const [isContainersAddActive, setContainersAddActive] = useState(false);
  const [isFilterActive, setFilterActive] = useState(false);
  const [isGroupSelected, setGroupSelected] = useState(false);
  const [groupName, setGroupName] = useState('Выберите группу');
  const [isGroupListActive, setGroupListActive] = useState(false);
  const [condition, setCondition] = useState('Все');
  const [data, setData] = useState([]);
  const [groupId, setGroupId] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [tables, setTables] = useState({});
  const [isContainersDislicationTableActive, setContainersDislocationTableActive] = useState(false);
  const [containersValue, setContainersValue] = useState('');
  const [isEmailSendModalActive, setEmailSendModalActive] = useState(false);

  const email = Validation();

  function getTablesForRender(data) {
    if (data === null) {
      setTables(null);
      setContainersDislocationTableActive(false);
      setContainersValue('0');
      return
    } else {
      setTables(data);
      const containersLength = data.containerData.columns.map((column) => column.data.length);
      setContainersValue(containersLength[0]);
      setContainersDislocationTableActive(true);
    }
  }

  useEffect(() => {
    const data = ContainersDislicationTableData;
    getTablesForRender(data);
  }, []);

  function handleSearchInputChange(evt) {
    setContainersSearchInputValue(evt.target.value);
    if (evt.target.value.trim() !== '') {
      setButtonEnable(true);
    } else {
      setButtonEnable(false);
    }
  }

  function handleShowEmailSendModal() {
    if (isEmailSendModalActive) {
      setEmailSendModalActive(false);
      email.setValue('');
      email.setErrorMessage('');
    } else {
      setFilterActive(false);
      setCondition('Все');
      setData([]);
      setGroupSelected(false);
      setGroupName('Выберите группу');
      setGroupId('');
      setGroupDescription('');
      setEmailSendModalActive(true);
    }
  }

  function onSearchButtonClick() {
    console.log(containersSearchInputValue);
  }

  function handleAddContainersClick() {
    if (isContainersAddActive) {
      setContainersAddActive(false);
    } else {
      setContainersAddActive(true);
    }
  }

  function handleShowFilter() {
    if (isFilterActive) {
      setFilterActive(false);
    } else {
      setEmailSendModalActive(false);
      email.setValue('');
      email.setErrorMessage('');
      setFilterActive(true);
    }
  }

  function handleGroupListShow() {
    if (isGroupListActive) {
      setGroupListActive(false);
    } else {
      setGroupListActive(true);
    }
  }

  function applyFilter() {
    console.log(condition);
    console.log(data);
    console.log(groupId);
    console.log(groupDescription);
    handleShowFilter();
    const filteredData = {
      groupIds: [groupId]
    }
    console.log(filteredData);
  }

  function resetFilter() {
    setCondition('Все');
    setData([]);
    const data = {
      groupIds: []
    }
    console.log(data);
    handleShowFilter();
    setGroupSelected(false);
    setGroupName('Выберите группу');
    setGroupId('');
    setGroupDescription('');
  }

  function onRadioСhange(evt) {
    setCondition(evt.target.value);
  };

  function onCheckboxСhange(evt) {
    if (evt.target.checked === true) {
      setData([...data, evt.target.value]);
    } else {
      const newData = data.filter(item => item !== evt.target.value);
      setData(newData);
    }
  }

  const selectData = (groupName, groupId, groupDescription) => {
    setGroupName(groupName);
    setGroupId(groupId);
    setGroupDescription(groupDescription);
    setGroupSelected(true);
  }

  function onSendClick(evt) {
    evt.preventDefault();
    console.log(email.value)
    email.setValue('');
    handleShowEmailSendModal();
  }

  return (
    <div className="containers-dislocation">
      <p className="containers-dislocation__search-name">Поиск контейнера</p>
      <div className="containers-dislocation__search-container">
        <input
          type="text"
          className="containers-dislocation__search-input"
          placeholder='Введите номер контейнера'
          onChange={handleSearchInputChange}
          value={containersSearchInputValue}
        />
        {isButtonEnable ? (
          <button type="submit" className="containers-dislocation__search-button" onClick={onSearchButtonClick}>поиск</button>
        ) : (
          <button type="submit" className="containers-dislocation__search-button containers-dislocation__search-button_disabled">поиск</button>
        )}
      </div>
      <div className="containers-dislocation__add-containers" onClick={handleAddContainersClick}>
        <div className={`containers-dislocation__add-containers-icon ${isContainersAddActive && 'containers-dislocation__add-containers-icon_active'}`} />
        <p className={`containers-dislocation__add-containers-text ${isContainersAddActive && 'containers-dislocation__add-containers-text_active'}`}>добавить контейнеры</p>
      </div>
      {isContainersAddActive && (
        <ContainersAdd
          containersGroups={containersGroups}
          closeContainersAdd={handleAddContainersClick}
          postNewContainers={postNewContainers}
        />
      )}
      <div className="containers-dislocation__table-heading-container">
        <p className="containers-dislocation__table-heading-results">Найдено {containersValue} контейнеров</p>
        <div className="containers-dislocation__table-heading-icons-container">
          <div className={`containers-dislocation__table-heading-email-icon ${isEmailSendModalActive && 'containers-dislocation__table-heading-email-icon_active'}`} onClick={handleShowEmailSendModal} />
          {isEmailSendModalActive && (
            <form className="containers-dislocation__email-send-container" onSubmit={onSendClick}>
              <div className="containers-dislocation__email-send-heading-container">
                <div className="containers-dislocation__email-send-close-button" onClick={handleShowEmailSendModal} />
                <p className="containers-dislocation__email-send-heading">Отправить на почту</p>
              </div>
              <div className="containers-dislocation__input-container">
                <input
                  type="email"
                  className="containers-dislocation__input"
                  id="email-input"
                  name="email"
                  value={email.value}
                  onChange={email.onChange}
                  placeholder="example@mail.com"
                  required
                />
                <span id="email-input" className="containers-dislocation__input-error">{email.errorMessage}</span>
              </div>
              <button className="containers-dislocation__send-button" type="submit">отправить</button>
            </form>
          )}
          <div className="containers-dislocation__table-heading-save-icon" />
          <div className={`containers-dislocation__table-heading-filter-icon ${isFilterActive && 'containers-dislocation__table-heading-filter-icon_active'}`} onClick={handleShowFilter} />
          {isFilterActive && (
            <div className="containers-dislocation__filter-container">
              <div className="containers-dislocation__filter-heading-container">
                <div className="containers-dislocation__filter-close-button" onClick={handleShowFilter} />
                <p className="containers-dislocation__filter-heading">Фильтр</p>
              </div>
              <p className="containers-dislocation__filter-group-select-heading">Группы</p>
              <div className="containers-dislocation__filter-group-select-container" onClick={handleGroupListShow}>
                <p className={`containers-dislocation__filter-group-select-text ${isGroupSelected && 'containers-dislocation__filter-group-select-text_active'}`}>{groupName}</p>
                <div className="containers-dislocation__filter-group-select-icon" />
                {isGroupListActive && (
                  <div className="containers-dislocation__filter-group-list-container">
                    {containersGroups === null ? (
                      <div className="containers-dislocation__filter-group-container">
                        <p className="containers-dislocation__filter-group-text">Необходимо добавить группу</p>
                      </div>
                    ) : (
                      containersGroups.map((data) => (
                        <div key={data.id} className="containers-dislocation__filter-group-container containers-dislocation__filter-group-container_result" onClick={() => selectData(data.name, data.id, data.description)}>
                          <p className="containers-dislocation__filter-group-text">{data.name}</p>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
              <div className="containers-dislocation__filter-buttons-container">
                <div className="containers-dislocation__filter-radio-buttons-container">
                  <p className="containers-dislocation__filter-radio-buttons-heading">Состояние</p>
                  <div className="containers-dislocation__filter-radio-buttons">
                    <input
                      id="all"
                      type="radio"
                      name="condition"
                      value="Все"
                      onChange={onRadioСhange}
                      defaultChecked={true}
                    />
                    <label htmlFor="all">Все</label>
                  </div>
                  <div className="containers-dislocation__filter-radio-buttons">
                    <input
                      id="serviceable"
                      type="radio"
                      name="condition"
                      value="Исправные"
                      onChange={onRadioСhange}
                    />
                    <label htmlFor="serviceable">Исправные</label>
                  </div>
                  <div className="containers-dislocation__filter-radio-buttons">
                    <input
                      id="defective"
                      type="radio"
                      name="condition"
                      value="Неисправные"
                      onChange={onRadioСhange}
                    />
                    <label htmlFor="defective">Неисправные</label>
                  </div>
                </div>
                <div className="containers-dislocation__filter-checkbox-buttons-container">
                  <p className="containers-dislocation__filter-checkbox-buttons-heading">Показывать данные</p>
                  <div className="containers-dislocation__filter-checkbox-buttons">
                    <input
                      id="onloading"
                      type="checkbox"
                      name="data"
                      value="На погрузке"
                      onChange={onCheckboxСhange}
                    />
                    <label htmlFor="onloading">На погрузке</label>
                  </div>
                  <div className="containers-dislocation__filter-checkbox-buttons">
                    <input
                      id="unloading"
                      type="checkbox"
                      name="data"
                      value="На выгрузке"
                      onChange={onCheckboxСhange}
                    />
                    <label htmlFor="unloading">На выгрузке</label>
                  </div>
                  <div className="containers-dislocation__filter-checkbox-buttons">
                    <input
                      id="onway"
                      type="checkbox"
                      name="data"
                      value="В пути"
                      onChange={onCheckboxСhange}
                    />
                    <label htmlFor="onway">В пути</label>
                  </div>
                </div>
              </div>
              <div className="containers-dislocation__filter-submit-buttons-container">
                <button type="button" className="containers-dislocation__filter-submit-button" onClick={applyFilter}>применить</button>
                <p className="containers-dislocation__filter-reset-button" onClick={resetFilter}>Сбросить все фильтры</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {isContainersDislicationTableActive && (
        <>
          {tables === null ? (
            <>
              <div className='containers-dislocation__no-result-container'>
                <div className='containers-dislocation__no-result-heading-container' />
                <div className='containers-dislocation__no-result-text-container'>
                  <p className='containers-dislocation__no-result-text'>Необходимо добавить контейнеры</p>
                </div>
                <div className='containers-dislocation__no-result-bottom-container' />
              </div>
            </>
          ) : (
            <ContainersDislocationTable
              tables={tables}
            />
          )}
        </>
      )}
    </div>
  );
}

export default ContainersDislocation;
