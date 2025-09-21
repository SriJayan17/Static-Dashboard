import React, { useEffect, useState } from 'react'
import TableGenerator from '../../../components/TableGenerator'
import useAppStore from '../../../stores/app'
import { useShallow } from 'zustand/shallow'

import CalendarIcon from '../../../svgs/calendar.svg?react';

import './OrdersTable.css';

const LIMIT = 15;

const STATUS_COLOR_MAP = {
  'In Progress': '#8A8CD9',
  'Pending': '#59A8D4',
  'Complete': '#4AA785',
  'Approved': '#FFC555',
  'Rejected': '#1C1C1C66'

}

const OrdersTable = (props) => {
  const { searchText } = props;

  const { getOrdersData, ordersDataCount } = useAppStore(useShallow((state) => ({
    getOrdersData: state.getOrdersData,
    ordersDataCount: state.ordersDataCount 
  })));

  const [pageInfo, setPageInfo] = useState({
    offset: 0,
    limit: LIMIT,
  });
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const data = getOrdersData({
      ...pageInfo,
      searchText
    });
    setTableData(data);
  }, [pageInfo, searchText]);


  const onAction = (type, payload) => {
    const { value } = payload;
    switch(type) {
      case 'PAGINATION_CHANGE': {
        setPageInfo({
          offset: (value-1)*LIMIT,
          limit: LIMIT
        })
      }
    }
  }

  const tableProps = {
    columns: [
      {
        Header: 'Order Id',
        accessor: 'orderID',
      },
      {
        Header: 'User',
        isCustomCell: true,
        Cell: ({ user }) => (
          <div className='user'>
            <img src={user.avatar} height={20} width={20}/>
            <span>{user.name}</span>
          </div>
        )
      },
      {
        Header: 'Project',
        accessor: 'project',
        
      },
      {
        Header: 'Address',
        accessor: 'address',
      },
      {
        Header: 'Date',
        isCustomCell: true,
        Cell: ({ date }) => (
          <div className='date'>
            <CalendarIcon className="icon" height="20" width="20" />
            {date}
          </div>
        )
      },
      {
        Header: 'Status',
        isCustomCell: true,
        Cell: ({ status }) => (
          <div className='status'>
            <div className='dot' style={{ background: STATUS_COLOR_MAP[status] }}/>
            <span style={{ color: STATUS_COLOR_MAP[status] }}>{status}</span>
          </div>
        )
      },
    ],
    data: tableData,
    limit: LIMIT,
    totalRows: ordersDataCount,
    withCheckBox: true,
    onAction,
  }
  return (
    <TableGenerator {...tableProps} className='tableWrapper' />
  )
}

export default OrdersTable