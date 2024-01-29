import './App.css';
import React, { useEffect, useRef, useState } from 'react';

import Nav from './components/Nav'
import Searchbox from './components/Searchbox'
import Home from './components/Home'


const Page = {
  Home: Symbol("home"),
  SavedMusic: Symbol("savedMusic"),
  Explore: Symbol("explore"),
}

function App() {

  const [currentPage, setCurrentPage] = useState(Page.Explore);

  const initalPageLoad = useRef(true);

  useEffect(() => {
    // Check if this is the first load by seeing if our object exists in local storage
    if (localStorage.getItem('firstLoadDone') === null) {
      // first load - set the flag in local storage to true
      localStorage.setItem('firstLoadDone', 1);
      initalPageLoad.current = true;
    } else {
      // set flag to prevent opening animations
      initalPageLoad.current = false;
    }
  });

  function setPage(newPage) {
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  }

  let page = ''
  let content = '';
  let bgAnimations = '';

  function displayHomePage() {
    bgAnimations = 'hide-bg-image';
    content = <Home />;
  }

  function displaySavedMusicPage() {

  }

  function displayExplorePage() {
    bgAnimations = initalPageLoad.current ? 'blur-bg-image' : 'show-bg-image';
    content =
      <React.Fragment>
        <div className={`explore-title ${initalPageLoad.current ? 'bring-letters-together' : ''}`}>Explore</div>
        <div className={`explore-blurb ${initalPageLoad.current ? 'page-load-fade-in' : ''}`}>Try something new or jam to a favorite</div>
        <Searchbox initalPageLoad={initalPageLoad.current} />
      </React.Fragment>
  }

  switch (currentPage) {
    case Page.Home:
      displayHomePage();
      break;
    case Page.SavedMusic:
      break;
    case Page.Explore:
      page = 'explore';
    default:
      displayExplorePage();
      break;
  }

  return (
    <div className={`page ${page}`}>

      <Nav setPage={setPage} />

      <div className={`background ${bgAnimations}`}></div>

      <div className='content'>
        {content}
      </div>

    </div>
  );

}

export { App, Page };
