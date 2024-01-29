import './Nav.css';
import React from 'react';
import { Page } from '../App';


function Nav({ setPage }) {

  return (
    <div className='header'>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='banner'>
        <span className='banner-name'>StRinGed</span>
        <div className='banner-name-definition'>
          <span style={{ fontStyle: 'italic' }}>adjectve:</span><br />
          1: fitted with strings<br />
          2: produced or sounded by strings<br />
          3. made for the shredding of riffs

        </div>
      </div>

      <div className='nav page-load-fade-in'>
        <div className='dot'></div>
        <div className='nav-btn' onClick={() => setPage(Page.Home)}>Home</div>
        <div className='dot'></div>
        <div className='nav-btn' onClick={() => setPage(Page.SavedMusic)}>Saved Music</div>
        <div className='dot'></div>
        <div className='nav-btn' onClick={() => setPage(Page.Explore)}>Explore</div>
        <div className='dot'></div>
      </div>
    </div>
  );

}

export default Nav;
