import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import handleDrawer from '../../actions/handleDrawer';
import handleLink from '../../actions/handleLink';
import './Categories.css';

function Categories() {
  return (
    <div className={state.isOpen ? 'categories categories_active' : 'categories'}>
      {state.links.map((link) => {
        return (
          <div key={link.id} className={state.isOpen ? 'categories-container_active' : 'categories-container'}>
            <div
              onClick={() => {
                handleDrawer();
                handleLink(link.id);
              }}
              className="categories-container-wrapper">
              <NavLink
                className={
                  link.isActive
                    ? 'categories-container-wrapper__item categories-container-wrapper__item_active'
                    : 'categories-container-wrapper__item'
                }
                to={link.url}>
                {link.label}
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default view(Categories);
