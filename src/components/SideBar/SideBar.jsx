import React from 'react'
import Navigations from './Navigations';
import UserInfo from './UserInfo';
import './SideBar.css';

const SideBar = () => {
  return (
    <aside className='sideBarContainer'>
      <UserInfo />
      <Navigations />
    </aside>
  )
}

export default SideBar;
