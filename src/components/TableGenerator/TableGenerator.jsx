import React, { useEffect, useMemo, useState } from 'react'
import Button from '../Button';

import LeftIcon from '../../svgs/left.svg?react';
import RightIcon from '../../svgs/right.svg?react';

import './TableGenerator.css';

const TableGenerator = (props) => {
  const {
    columns,
    data,
    withCheckBox,
    className,
    onAction,
    totalRows,
    limit
  } = props;

  const [tableColumns, setTableColumns] = useState(columns);
  const [rowsSelected, setRowsSelected] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    onAction('PAGINATION_CHANGE', { value: currentPage })
  }, [currentPage]);

  const allRowsIds = useMemo(() => data.map(({ id }) => id), [data]);

  const maxPage = Math.ceil(totalRows/limit);

  const onSelectAllToggle = (e) => {
    if (e.target.checked) {
      setRowsSelected(allRowsIds);
    } else {
      setRowsSelected([]);
    }
  }

  const onSelectToggle = (e, id) => {
    if (e.target.checked) {
      setRowsSelected(state => [ ...state, id ]);
    } else {
      setRowsSelected(state => state.filter(i => i !== id));
    }
  }

  useEffect(() => {
    setTableColumns([
      {
        Header: <input type="checkbox" onChange={onSelectAllToggle}/>,
        Cell: ({ id }) => (
          <input 
            type="checkbox" 
            checked={rowsSelected.includes(id)}
            onChange={(e) => onSelectToggle(e, id)} 
          />
        ),
        isCustomCell: true,
      },
      ...columns,
    ])
  }, [withCheckBox, columns]);

  return (
    <div className={`tableContainer ${className}`}>
      <table>
        <thead>
          {tableColumns.map(column => (
            <th>{column.Header}</th>
          ))}
        </thead>
        <tbody>
          {data.map(row => (
            <tr>
                {tableColumns.map(({ isCustomCell, Cell, accessor }) => (
                  <td>
                    <div className='cell'>
                      {isCustomCell ? <Cell key={row.id} {...row} /> : row[accessor]?.toString()}
                    </div>
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        <Button disabled={currentPage===1} onClick={() => setCurrentPage(curr => curr-1)}>
          <LeftIcon className="icon" height="20" width="20" />
        </Button>
        {Array(maxPage).fill(0).map((_, index) => (
          <Button onClick={() => setCurrentPage(index+1)}>{index + 1}</Button>
        ))}
        <Button disabled={currentPage===maxPage} onClick={() => setCurrentPage(curr => curr+1)}>
          <RightIcon className="icon" height="20" width="20" />
        </Button>
      </div>
    </div>
  )
}

export default TableGenerator