import React from 'react'
import useAppStore from '../../../stores/app'
import { useShallow } from 'zustand/shallow'
import { getRelativeTimeDifference } from '../../../utils/time';
import { ICON_MAP } from './Notification.constants';

import './Notification.css';

const Notification = () => {
  const { notifications } = useAppStore(useShallow((state) => ({
    notifications: state.notifications,
  })));

  return (
    <section className='notificationContainer'>
      <header>
        Notification
      </header>
      <div className='notifications'>
        {notifications.map(notification => {
          const Icon = ICON_MAP[notification?.type]
          return (
            <div className='notification'>
              <Icon height="20" width="20"/>
              <div className='content'>
                <span>
                  {notification?.content}
                </span>
                <span className='time'>
                  {getRelativeTimeDifference(notification?.receivedAt)}
                </span>
              </div>
            </div>
         )
        })}
      </div>
    </section>
  )
}

export default Notification