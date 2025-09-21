import React, { useState } from 'react'
import Actions from './Actions'

import './OrdersList.css';
import OrdersTable from './OrdersTable/OrdersTable';

const OrdersList = () => {
  const [searchText, setSearchText] = useState('');
  
  return (
    <div className='ordersList'>
      <header>
        Order List
      </header>
      <Actions searchText={searchText} setSearchText={setSearchText}/>
      <OrdersTable searchText={searchText} />
    </div>
  )
}

export default OrdersList