import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, useLocation } from 'react-router-dom';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import toggleDrawer from '../../actions/toggleDrawer';
import './Categories.css';

function Categories() {
  const location = useLocation();
  return (
    <div className={state.isDrawerOpen ? 'categories categories_active' : 'categories'}>
      <div className="categories-container">
        <div
          onClick={() => {
            toggleDrawer();
          }}
          className="categories-container-wrapper">
          <NavLink
            className={
              location.pathname === 'dashboard'
                ? 'categories-container-wrapper__item categories-container-wrapper__item_active'
                : 'categories-container-wrapper__item'
            }
            to="/dashboard">
            dashboard
          </NavLink>
        </div>
      </div>

      <div className="categories-container">
        <div
          onClick={() => {
            toggleDrawer();
          }}
          className="categories-container-wrapper">
          <NavLink
            className={
              location.pathname === 'profile'
                ? 'categories-container-wrapper__item categories-container-wrapper__item_active'
                : 'categories-container-wrapper__item'
            }
            to="/profile">
            profile
          </NavLink>
        </div>
      </div>

      <div className="categories-container">
        <div
          onClick={() => {
            toggleDrawer();
          }}
          className="categories-container-wrapper">
          <NavLink
            className={
              location.pathname === 'settings'
                ? 'categories-container-wrapper__item categories-container-wrapper__item_active'
                : 'categories-container-wrapper__item'
            }
            to="/settings">
            settings
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default view(Categories);
