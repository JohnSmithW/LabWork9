import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import handleDrawer from '../../actions/handleDrawer';
import Categories from '../Categories/Categories';
import './Drawer.css';

function Drawer() {
  return (
    <div>
      <div onClick={handleDrawer} className={state.isOpen ? 'menu menu_active' : 'menu'}>
        <div className="menu-container">
          <div className="menu-container__line" />
        </div>
      </div>
      <Categories />
    </div>
  );
}

export default view(Drawer);
