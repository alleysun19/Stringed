import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Filter from './Filter'

function App() {

  const [searchString, setSearchString] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  let filters = '';
  let filtersButtonOpacity = '';

  const showFiltersOnClick = () => {
    setShowFilters(!showFilters);
  }

  if (showFilters) {
    filtersButtonOpacity = { opacity: '1' };
    filters = <div className='filters-container'>
      <Filter title="Difficulty" type="checkboxes"
        options={["Just Starting", "Beginner", "Intermediate", "Advanced", "Expert"]} />
      <Filter title="Tuning" type="checkboxes"
        options={["Standard", "Drop D", "1/2 Step Down", "Drop C", "Drop Db"]} />
      <Filter title="Decade" type="checkboxes"
        options={["2020s", "2010s", "2000s", "1990s", "1980s"]} />
      <Filter title="Genre" type="checkboxes"
        options={["Rock", "Metal", "Pop", "Punk", "Country"]} />
      <Filter title="Type" type="checkboxes"
        options={["Tab", "Chord"]} />
      <Filter title="Instrument" type="checkboxes"
        options={["Guitar - Electric", "Guitar - Acoustic"]} />
    </div>
  }

  return (
    <React.Fragment>
      
      <div className='bg-img'></div>
      <div className='content'>

        <header>
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

        <div className='explore-title'>Explore</div>
        <div className='explore-blurb fade-in'>Try something new or jam to a favorite</div>

        <div className='search-box fade-in'>
          <input type='text' name='search'
            placeholder='Enter song or artist name'
            onChange={(e) => setSearchString(e.target.value)} />
          <div className='btn'>Search</div>
          <div className={`btn filter-btn ${showFilters ? 'show-filters' : ''}`}
            onClick={() => { showFiltersOnClick() }}>Filters</div>
          {filters}
        </div>

      </div>

    </React.Fragment>
  );

}

export default App;
