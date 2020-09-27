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
        <Switch>
          <Route exact path="/dashboard">
            <Header />
            <Dashboard />
          </Route>
          <Route path="/profile">
            <Header />
            <Profile />
          </Route>
          <Route path="/settings">
            <Header />
            <Settings />
          </Route>
          <Route exact path="/">
            <Header />
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
