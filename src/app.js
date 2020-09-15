import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import './css/main.css';

export default function App() {
  return (
    <Router>
      <div className="main">
        <Header />
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
