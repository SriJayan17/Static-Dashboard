import React from 'react'
import Button from '../../../components/Button'

import AddIcon from '../../../svgs/add.svg?react';
import FilterIcon from '../../../svgs/filter.svg?react';
import SortIcon from '../../../svgs/sort.svg?react';

import './Actions.css'
import SearchBar from '../../../components/SearchBar';

const Actions = ({ setSearchText, searchText }) => {
  return (
    <div className='actionsContainer'>
      <div>
        <Button>
          <AddIcon className="icon" height="20" width="20" />
         </Button>
        <Button>
          <FilterIcon className="icon" height="20" width="20" />
         </Button>
        <Button>
          <SortIcon className="icon" height="20" width="20" />
         </Button>
      </div>
      <div>
        <SearchBar value={searchText} onChange={setSearchText} />
      </div>
    </div>
  )
}

export default Actions