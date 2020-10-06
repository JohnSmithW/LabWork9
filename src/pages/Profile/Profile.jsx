import React, { useEffect } from 'react';
import state from '../../store';
import Header from '../../components/Header/Header';
import './Profile.css';

export default function Profile() {
  useEffect(() => {
    state.activePage = 'profile';
  });
  return (
    <>
      <Header />
      <h1 className="profile">Profile</h1>
    </>
  );
}
