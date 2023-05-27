import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import CompanyList from './components/CompanyList';
import CompanyDetail from './components/CompanyDetail';
import JobList from './components/JobList';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ProtectedRoute from './components/ProtectedRoute';

function Routes({ currentUser, login, signup }) {
  return (
    <Switch>
      <Route exact path="/">
        <Home currentUser={currentUser} />
      </Route>
      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>
      <Route exact path="/signup">
        <SignupForm signup={signup} />
      </Route>
      <ProtectedRoute
        exact
        path="/companies"
        component={CompanyList}
        currentUser={currentUser}
      />
      <ProtectedRoute
        exact
        path="/companies/:handle"
        component={CompanyDetail}
        currentUser={currentUser}
      />
      <ProtectedRoute
        exact
        path="/jobs"
        component={JobList}
        currentUser={currentUser}
      />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
