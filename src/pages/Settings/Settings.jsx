import React, { useEffect } from 'react';
import state from '../../store';
import './Settings.css';

export default function Settings() {
  useEffect(() => {
    state.activePage = 'settings';
  });
  return <h1 className="settings">Settings</h1>;
}
