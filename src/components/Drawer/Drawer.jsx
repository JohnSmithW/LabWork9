import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import './Drawer.css';

function Drawer({ content }) {
  return <div className={state.isDrawerOpen ? 'categories categories_active' : 'categories'}>{content}</div>;
}

export default view(Drawer);
