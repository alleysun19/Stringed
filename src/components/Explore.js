import './Explore.css';
import React, { useState, useEffect, useRef } from 'react';
import Searchbox from './Searchbox'


function Explore() {


    return (
        <React.Fragment>
            <div className='explore-title'>Explore</div>
            <div className='explore-blurb'>Try something new or jam to a favorite</div>
            <Searchbox />
        </React.Fragment>
    );

}

export default Explore;
