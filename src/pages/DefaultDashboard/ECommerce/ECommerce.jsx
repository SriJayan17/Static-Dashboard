import React from 'react'
import useAppStore from '../../../stores/app';
import { useShallow } from 'zustand/shallow';
import InfoCard from './InfoCard/InfoCard';

import './Ecommerce.css';
import ProjectionVsActual from './ProjectionsVsActual';
import RevenueTrend from './RevenueTrend/RevenueTrend';
import SalesSplitUp from './SalesSplitUp/SalesSplitUp';
import TopSellingProducts from './TopSellingProducts';
import RevenueTrendByLocation from './RevenueTrendByLocation/RevenueTrendByLocation';

const ECommerce = () => {
  const { eCommerceData } = useAppStore(useShallow((state) => ({
    eCommerceData: state.eCommerceData,
  })));

  return (
    <div className='ecommerceContainer'>
      <header>eCommerce</header>
      <div className='sections'>
        <section>
          <div className='infoCards'>
            {eCommerceData.map((data) => <InfoCard {...data} />)}
          </div>
          <div className='barGraph'>
            <ProjectionVsActual />
          </div>
        </section>
        <section>
          <RevenueTrend />
          <RevenueTrendByLocation />
        </section>
        <section>
          <TopSellingProducts />
          <SalesSplitUp />
        </section>
      </div>
    </div>
  )
}

export default ECommerce