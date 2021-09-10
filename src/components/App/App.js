import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import StationsPage from '../StationsPage/StationsPage';
import NotFound from '../NotFound/NotFound';

function App() {

  return (
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
  );

}

export default App;
