import React from 'react';
import Drawer from '../Drawer/Drawer';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import toggleDrawer from '../../actions/toggleDrawer';
import './Header.css';
import Categories from '../Categories/Categories';

function Header() {
  return (
    <div className="header">
      <Drawer content={<Categories />} />
      <BurgerMenu toggleDrawer={toggleDrawer} isDrawerOpen={state.isDrawerOpen} />
    </div>
  );
}

export default view(Header);
