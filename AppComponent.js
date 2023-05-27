import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Navigation from './Navigation';
import JoblyApi from './api';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        if (token) {
          const { username } = jwt_decode(token);
          const user = await JoblyApi.getUser(username);
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCurrentUser();
  }, [token]);

  const login = async (formData) => {
    try {
      const { token } = await JoblyApi.login(formData);
      setToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  const signup = async (formData) => {
    try {
      const { token } = await JoblyApi.signup(formData);
      setToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <Router>
      <Navigation currentUser={currentUser} logout={logout} />
      <Routes currentUser={currentUser} login={login} signup={signup} />
    </Router>
  );
}

export default App;
