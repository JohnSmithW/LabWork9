import React, { useEffect } from 'react';
import state from '../../store';
import './Profile.css';

export default function Profile() {
  useEffect(() => {
    state.activePage = 'profile';
  });
  return <h1 className="profile">Profile</h1>;
}
