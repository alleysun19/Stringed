import './Nav.css';
import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../App';


function Nav({ setPage }) {

  const [stickyNav, setStickyNav] = useState(false);
  const navRef = useRef(null);
  const bannerRef = useRef(null);
  const navHeight = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const bannerPos = bannerRef.current.getBoundingClientRect();
        if (bannerPos.bottom <= 0) {

          setStickyNav(true);
        }
        else {
          setStickyNav(false);
        }
      }
    };

    if (navRef.current) {
      const navPos = navRef.current.getBoundingClientRect();

      navHeight.current = navPos.height;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${stickyNav ? 'sticky-nav' : ''}`}>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div ref={bannerRef} className={`banner`} style={{'--nav-height' : `${navHeight.current}px`}}>
        <span className={`banner-name`}>StRinGed</span>
        <div className='banner-name-definition'>
          <span style={{ fontStyle: 'italic' }}>adjectve:</span><br />
          1: fitted with strings<br />
          2: produced or sounded by strings<br />
          3. made for the shredding of riffs

        </div>
      </div>

      <div ref={navRef} className='nav'>
        <div className='dot'></div>
        <div className='nav-btn' onClick={() => setPage(Page.Home)}>Home</div>
        <div className='dot'></div>
        <div className='nav-btn' onClick={() => setPage(Page.Library)}>Library</div>
        <div className='dot'></div>
        <div className='nav-btn' onClick={() => setPage(Page.Explore)}>Explore</div>
        <div className='dot'></div>
      </div>
    </header>
  );

}

export default Nav;
