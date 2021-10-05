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
import * as Api from '../../utils/Api';

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

  useEffect(() => {
    Api.getRequestHistoryList()
      .then((data) => {
        setRequestHistoryList(data);
      })
      .catch((err) => console.log(`Ошибка при загрузке списка истории запросов: ${err}`));
  }, []);

  function handleShowPreloader(id) {
    setInfoShow(true);
    function filteredObj(idToSearch) {
      return requestHistoryList.find((obj) => {
        const filtered = () => {
          if (obj.id === idToSearch) {
            console.log(obj);
            return obj
          }
        }
        return filtered();
      });
    };
    setRequestInfo(filteredObj(id));
  }

  function addRequest(request) {
    setPreloaderShow(true);
    setInfoShow(true);
    Api.postRequest(request)
      .then(() => {
        Api.getRequestHistoryList()
          .then((data) => {
            setRequestHistoryList(data);
            // handleShowPreloader(request.requestTypeId);
          })
          .catch((err) => console.log(`Ошибка при загрузке списка истории запросов: ${err}`))
      })
      .catch((err) => console.log(`Ошибка при отправки запроса: ${err}`))
      .finally(() => setPreloaderShow(false));
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
              handleShowPreloader={handleShowPreloader}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
            />
          </Route>

          <Route path='/repairs'>
            <Repairs
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              addRequest={addRequest}
              requestHistoryList={requestHistoryList}
              handleShowPreloader={handleShowPreloader}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
            />
          </Route>

          <Route path='/details'>
            <Details
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              addRequest={addRequest}
              requestHistoryList={requestHistoryList}
              handleShowPreloader={handleShowPreloader}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
            />
          </Route>

          <Route path='/passports'>
            <Passports
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              addRequest={addRequest}
              requestHistoryList={requestHistoryList}
              handleShowPreloader={handleShowPreloader}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
            />
          </Route>

          <Route path='/runs'>
            <Runs
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              addRequest={addRequest}
              requestHistoryList={requestHistoryList}
              handleShowPreloader={handleShowPreloader}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
            />
          </Route>

          <Route path='/stations'>
            <Stations
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              addRequest={addRequest}
              requestHistoryList={requestHistoryList}
              handleShowPreloader={handleShowPreloader}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
            />
          </Route>

          <Route path='/trains'>
            <Trains
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              addRequest={addRequest}
              requestHistoryList={requestHistoryList}
              handleShowPreloader={handleShowPreloader}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
            />
          </Route>

          <Route path='/wagons'>
            <Wagons
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              addRequest={addRequest}
              requestHistoryList={requestHistoryList}
              handleShowPreloader={handleShowPreloader}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
            />
          </Route>

          <Route path='/containers'>
            <Containers
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
              addRequest={addRequest}
              requestHistoryList={requestHistoryList}
              handleShowPreloader={handleShowPreloader}
              isPreloaderShow={isPreloaderShow}
              isInfoShow={isInfoShow}
              requestInfo={requestInfo}
            />
          </Route>

          <Route path='/dislocation'>
            <Dislocation />
          </Route>

          <Route path='/settings'>
            <Settings />
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
