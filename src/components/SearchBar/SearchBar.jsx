import React from 'react'
import SearchIcon from '../../svgs/search.svg?react';
import ShortCutIcon from '../../svgs/shortcut.svg?react';
import './SearchBar.css';

const SearchBar = (props) => {
  const { value, onChange } = props;

  return (
    <div className='searchBar'>
      <SearchIcon className="icon" height="20" width="20" />
      <input 
        placeholder='Search'
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <ShortCutIcon className="icon" height="20" width="20" />
    </div>
  )
}

export default SearchBar