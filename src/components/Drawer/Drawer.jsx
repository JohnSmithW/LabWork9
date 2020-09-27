import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import { PropTypes } from 'prop-types';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import toggleDrawer from '../../actions/toggleDrawer';
import './Drawer.css';

function Drawer(props) {
  return (
    <React.StrictMode>
      <div>
        <BurgerMenu toggleDrawer={toggleDrawer} isDrawerOpen={state.isDrawerOpen} />
        {props.content}
      </div>
    </React.StrictMode>
  );
}

Drawer.propTypes = {
  content: PropTypes.element.isRequired,
};

export default view(Drawer);
