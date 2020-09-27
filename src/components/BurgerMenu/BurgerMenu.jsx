import React from 'react';
import state from '../../store';
import { PropTypes } from 'prop-types';
import './BurgerMenu.css';

export default function BurgerMenu(props) {
  return (
    <React.StrictMode>
      <div onClick={props.toggleDrawer} className={props.isDrawerOpen ? 'menu menu_active' : 'menu'}>
        <div className="menu-container">
          <div className="menu-container__line" />
        </div>
      </div>
    </React.StrictMode>
  );
}

BurgerMenu.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};
