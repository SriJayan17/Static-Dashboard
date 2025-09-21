import React from 'react'
import { useShallow } from 'zustand/shallow'
import useAppStore from '../../../stores/app';

import './UserInfo.css';

const UserInfo = () => {
  const { userDetails } = useAppStore(useShallow(state => ({
    userDetails: state.userDetails,
  })))
  return (
    <div className='userInfoContainer'>
      <img className='avatar' src={userDetails.avatarUrl} height="24" width="24" />
      <span>{userDetails.firstName + " " + userDetails.lastName}</span>
    </div>
  )
}

export default UserInfo