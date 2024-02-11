import './Home.css'

import SongList from './SongList'
import flameIcon from '../assets/images/streak-flame-icon.svg';
import pickHeader from "../assets/images/clipmayank-d-wk0NOyxXXZE-unsplash.jpg";
import trendingHeader from "../assets/images/cropjimmy-alvarez-Ms8qT-qagCY-unsplash.jpg";

import React, { useState, useRef, useEffect } from 'react';

function Home() {

    const username = 'alleysun19'
    const dayStreak = 6;

    const [clipFact, setClipFact] = useState(false);
    const [expandFact, setExpandFact] = useState(false);

    const factRef = useRef(null);
    const bannerRef = useRef(null);
    const iconRef = useRef(null);

    const [flamesAnimated, setFlamesAnimated] = useState(
        <img ref={iconRef} className='flame-icon'
            alt='flameIcon' src={flameIcon} style={{ '--i': 0 }}></img>
    );

    useEffect(() => {
        const checkClipping = () => {
            if (factRef.current) {
                // Check if the content is clipped by comparing scrollHeight and clientHeight
                const isTextClipped = factRef.current.scrollHeight > factRef.current.clientHeight ? true : false;
                setClipFact(isTextClipped);
            }
        };

        // Trigger check on mount and resize
        checkClipping();
        window.addEventListener('resize', checkClipping);

        // Setup for welcome banner flame animation
        if (bannerRef.current && iconRef.current) {
            const containerWidth = bannerRef.current.getBoundingClientRect().width;
            const iconWidth = iconRef.current.getBoundingClientRect().width;

            if (iconWidth > 0 && typeof containerWidth === 'number' && typeof iconWidth === 'number') {

                // how many flame icons needed to span the container width
                const numFlames = Math.ceil(containerWidth / iconWidth);

                let flamesArr = [];

                // go backwards because we want the first flame to fade in last (animation delay is based on i)
                for (let i = numFlames; i > 0; i--) {
                    flamesArr.push(
                        <img
                            key={i}
                            className={'flame-icon'}
                            alt='flameIcon'
                            src={flameIcon}
                            style={{ '--i': i }}>
                        </img>);
                }

                setFlamesAnimated([...flamesArr]);
            }
        }

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkClipping);
        };
    }, []);

    let flames = '';

    if (flamesAnimated === null || !Array.isArray(flamesAnimated)) {
        flames = <img ref={iconRef} className='flame-icon' alt='flameIcon' src={flameIcon} style={{ '--i': 0 }}></img>
    }
    else {
        flames = [...flamesAnimated];
    }

    return (
        <React.Fragment>

            <div ref={bannerRef} className='homepage-banner'>
                {flames}
                <div className='welcome'>
                    <div className='welcome-message'>Welcome back <span className='link user'>@{username}</span></div>
                    <div className='streak'>
                        {dayStreak} day streak
                    </div>
                </div>
            </div>

            <div className={`fun-fact`}>
                <div className='fact-name'>
                    <h4>- Learn The Ledgends -</h4>
                    <div>Eddie Van Halen</div>
                </div>
                <div className={`fact-text-container ${clipFact ? 'clip' : ''} ${expandFact ? 'expand' : ''}`}>
                    <div ref={factRef} className={`fact-text`}>
                        Eddie once had a fake pickup installed in the neck position. It wasn’t even connected to the circuit. This was one of many techniques Van Halen used to prevent others from stealing his sound.
                    </div>
                    <div className='show-more' onClick={() => setExpandFact(!expandFact)}>
                        {`${clipFact ? (!expandFact ? 'Show More' : 'Show Less') : ''}`}
                    </div>
                </div>
            </div>

            <div className='songs'>
                <SongList header={`url(${pickHeader})`} title='Pick Up Where You Left Off' />
                <SongList header={`url(${trendingHeader})`} title='Trending Tabs' />
            </div>

        </React.Fragment >
    );
}

export default Home;