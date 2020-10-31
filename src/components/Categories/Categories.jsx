import React from 'react';
import { NavLink } from 'react-router-dom';
import toggleDrawer from '../../actions/toggleDrawer';
import './Categories.css';

export default function Categories() {
  return (
    <>
      <div className="categories-container">
        <div onClick={toggleDrawer} className="categories-container-wrapper">
          <NavLink activeClassName="categories-container-wrapper__item_active" className="categories-container-wrapper__item" to="/dashboard">
            dashboard
          </NavLink>
        </div>
      </div>

      <div className="categories-container">
        <div onClick={toggleDrawer} className="categories-container-wrapper">
          <NavLink activeClassName="categories-container-wrapper__item_active" className="categories-container-wrapper__item" to="/profile">
            profile
          </NavLink>
        </div>
      </div>

      <div className="categories-container">
        <div onClick={toggleDrawer} className="categories-container-wrapper">
          <NavLink activeClassName="categories-container-wrapper__item_active" className="categories-container-wrapper__item" to="/settings">
            settings
          </NavLink>
        </div>
      </div>
    </>
  );
}
