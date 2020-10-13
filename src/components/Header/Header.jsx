import React from 'react';
import Drawer from '../Drawer/Drawer';
import state from '../../store';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import toggleDrawer from '../../actions/toggleDrawer';
import './Header.css';
import { view } from '@risingstack/react-easy-state';

function Header() {
  return (
    <div className="header">
      <Drawer />
      <BurgerMenu toggleDrawer={toggleDrawer} isDrawerOpen={state.isDrawerOpen} />
    </div>
  );
}

export default view(Header);
