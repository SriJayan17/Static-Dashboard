import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import useAppStore from '../../../../stores/app';
import { useShallow } from 'zustand/shallow';

import './ProjectionVsActual.css';

const ProjectionVsActual = () => {
  const { revenueProjectionResult } = useAppStore(useShallow((state) => ({
    revenueProjectionResult: state.revenueProjectionResult,
  })));

  return (
    <div className='projectionsVsActualContainer'>
      <header>
        Projections vs Actuals
      </header>
      <ResponsiveContainer width={"100%"} height={230} className='graphContainer'>
        <BarChart data={revenueProjectionResult} barSize={40}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="actual" stackId="a" fill="#9EC4DD" radius={[0, 0, 0, 0]} />
          <Bar dataKey="projection" stackId="a" fill="#CFE3EF" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProjectionVsActual