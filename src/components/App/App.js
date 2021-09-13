import React, { useState } from 'react';
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
import NotFound from '../NotFound/NotFound';

function App() {

  const userData = {
    firstName: 'Александр',
    lastName: 'Пушкин',
    middleName: 'Сергевич'
  }

  const [currentUser, setCurrentUser] = useState({});
  const [isRequestListOpen, setRequestListOpen] = useState(false);

  function handleOpenRequestList () {
    if(isRequestListOpen) {
      setRequestListOpen(false)
      console.log(isRequestListOpen);
    } else {
      setRequestListOpen(true);
      console.log(isRequestListOpen);
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
            <GeneralInquiries />
          </Route>

          <Route path='/repairs'>
            <Repairs />
          </Route>

          <Route path='/details'>
            <Details />
          </Route>

          <Route path='/passports'>
            <Passports />
          </Route>

          <Route path='/runs'>
            <Runs />
          </Route>

          <Route path='/stations'>
            <Stations
              handleOpenRequestList={handleOpenRequestList}
              isRequestListOpen={isRequestListOpen}
            />
          </Route>

          <Route path='/trains'>
            <Trains />
          </Route>

          <Route path='/wagons'>
            <Wagons />
          </Route>

          <Route path='/containers'>
            <Containers />
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
