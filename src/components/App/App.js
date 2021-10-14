import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import SideBar from '../SideBar/SideBar';
import Main from '../Main/Main';
import Stations from '../Stations/Stations';
import Trains from '../Trains/Trains';
import Wagons from '../Wagons/Wagons';
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
import * as StationsPageApi from '../../utils/StationsPageApi';
import * as SettingsPageApi from '../../utils/SettingPageApi';

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
  const [requesId, setRequesId] = useState('');
  const [carriageList, setCarriageList] = useState([]);
  const [selectedGroupCarriages, setSelectedGroupCarriages] = useState([]);
  const [isSearchButtonClicked, setSearchButtonClicked] = useState(false);
  const [selectedGroupId, setSelectedGroupId] = useState('');
  const [removedCarriagesArray, setRemovedCarriagesArray] = useState([]);
  const [isAllWagonsSelected, setAllWagonsSelected] = useState(false);

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

  function deleteCarriages(carriagesArray) {
    setAllWagonsSelected(false);
    SettingsPageApi.deleteCarriages(carriagesArray)
      .then(() => {
        getAllCarriage();
      })
      .catch((err) => console.log(`Ошибка при загрузке списка вагонов: ${err}`));
  }

  function getRequestHistoryList() {
    StationsPageApi.getRequestHistoryList()
      .then((data) => {
        setRequestHistoryList(data.reverse());
      })
      .catch((err) => console.log(`Ошибка при загрузке списка истории запросов: ${err}`));
  }

  useEffect(() => {
    getRequestHistoryList();
  }, []);

  function handleShowHistoryList(id) {
    function filteredObj(idToSearch) {
      return requestHistoryList.find((obj) => {
        const filtered = () => {
          if (obj.id === idToSearch) {
            return obj
          }
        }
        return filtered();
      });
    };
    setRequestInfo(filteredObj(id));
    setRequesId(id);
    setInfoShow(true);
  }

  function addRequest(requestData, requestName) {
    setRequesName(requestName);
    setPreloaderShow(true);
    setInfoShow(true);
    StationsPageApi.postRequest(requestData)
      .then((res) => {
        setRequestInfo(res);
        setRequesId(res.id);
      })
      .then(() => {
        getRequestHistoryList();
      })
      .catch((err) => console.log(`Ошибка при отправки запроса: ${err}`))
      .finally(() => setPreloaderShow(false));
  }

  function removeHistoryListRequest(id) {
    StationsPageApi.removeHistoryRequest(id)
      .then(() => {
        getRequestHistoryList();
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

  React.useEffect(() => {
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
              addRequest={addRequest}
              requestHistoryList={requestHistoryList}
              handleShowHistoryList={handleShowHistoryList}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requesName={requesName}
              removeHistoryListRequest={removeHistoryListRequest}
              requesId={requesId}
            />
          </Route>

          <Route path='/repairs'>
            <Repairs
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              addRequest={addRequest}
              requestHistoryList={requestHistoryList}
              handleShowHistoryList={handleShowHistoryList}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requesName={requesName}
              requesId={requesId}
              removeHistoryListRequest={removeHistoryListRequest}
            />
          </Route>

          <Route path='/details'>
            <Details
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              addRequest={addRequest}
              requestHistoryList={requestHistoryList}
              handleShowHistoryList={handleShowHistoryList}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requesName={requesName}
              requesId={requesId}
              removeHistoryListRequest={removeHistoryListRequest}
            />
          </Route>

          <Route path='/passports'>
            <Passports
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              addRequest={addRequest}
              requestHistoryList={requestHistoryList}
              handleShowHistoryList={handleShowHistoryList}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requesName={requesName}
              requesId={requesId}
              removeHistoryListRequest={removeHistoryListRequest}
            />
          </Route>

          <Route path='/runs'>
            <Runs
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              addRequest={addRequest}
              requestHistoryList={requestHistoryList}
              handleShowHistoryList={handleShowHistoryList}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requesName={requesName}
              requesId={requesId}
              removeHistoryListRequest={removeHistoryListRequest}
            />
          </Route>

          <Route path='/stations'>
            <Stations
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              addRequest={addRequest}
              requestHistoryList={requestHistoryList}
              handleShowHistoryList={handleShowHistoryList}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requesName={requesName}
              requesId={requesId}
              removeHistoryListRequest={removeHistoryListRequest}
            />
          </Route>

          <Route path='/trains'>
            <Trains
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              addRequest={addRequest}
              requestHistoryList={requestHistoryList}
              handleShowHistoryList={handleShowHistoryList}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requesName={requesName}
              requesId={requesId}
              removeHistoryListRequest={removeHistoryListRequest}
            />
          </Route>

          <Route path='/wagons'>
            <Wagons
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              addRequest={addRequest}
              requestHistoryList={requestHistoryList}
              handleShowHistoryList={handleShowHistoryList}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requesName={requesName}
              requesId={requesId}
              removeHistoryListRequest={removeHistoryListRequest}
            />
          </Route>

          <Route path='/containers'>
            <Containers
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              addRequest={addRequest}
              requestHistoryList={requestHistoryList}
              handleShowHistoryList={handleShowHistoryList}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
              requesName={requesName}
              requesId={requesId}
              removeHistoryListRequest={removeHistoryListRequest}
            />
          </Route>

          <Route path='/dislocation'>
            <Dislocation />
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

      </div>

    </CurrentUserContext.Provider>

  );

}

export default App;
