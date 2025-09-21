import React, { useMemo } from 'react'
import OrdersList from '../OrdersList'
import SideBar from '../../components/SideBar/SideBar'
import useAppStore from '../../stores/app'
import { useShallow } from 'zustand/shallow'
import ApplicationHeader from '../../components/ApplicationHeader'

import './Base.css';
import ApplicationUpdates from '../../components/ApplicationUpdates'
import { GROUPS, PAGES_MAP } from '../../components/SideBar/Navigations/Navigations.constants'
import { DASHBOARDS_MAP } from '../../components/SideBar/Navigations/Dashboards/Dashboards.constants'

const Base = () => {
  const { showSideBar, showUpdates, selectedContent } = useAppStore(useShallow((state) => ({
    showSideBar: state.showSideBar,
    showUpdates: state.showUpdates,
    selectedContent: state.selectedContent,
  })));

  const ActiveSection = useMemo(() => {
    const MAP = selectedContent?.group === GROUPS.DASHBOARDS ? DASHBOARDS_MAP : PAGES_MAP;
    return MAP[selectedContent?.content]?.Component;
  }, [selectedContent])

  return (
    <div className='basePageContainer'>
      {showSideBar && <SideBar />}
      <main>
        <ApplicationHeader />
        <ActiveSection />
      </main>
      {showUpdates && <ApplicationUpdates />}
      {/* <Router>
        <Routes>
          <Route path='/dashboard' Component={Dashboard} />
          <Route path='/orders-list' Component={OrdersList} />
          <Route path='' element={<Navigate to="/dashboard" replace={true}/>} />
        </Routes>
      </Router> */}
    </div>
  )
}

export default Base