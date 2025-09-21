import React from 'react'
import QuickAccess from './QuickAccess'

import './Navigations.css';
import Dashboards from './Dashboards/Dashboards';
import Pages from './Pages';

const Navigations = () => {
  return (
    <nav className="navigationsContainer">
      <QuickAccess />
      <Dashboards />
      <Pages />
    </nav>
  )
}

export default Navigations