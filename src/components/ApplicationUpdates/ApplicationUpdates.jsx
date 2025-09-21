import React from 'react'
import Notification from './Notifications';

import './ApplicationUpdates.css';
import Contacts from './Contacts';
import Activities from './Activities';

const ApplicationUpdates = () => {
  return (
    <div className='applicationUpdatesContainer'>
      <Notification />
      <Activities />
      <Contacts />
    </div>
  )
}

export default ApplicationUpdates;