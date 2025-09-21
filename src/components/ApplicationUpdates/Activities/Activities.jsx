import React from 'react'
import useAppStore from '../../../stores/app'
import { useShallow } from 'zustand/shallow'
import { getRelativeTimeDifference } from '../../../utils/time';

import './Activities.css';

const Activities = () => {
  const { activities } = useAppStore(useShallow((state) => ({
    activities: state.activities,
  })));

  return (
    <section className='activitiesContainer'>
      <header>
        Activities
      </header>
      <div className='activities'>
        {activities.map(activity => (
          <div className='activity'>
            <div className='imageContainer'>
              <img src={activity?.avatarUrl} height="24" width="24" />
            </div>
            <div className='content'>
              <span>
                {activity?.content}
              </span>
              <span className='time'>
                {getRelativeTimeDifference(activity?.receivedAt)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Activities