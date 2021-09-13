import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import SideBar from '../SideBar/SideBar';
import StationsPage from '../StationsPage/StationsPage';
import NotFound from '../NotFound/NotFound';

function App() {

  const userData = {
    firstName: 'Александр',
    lastName: 'Пушкин',
    middleName: 'Сергевич'
  }

  const [currentUser, setCurrentUser] = useState({});

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
    const userShortName = {shortName: shortName} 
    setCurrentUser(userShortName)
  }, [userData.firstName, userData.lastName, userData.middleName]);

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="app">

        <SideBar />

        <Switch>

          <Route path='/' exact>
            <StationsPage />
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
