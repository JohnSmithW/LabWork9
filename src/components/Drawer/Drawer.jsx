import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { NavLink } from 'react-router-dom';
import state from '../../store';
// import Categories from '../Categories/Categories'
import toggleDrawer from '../../actions/toggleDrawer';
import './Drawer.css';

function Drawer() {
  return (
    <div className={state.isDrawerOpen ? 'categories categories_active' : 'categories'}>
      <div className="categories-container">
        <div
          onClick={() => {
            toggleDrawer();
          }}
          className="categories-container-wrapper">
          <NavLink activeClassName="categories-container-wrapper__item_active" className="categories-container-wrapper__item" to="/dashboard">
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
          <NavLink activeClassName="categories-container-wrapper__item_active" className="categories-container-wrapper__item" to="/profile">
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
          <NavLink activeClassName="categories-container-wrapper__item_active" className="categories-container-wrapper__item" to="/settings">
            settings
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default view(Drawer);
