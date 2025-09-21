import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import useAppStore from '../../../../stores/app';
import { useShallow } from 'zustand/shallow';

import './RevenueTrend.css'

const RevenueTrend = () => {
  const { revenueTrend } = useAppStore(useShallow((state) => ({
    revenueTrend: state.revenueTrend,
  })));

  return (
    <div className='revenueTrendsConatiner'>
      <header>
        <h3>
          Revenue
        </h3>
        <div className='metrics'>
          <div className='dot' />
          <span>Current Week</span>
          <span className='revenue'>
            {revenueTrend.currentWeekCumulative}
          </span>
        </div>
        <div className='metrics'>
          <div className='dot previous' />
          <span>Previous Week</span>
          <span className='revenue'>
            {revenueTrend.previousWeekCumulative}
          </span>
        </div>
      </header>
      <ResponsiveContainer width={600} height={250} className='graphContainer'>
        <LineChart data={revenueTrend.trends}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Previous Week */}
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#9EC4DD"
            strokeWidth={3}
            dot={false}
          />

          {/* Current Week (solid until April, then dashed) */}
          <Line
            type="monotone"
            dataKey="current"
            stroke="#000"
            strokeWidth={3}
            dot={false}
            strokeDasharray="6 6" // dashed
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#333"
            strokeWidth={3}
            dot={false}
            strokeDasharray="0 0" // solid
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    
  )
}

export default RevenueTrend