import './App.css';
import React, { useEffect, useRef, useState } from 'react';

import Nav from './components/Nav'

import Explore from './components/Explore'
import Home from './components/Home'
import Library from './components/Library'


const Page = {
  Home: Symbol("home"),
  Library: Symbol("library"),
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

  function changePage(newPage) {
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  }

  let content = '';

  switch (currentPage) {
    case Page.Home:
      content = <Home />;
      break;
    case Page.Library:
      content = <Library />;
      break;
    case Page.Explore:
    default:
      content = <Explore />;
      break;
  }

  return (

    <div className={`${initalPageLoad.current ? 'init' : ''}  ${currentPage.description}-page`}>

      <Nav setPage={changePage} />

      <div className={'bg-overlays'}>
        <div className='bg-explore'></div>
        <div className={`bg-library ${currentPage === Page.Library ? 'show' : 'hide'}`}>
          <div className='bg-half'></div>
          <div className='bg-half'></div>
        </div>
      </div>

      <div className='content'>
        {content}
      </div>

    </div>

  );

}

export { App, Page };
