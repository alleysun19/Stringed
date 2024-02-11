import './Searchbox.css';
import React, { useState, useEffect } from 'react';
import Filter from './Filter'
import filterList from '../assets/filtersList'

function Searchbox() {

    const [searchString, setSearchString] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    let filters = [];

    const showFiltersOnClick = () => {
        setShowFilters(!showFilters);
    }

    if (showFilters) {
        for (let [index, filter] of filterList.entries()) {
            if (filter.hasOwnProperty('filterTitle') && filter.hasOwnProperty('filterOptions')) {
                filters.push(
                    <Filter key={index}
                        title={filter.filterTitle}
                        options={filter.filterOptions}
                        order={index}
                        />
                )
            }
        }
    }
    return (
        <div className={'search-box'}>

            <input type='text' name='search'
                placeholder='Enter song or artist name'
                onChange={(e) => setSearchString(e.target.value)} />

            <div className='btn'>Search</div>

            <div className={`btn filter-btn ${showFilters ? 'show-filters' : ''}`}
                onClick={() => { showFiltersOnClick() }}>Filters</div>
                
            <div className='filters-container'>
                {filters}
            </div>

        </div>

    );
}

export default Searchbox;
