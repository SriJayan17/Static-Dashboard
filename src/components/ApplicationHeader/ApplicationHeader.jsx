import React from 'react'
import SideBarIcon from '../../svgs/side_bar.svg?react';
import StarIcon from '../../svgs/star.svg?react';
import ThemeIcon from '../../svgs/theme.svg?react';
import RefreshIcon from '../../svgs/refresh.svg?react';
import NotificationIcon from '../../svgs/bell.svg?react';
import useAppStore from '../../stores/app';
import { useShallow } from 'zustand/shallow';
import Button from '../Button';

import './ApplicationHeader.css';
import SearchBar from '../SearchBar';
import { DASHBOARDS_MAP } from '../SideBar/Navigations/Dashboards/Dashboards.constants';
import { GROUPS, PAGES_MAP } from '../SideBar/Navigations/Navigations.constants';

const ApplicationHeader = () => {
  const { showSideBar, setShowSideBar, showUpdates, setShowUpdates, isDarkThemeEnabled, setIsDarkThemeEnabled, selectedContent } = useAppStore(useShallow((state) => ({
    showSideBar: state.showSideBar,
    setShowSideBar: state.setShowSideBar,

    showUpdates: state.showUpdates,
    setShowUpdates: state.setShowUpdates,

    isDarkThemeEnabled: state.isDarkThemeEnabled,
    setIsDarkThemeEnabled: state.setIsDarkThemeEnabled,

    selectedContent: state.selectedContent,

  })));

  const MAP = selectedContent?.group === GROUPS.DASHBOARDS ? DASHBOARDS_MAP : PAGES_MAP;

  return (
    <header className='applicationHeader'>
      <div className='leftPanel'>
        <Button onClick={() => setShowSideBar(!showSideBar)}>
          <SideBarIcon className='icon' height="20" width="20"/>
        </Button>
        <Button>
          <StarIcon className="icon" height="20" width="20" />
        </Button>
        <div className='trace'>
          <span>{selectedContent?.group}</span>
          <span>{MAP[selectedContent?.content]?.label}</span>
        </div>
      </div>
      <div className='rightPanel'>
        <SearchBar />
        <Button onClick={() => setIsDarkThemeEnabled(!isDarkThemeEnabled)} >
          <ThemeIcon className="icon" height="20" width="20" />
        </Button>
        <Button>
          <RefreshIcon className="icon" height="20" width="20" />
        </Button>
        <Button>
          <NotificationIcon className="icon" height="20" width="20" />
        </Button>
        <Button onClick={() => setShowUpdates(!showUpdates)}>
          <SideBarIcon className="icon" height="20" width="20" />
        </Button>
      </div>
    </header>
  )
}

export default ApplicationHeader