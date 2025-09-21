import React from 'react'
import LossIcon from '../../../../svgs/loss.svg?react';
import GainIcon from '../../../../svgs/gain.svg?react';

import './InfoCard.css';
import useAppStore from '../../../../stores/app';
import { useShallow } from 'zustand/shallow';
import { GROUPS, ORDERS } from '../../../../components/SideBar/Navigations/Navigations.constants';

const InfoCard = (props) => {
  const {
    unit,
    insight,
    percentage,
  } = props;

  const { setSelectedContent } = useAppStore(useShallow((state) => ({
    setSelectedContent: state.setSelectedContent,
  })));

  const onClick = () => {
    if (unit === 'Orders') {
      setSelectedContent({
        group: GROUPS.PAGES,
        content: ORDERS
      })
    }
  }
  return (
    <div className='infoCard' onClick={onClick}>
      <h3>{unit}</h3>
      <div className='metrics'>
        <span className='primary'>{insight}</span>
        <span className='secondary'>
          <span>
            {percentage}
          </span>
          {percentage > 0 ? <GainIcon className="icon" height="20" width="20" /> : <LossIcon className="icon" height="20" width="20" />}
        </span>
      </div>
    </div>
  )
}

export default InfoCard