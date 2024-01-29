import './Filter.css';
import React, { useEffect, useState, useRef } from 'react';

const Filter = ({ title, options, order }) => {

    const flexRowQuery =
        `(width > 565px) ${title.toLowerCase() !== "title" ? ("and (width < " + (150 * (order + 1)) + "px)") : ''}`;
    const flexSmallScreenQuery = `(width < 565px)`;

    const [flexRow, setFlexRow] = useState(false);
    const [flexSmallScreen, setFlexSmallScreen] = useState(false);

    useEffect(() => {

        window
            .matchMedia(flexSmallScreenQuery)
            .addEventListener('change', e => setFlexSmallScreen(e.matches));

        window
            .matchMedia(flexRowQuery)
            .addEventListener('change', e => setFlexRow(e.matches));

        if (window.matchMedia(flexRowQuery).matches) {
            setFlexSmallScreen(true);
        }
        else if (window.matchMedia(flexSmallScreenQuery).matches) {
            setFlexRow(true);
        }

    }, []);

    let filterOptions = [];
    options.forEach((element, index) => {
        filterOptions.push(
            <div className='option'>
                <input type="checkbox" id={`${title}Choice${index}`} name={title} value={element} />
                <label htmlFor="Choice1">{element}</label>
            </div>
        );
    });

    return (
        <form className={`filter ${title.toLowerCase()} ${(flexRow) ? 'row' : ''}`}
            style={flexSmallScreen ? { flexBasis: '30%' } : {}}>
            <div className='title'>{title}</div>
            <div className='options'>
                {filterOptions}
            </div>
        </form >
    );

}

export default Filter;
