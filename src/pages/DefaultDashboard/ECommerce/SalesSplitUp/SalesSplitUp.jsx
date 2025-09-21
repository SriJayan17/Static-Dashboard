import React, { useMemo } from 'react'
import useAppStore from '../../../../stores/app';
import { useShallow } from 'zustand/shallow';
import { PieChart, Pie, Cell } from 'recharts';

import './SalesSplitUp.css';

const SalesSplitUp = () => {
  const { salesData } = useAppStore(useShallow((state) => ({
    salesData: state.salesData,
  })));

  const sum = useMemo(() => salesData.reduce((acc, data) => acc + data.value, 0), [salesData]);

  const CustomLabel = ({ payload: { value }}) => {
  // const { cx, cy } = viewBox;
  return `${(value*100/sum).toFixed(2)} %`
};

  return (
    <div className='salesDataContainer'>
      <header>
        Total Sales
      </header>
      <PieChart width={250} height={200} className='chartContainer'>
          <Pie
            data={salesData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            label={CustomLabel}
            labelLine={false}
          >
            {salesData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        <div className='legends'>
          {salesData.map((item) => (
            <>
              <div className='item'>
                <span style={{ backgroundColor: item.color }} className='dot'></span>
                <span>{item.name}</span>
              </div>
              <div>
                <span>${item.value.toFixed(2)}</span>
              </div>
            </>
          ))}
        </div>
    </div>
  )
}

export default SalesSplitUp