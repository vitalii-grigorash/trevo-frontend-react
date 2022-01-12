import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import SideBar from '../SideBar/SideBar';
import Main from '../Main/Main';
import Stations from '../Stations/Stations';
import Trains from '../Trains/Trains';
import Carriages from '../Carriages/Carriages';
import Containers from '../Containers/Containers';
import Dislocation from '../Dislocation/Dislocation';
import Settings from '../Settings/Settings';
import GeneralInquiries from '../GeneralInquiries/GeneralInquiries';
import Repairs from '../Repairs/Repairs';
import Details from '../Details/Details';
import Passports from '../Passports/Passports';
import Runs from '../Runs/Runs';
import FinancialPanel from '../FinancialPanel/FinancialPanel';
import Administration from '../Administration/Administration';
import PersonalAccount from '../PersonalAccount/PersonalAccount';
import NotFound from '../NotFound/NotFound';
import * as SettingsPageApi from '../../utils/SettingPageApi';
import DeleteAllPopup from '../DeleteAllPopup/DeleteAllPopup';
import DeleteGroupPopup from '../DeleteGroupPopup/DeleteGroupPopup';

function App() {

  const userData = {
    lastName: 'Пушкин',
    firstName: 'Александр',
    middleName: 'Сергевич'
  }

  const [currentUser, setCurrentUser] = useState({});
  const [isRequestListOpen, setRequestListOpen] = useState(false);
  const [requestHistoryList, setRequestHistoryList] = useState([]);
  const [isPreloaderShow, setPreloaderShow] = useState(false);
  const [isInfoShow, setInfoShow] = useState(false);
  const [requestInfo, setRequestInfo] = useState({});
  const [requesName, setRequesName] = useState('');
  const [requestId, setRequestId] = useState('');
  const [carriageList, setCarriageList] = useState([]);
  const [selectedGroupCarriages, setSelectedGroupCarriages] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState([]);
  const [isSearchGroupButtonClicked, setSearchGroupButtonClicked] = useState(false);
  const [isSearchButtonClicked, setSearchButtonClicked] = useState(false);
  const [selectedGroupId, setSelectedGroupId] = useState('');
  const [deleteGroupId, setDeleteGroupId] = useState('');
  const [removedCarriagesArray, setRemovedCarriagesArray] = useState([]);
  const [isAllWagonsSelected, setAllWagonsSelected] = useState(false);
  const [carriageGroups, setCarriageGroups] = useState([]);
  const [isDeleteAllPopupOpen, setDeleteAllPopupOpen] = useState(false);
  const [isDeleteGroupPopupOpen, setDeleteGroupPopupOpen] = useState(false);

  const containersGroups = [
    {
      id: "01",
      name: "TestGroup1",
      description: "примечание к группе 1",
      numObjectsTracking: "0"
    },
    {
      id: "02",
      name: "TestGroup2",
      description: "примечание к группе 2",
      numObjectsTracking: "0"
    },
    {
      id: "03",
      name: "TestGroup3",
      description: "примечание к группе 3",
      numObjectsTracking: "0"
    },
    {
      id: "04",
      name: "TestGroup4",
      description: "примечание к группе 4",
      numObjectsTracking: "0"
    },
    {
      id: "05",
      name: "TestGroup5",
      description: "примечание к группе 5",
      numObjectsTracking: "0"
    },
    {
      id: "06",
      name: "TestGroup6",
      description: "примечание к группе 6",
      numObjectsTracking: "0"
    },
    {
      id: "07",
      name: "TestGroup7",
      description: "примечание к группе 7",
      numObjectsTracking: "0"
    },
    {
      id: "08",
      name: "TestGroup8",
      description: "примечание к группе 8",
      numObjectsTracking: "0"
    },
    {
      id: "09",
      name: "TestGroup9",
      description: "примечание к группе 9",
      numObjectsTracking: "0"
    },
    {
      id: "10",
      name: "TestGroup10",
      description: "примечание к группе 10",
      numObjectsTracking: "0"
    },
  ]

  function onDeleteAllClick() {
    if (isDeleteAllPopupOpen) {
      setDeleteAllPopupOpen(false);
    } else {
      setDeleteAllPopupOpen(true);
    }
  }

  function onDeleteGroupClick(groupNumber) {
    if (isDeleteGroupPopupOpen) {
      setDeleteGroupPopupOpen(false);
      setDeleteGroupId('');
    } else {
      setDeleteGroupPopupOpen(true);
      setDeleteGroupId(groupNumber);
    }
  }

  function getCarriageGroups() {
    SettingsPageApi.getCarriageGroups()
      .then((data) => {
        setCarriageGroups(data);
      })
      .catch((err) => console.log(`Ошибка при загрузке списка вагонов: ${err}`));
  }

  function deleteCarriageGroups() {
    SettingsPageApi.deleteGroup(deleteGroupId)
      .then(() => {
        getCarriageGroups();
        onDeleteGroupClick();
      })
      .catch((err) => console.log(`Ошибка при удалении группы: ${err}`));
  }

  function deleteAllCarriagesAndGroups() {
    SettingsPageApi.deleteAllCarriagesAndGroups()
      .then(() => {
        getAllCarriage();
        getCarriageGroups();
        onDeleteAllClick();
      })
      .catch((err) => console.log(`Ошибка при загрузке списка вагонов: ${err}`));
  }

  function selectAllWagons() {
    if (isAllWagonsSelected) {
      setAllWagonsSelected(false);
    } else {
      setAllWagonsSelected(true);
    }
  }

  const onCheckboxChekedArray = (checkboxSelectedData) => {
    setRemovedCarriagesArray(checkboxSelectedData);
  }

  function reloadSelectedCarriagesList() {
    setSelectedGroupCarriages([]);
    const filteredItems = carriageList.filter(a => !removedCarriagesArray.find(p => p.id === a.id))
    // eslint-disable-next-line
    filteredItems.find((item) => {
      if (item.groupId === selectedGroupId) {
        setSelectedGroupCarriages(selectedGroupCarriages => ([...selectedGroupCarriages, item]));
        setRemovedCarriagesArray([]);
      }
    });
  }

  function onSearchGroupClick(id) {
    setSelectedGroupId(id);
    setSearchButtonClicked(true);
    setSelectedGroupCarriages([]);
    // eslint-disable-next-line
    carriageList.find((item) => {
      if (item.groupId === id) {
        setSelectedGroupCarriages(selectedGroupCarriages => ([...selectedGroupCarriages, item]));
      }
    });
  }

  function onSearchGroup(id) {
    setSearchGroupButtonClicked(true);
    setSelectedGroup([]);
    // eslint-disable-next-line
    carriageGroups.find((item) => {
      if (item.id === id) {
        setSelectedGroup(selectedGroup => ([...selectedGroup, item]));
      }
    });
  }

  function getAllCarriage() {
    SettingsPageApi.getAllCarriage()
      .then((data) => {
        if (data === null) {
          setCarriageList([]);
          setSelectedGroupCarriages([]);
        } else {
          setCarriageList(data.reverse());
          if (isSearchButtonClicked) {
            reloadSelectedCarriagesList();
          }
          setRemovedCarriagesArray([]);
        }
      })
      .catch((err) => console.log(`Ошибка при загрузке списка вагонов: ${err}`));
  }

  function postNewCarriages(groupId, carriagesToAdd) {
    SettingsPageApi.postNewCarriages(groupId, carriagesToAdd)
      .then(() => {
        getAllCarriage();
      })
      .catch((err) => console.log(`Ошибка при отправки запроса: ${err}`));
  }

  function postNewContainers(groupId, containersToAdd) {
    console.log(groupId);
    console.log(containersToAdd);
  }

  function replaceCarriages(groupId, carriagesToReplace) {
    SettingsPageApi.replaceCarriages(groupId, carriagesToReplace)
      .then(() => {
        getAllCarriage();
      })
      .catch((err) => console.log(`Ошибка при отправки запроса: ${err}`));
  }

  function deleteCarriages(carriagesArray) {
    setAllWagonsSelected(false);
    SettingsPageApi.deleteCarriages(carriagesArray)
      .then(() => {
        getAllCarriage();
      })
      .catch((err) => console.log(`Ошибка при загрузке списка вагонов: ${err}`));
  }

  function deleteCarriagesFromGroup(id, carriagesArray) {
    SettingsPageApi.deleteCarriagesFromGroup(id, carriagesArray)
      .then(() => {
        getAllCarriage();
      })
      .catch((err) => console.log(`Ошибка при загрузке списка вагонов: ${err}`));
  }

  function updateCarriageDescription(id, description) {
    SettingsPageApi.updateCarriageDescription(id, description)
      .then(() => {
        getAllCarriage();
      })
      .catch((err) => console.log(`Ошибка при отправке примечания: ${err}`));
  }

  function getRequestHistoryList(api) {
    api.getRequestHistoryList()
      .then((data) => {
        setRequestHistoryList(data.reverse());
      })
      .catch((err) => console.log(`Ошибка при загрузке списка истории запросов: ${err}`));
  }

  function closeInfoContainer() {
    setInfoShow(false);
  }

  function handleShowInfo(id, api) {
    setPreloaderShow(true);
    api.getInfo(id)
      .then((res) => {
        if (res.status === 'done') {
          setRequesName(res.requestTypeName);
          setRequestInfo(res);
          setRequestId(id);
          setInfoShow(true);
          setPreloaderShow(false);
        } else {
          setRequesName(res.requestTypeName);
          setInfoShow(true);
          setPreloaderShow(true);
        }
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
  }

  function sendRequest(requestData, api) {
    api.postRequest(requestData)
      .then((res) => {
        if (res.status === 'done') {
          setPreloaderShow(true);
          setInfoShow(true);
          api.getInfo(res.id)
            .then((res) => {
              setRequesName(res.requestTypeName);
              setRequestInfo(res);
              setRequestId(res.id);
            })
            .catch((err) => console.log(`Ошибка: ${err}`))
            .finally(() => setPreloaderShow(false));
        } else {
          return
        }
      })
      .then(() => {
        getRequestHistoryList(api);
      })
      .catch((err) => console.log(`Ошибка при отправке запроса: ${err}`))
  }

  function removeRequestFromHistoryList(id, api) {
    api.removeHistoryRequest(id)
      .then(() => {
        getRequestHistoryList(api);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  function handleOpenRequestList() {
    if (isRequestListOpen) {
      setRequestListOpen(false)
    } else {
      setRequestListOpen(true);
    }
  }

  useEffect(() => {
    const firstName = userData.firstName.charAt(0);
    const lastName = userData.lastName;
    const middleName = function () {
      if (userData.middleName) {
        return `${userData.middleName.charAt(0)}.`;
      } else {
        return ''
      }
    }
    const shortName = `${lastName} ${firstName}.${middleName()}`
    const userShortName = { shortName: shortName }
    setCurrentUser(userShortName)
  }, [userData.firstName, userData.lastName, userData.middleName]);

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="app">

        <SideBar />

        <Switch>

          <Route path='/' exact>
            <Main />
          </Route>

          <Route path='/general-inquiries'>
            <GeneralInquiries
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              getRequestHistoryList={getRequestHistoryList}
              requestHistoryList={requestHistoryList}
              sendRequest={sendRequest}
              removeRequestFromHistoryList={removeRequestFromHistoryList}
              handleShowInfo={handleShowInfo}
              requesName={requesName}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requestId={requestId}
              closeInfoContainer={closeInfoContainer}
            />
          </Route>

          <Route path='/repairs'>
            <Repairs
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              getRequestHistoryList={getRequestHistoryList}
              requestHistoryList={requestHistoryList}
              sendRequest={sendRequest}
              removeRequestFromHistoryList={removeRequestFromHistoryList}
              handleShowInfo={handleShowInfo}
              requesName={requesName}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requestId={requestId}
              closeInfoContainer={closeInfoContainer}
            />
          </Route>

          <Route path='/details'>
            <Details
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              getRequestHistoryList={getRequestHistoryList}
              requestHistoryList={requestHistoryList}
              sendRequest={sendRequest}
              removeRequestFromHistoryList={removeRequestFromHistoryList}
              handleShowInfo={handleShowInfo}
              requesName={requesName}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requestId={requestId}
              closeInfoContainer={closeInfoContainer}
            />
          </Route>

          <Route path='/passports'>
            <Passports
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              getRequestHistoryList={getRequestHistoryList}
              requestHistoryList={requestHistoryList}
              sendRequest={sendRequest}
              removeRequestFromHistoryList={removeRequestFromHistoryList}
              handleShowInfo={handleShowInfo}
              requesName={requesName}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requestId={requestId}
              closeInfoContainer={closeInfoContainer}
            />
          </Route>

          <Route path='/runs'>
            <Runs
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              getRequestHistoryList={getRequestHistoryList}
              requestHistoryList={requestHistoryList}
              sendRequest={sendRequest}
              removeRequestFromHistoryList={removeRequestFromHistoryList}
              handleShowInfo={handleShowInfo}
              requesName={requesName}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requestId={requestId}
              closeInfoContainer={closeInfoContainer}
            />
          </Route>

          <Route path='/stations'>
            <Stations
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              getRequestHistoryList={getRequestHistoryList}
              requestHistoryList={requestHistoryList}
              sendRequest={sendRequest}
              removeRequestFromHistoryList={removeRequestFromHistoryList}
              handleShowInfo={handleShowInfo}
              requesName={requesName}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requestId={requestId}
              closeInfoContainer={closeInfoContainer}
            />
          </Route>

          <Route path='/trains'>
            <Trains
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              getRequestHistoryList={getRequestHistoryList}
              requestHistoryList={requestHistoryList}
              sendRequest={sendRequest}
              removeRequestFromHistoryList={removeRequestFromHistoryList}
              handleShowInfo={handleShowInfo}
              requesName={requesName}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requestId={requestId}
              closeInfoContainer={closeInfoContainer}
            />
          </Route>

          <Route path='/сarriages'>
            <Carriages
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              getRequestHistoryList={getRequestHistoryList}
              requestHistoryList={requestHistoryList}
              sendRequest={sendRequest}
              removeRequestFromHistoryList={removeRequestFromHistoryList}
              handleShowInfo={handleShowInfo}
              requesName={requesName}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requestId={requestId}
              closeInfoContainer={closeInfoContainer}
            />
          </Route>

          <Route path='/containers'>
            <Containers
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              getRequestHistoryList={getRequestHistoryList}
              requestHistoryList={requestHistoryList}
              sendRequest={sendRequest}
              removeRequestFromHistoryList={removeRequestFromHistoryList}
              handleShowInfo={handleShowInfo}
              requesName={requesName}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requestId={requestId}
              closeInfoContainer={closeInfoContainer}
            />
          </Route>

          <Route path='/dislocation'>
            <Dislocation
              carriageGroups={carriageGroups}
              containersGroups={containersGroups}
              postNewCarriages={postNewCarriages}
              postNewContainers={postNewContainers}
              getCarriageGroups={getCarriageGroups}
              carriageList={carriageList}
            />
          </Route>

          <Route path='/settings'>
            <Settings
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
              getCarriageGroups={getCarriageGroups}
              carriageGroups={carriageGroups}
              selectedGroup={selectedGroup}
              isSearchGroupButtonClicked={isSearchGroupButtonClicked}
              onSearchGroup={onSearchGroup}
              onDeleteGroupClick={onDeleteGroupClick}
              deleteCarriagesFromGroup={deleteCarriagesFromGroup}
              onDeleteAllClick={onDeleteAllClick}
              replaceCarriages={replaceCarriages}
              updateCarriageDescription={updateCarriageDescription}
            />
          </Route>

          <Route path='/financial-panel'>
            <FinancialPanel />
          </Route>

          <Route path='/administration'>
            <Administration />
          </Route>

          <Route path='/personal-account'>
            <PersonalAccount />
          </Route>

          <Switch>
            <Route exact path="/404" component={NotFound} />
            <Redirect from='*' to='/404' />
          </Switch>

        </Switch>

        <DeleteAllPopup
          isOpen={isDeleteAllPopupOpen}
          deleteAllCarriagesAndGroups={deleteAllCarriagesAndGroups}
          onClose={onDeleteAllClick}
        />

        <DeleteGroupPopup
          isOpen={isDeleteGroupPopupOpen}
          onClose={onDeleteGroupClick}
          deleteCarriageGroups={deleteCarriageGroups}
        />

      </div>

    </CurrentUserContext.Provider>

  );
}

export default App;
