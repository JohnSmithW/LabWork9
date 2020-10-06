import React, { useEffect } from 'react';
import state from '../../store';
import Header from '../../components/Header/Header';
import './Dashboard.css';

export default function Dashboard() {
  useEffect(() => {
    state.activePage = 'dashboard';
  });
  return (
    <>
      <Header />
      <h1 className="dashboard">Dashboard</h1>;
    </>
  );
}
