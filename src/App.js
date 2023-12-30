import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [searchString, setSearchString] = useState('');

  return (
    <React.Fragment>
    <div className='bg-img'></div>
    <div className='content'>

      <header>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='banner'>
          <span className='banner-name'>StRinGed</span>  
          <div className='banner-name-definition'>
            <p><span style={{fontStyle: 'italic'}}>adjectve:</span><br />
              1: fitted with strings<br />
              2: produced or sounded by strings<br />
              3. made for the shredding of riffs 
              </p>
          </div>
        </div>

        
        <div className='nav fade-in'>
          <div className='dot'></div>
          <div className='nav-btn'>Home</div>
          <div className='dot'></div>
          <div className='nav-btn'>Saved Music</div>
          <div className='dot'></div>
          <div className='nav-btn'>Explore</div>
          <div className='dot'></div>
        </div>
      </header>

      <div className='explore-title fade-in'>Explore</div>
      <div className='explore-blurb fade-in'>Try something new or jam to a favorite</div>

      <div className='search-box fade-in'>
        <input type='text' name='search's
          placeholder='Enter song or artist name'
          onChange={(e) => setSearchString(e.target.value)}
        />
        <div className='btn'>Search</div>
        <div className='btn'>Filters</div>
      </div>

    </div>
    </React.Fragment>
  );

}

export default App;
