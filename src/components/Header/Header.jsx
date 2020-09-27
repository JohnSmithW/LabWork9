import React from 'react';
import Drawer from '../Drawer/Drawer';
import Categories from '../Categories/Categories';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <Drawer content={<Categories />} />
    </div>
  );
}

export default Header;
