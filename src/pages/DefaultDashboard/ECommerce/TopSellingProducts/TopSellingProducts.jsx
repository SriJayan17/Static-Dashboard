import React from 'react'
import useAppStore from '../../../../stores/app';
import { useShallow } from 'zustand/shallow';

import './TopSellingProducts.css';

const TopSellingProducts = () => {
  const { productsData } = useAppStore(useShallow((state) => ({
    productsData: state.productsData,
  })));
  return (
    <div className='topSellingProductsContainer'>
      <header>
        Top Selling Products
      </header>
      <div>
        <table>
          <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </thead>
          <tbody>
            {productsData.map(product => (
              <tr>
                <td>{product?.name}</td>
                <td>${product?.price}</td>
                <td>{product?.quantity}</td>
                <td>${product?.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TopSellingProducts