import React from 'react'
import { GROUPS, PAGES_GROUP, PAGES_MAP } from '../Navigations.constants'
import DropDown from '../../../../components/DropDown'

import './Pages.css';
import Button from '../../../Button';
import useAppStore from '../../../../stores/app';
import { useShallow } from 'zustand/shallow';

const Pages = () => {
  const { setSelectedContent } = useAppStore(useShallow((state) => ({
    setSelectedContent: state.setSelectedContent,
  })))
  return (
    <div className='pagesContainer'>
      <header>
        Pages
      </header>
      <div className='pagesGroup'>
        {PAGES_GROUP.map(group => (
          <DropDown 
            label={(
              <div className='groupName'>
                <group.Icon className="icon" height="20" width="20"/>
                <span>{group?.label}</span>
              </div>
            )} 
            Overlay={
              <div className='pages'>
                {group?.pages.map(page => (
                  <Button 
                    className='page'
                    onClick={() => setSelectedContent({
                      group: GROUPS.PAGES,
                      content: page,
                    })}
                  >
                    {PAGES_MAP[page]?.label}
                  </Button>
                ))}
              </div>
            } 
          />
        ))}
      </div>
    </div>
  )
}

export default Pages