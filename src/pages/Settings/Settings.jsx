import React, { useEffect } from 'react';
import state from '../../store';
import Header from '../../components/Header/Header';
import './Settings.css';

export default function Settings() {
  useEffect(() => {
    state.activePage = 'settings';
  });
  return (
    <>
      <Header />
      <h1 className="settings">Settings</h1>
    </>
  );
}
