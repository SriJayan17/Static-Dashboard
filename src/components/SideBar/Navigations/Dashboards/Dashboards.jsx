import React from 'react';
import './Dashboards.css';
import { DASHBOARDS_MAP } from './Dashboards.constants';
import GroupIcon from '../../../../svgs/group.svg?react'
import { useShallow } from 'zustand/shallow';
import Button from '../../../../components/Button';
import useAppStore from '../../../../stores/app';
import { GROUPS } from '../Navigations.constants';

const Dashboards = () => {
  const { selectedContent, setSelectedContent } = useAppStore(useShallow((state) => ({
    selectedContent: state.selectedContent,
    setSelectedContent: state.setSelectedContent,
  })));

  return (
    <div className='dashboardsContainer'>
      <header>
        Dashboards
      </header>
      <div className='navigationContainer'>
        {Object.values(DASHBOARDS_MAP).map(({
          id, Icon, label, hasSubDashboards, 
        }) => (
          <Button 
            className={`navigation ${selectedContent.group === GROUPS.DASHBOARDS && selectedContent.content === id ? 'active' : ''}`}
            onClick={() => setSelectedContent({ group: GROUPS.DASHBOARDS, content: id })}
          >
            {hasSubDashboards && <GroupIcon className="icon" height="20" width="20" /> }
            <Icon height="20" width="20" className={!hasSubDashboards ? 'icon moveRight' : 'icon '} />
            <span>{label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Dashboards;