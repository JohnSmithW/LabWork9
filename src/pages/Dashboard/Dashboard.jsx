import React, { useEffect } from 'react';
import state from '../../store';
import './Dashboard.css';

export default function Dashboard() {
  useEffect(() => {
    state.activePage = 'dashboard';
  });
  return <h1 className="dashboard">Dashboard</h1>;
}
