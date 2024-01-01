import './Filter.css';
import React, { useState } from 'react';

const Filter = ({ title, type, options }) => {

    let filterOptions = [];
    options.forEach((element, index) => {
        filterOptions.push(
            <div className='option'>
                <input type="checkbox" id={`${title}Choice${index}`} name={title} value={element} />
                <label for="Choice1">{element}</label>
            </div>
        );
    });

    return (
        <form className="filter">
            <div className='title'>{title}</div>
            <div className='options'>
                {filterOptions}
            </div>
        </form>
    );

}

export default Filter;
