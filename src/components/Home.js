import './Home.css'
// import React , { Fragment } from 'react';
import SongList from './SongList'
import flameIcon from '../assets/images/streak-flame-icon.svg';
import pickHeader from "../assets/images/clipmayank-d-wk0NOyxXXZE-unsplash.jpg";
import trendingHeader from "../assets/images/cropjimmy-alvarez-Ms8qT-qagCY-unsplash.jpg";

import React, { useState, useRef, useEffect, createRef } from 'react';

function Home() {

    const username = 'alleysun19'
    const dayStreak = 6;

    const [clipFact, setClipFact] = useState(false);
    const [expandFact, setExpandFact] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const checkClipping = () => {
            if (textRef.current) {
                // Check if the content is clipped by comparing scrollHeight and clientHeight
                const isTextClipped = textRef.current.scrollHeight > textRef.current.clientHeight ? true : false;
                console.log(`scrollHeight ${textRef.current.scrollHeight} clientHeight ${textRef.current.clientHeight}`);
                setClipFact(isTextClipped);
            }
        };

        // Trigger check on mount and resize
        checkClipping();
        window.addEventListener('resize', checkClipping);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkClipping);
        };
    }, []);

    return (
        <React.Fragment>

            <div className='homepage-banner'>
                <img src={flameIcon}></img>
                <div>
                    Welcome <span className='link'>@{username}</span>
                    <div className='streak'>{dayStreak} day streak</div>
                </div>
            </div>

            <div className={`fun-fact`}>
                <div className='fact-name'>
                    <h4>- Learn The Ledgends -</h4>
                    <div>Eddie Van Halen</div>
                </div>
                <div className={`fact-text-container ${clipFact ? 'clip' : ''} ${expandFact ? 'expand' : ''}`}>
                    <div ref={textRef} className={`fact-text`}>
                        Eddie once had a fake pickup installed in the neck position. It wasn’t even connected to the circuit. This was one of many techniques Van Halen used to prevent others from stealing his sound.
                    </div>
                    <div className='show-more' onClick={() => setExpandFact(!expandFact)}>
                        {`${clipFact ? (!expandFact ? 'Show More' : 'Show Less') : ''}`}
                    </div>
                </div>
            </div>

            <div className='songs'>
                <SongList header={`url(${pickHeader})`} title='Pick Up Where You Left Off'/>
                <SongList header={`url(${trendingHeader})`} title='Trending Tabs'/>
            </div>

        </React.Fragment>
    );
}

export default Home;