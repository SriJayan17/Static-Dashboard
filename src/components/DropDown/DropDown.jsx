import React, { useState } from 'react'
import GroupIcon from '../../svgs/group.svg?react';
import OpenedIcon from '../../svgs/opened.svg?react';
import Button from '../Button';

import './DropDown.css';

const DropDown = (props) => {
  const { Overlay, label } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='dropdownContainer'>
      <div className='header' onClick={() => setIsOpen(state => !state)}>
        {isOpen ? <OpenedIcon className="icon" height="20" width="20" /> : <GroupIcon className="icon" height="20" width="20" />}
        
        <span>{label}</span>
      </div>
      {isOpen && Overlay}
    </div>
  )
}

export default DropDown