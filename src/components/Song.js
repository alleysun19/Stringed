import React, { useRef, useState } from "react";
import './Song.css'

function Song({ band, type, title, rating, numRatings, username }) {

    const [scrollTitle, setScrollTitle] = useState(false);
    const titleRef = useRef(null);

    const checkTitleClip = () => {
        if (titleRef.current) {
            // Check if the title is clipped by comparing scrollWidth and clientWidth
            const isTitleClipped = titleRef.current.scrollWidth > titleRef.current.clientWidth ? true : false;
            setScrollTitle(true);
        }
    };

    const getRatingStars = (rating) => {
        let stars = [];
        let starSize = 1.2; //rem

        for (let i=0; i<Math.floor(rating); i++) {
            stars.push(<div className='star' style={{'--star-size' : `${starSize}rem`}}/>);
        }
    
        if (Math.ceil(rating) - Math.floor(rating) > 0) {
            stars.push(<div className='star half' style={{'--star-size' : `${starSize}rem`}}/>);
        }
    
        stars.push(<div className="num-ratings">{`${numRatings} ratings`}</div>);

        return stars;
    };

    let ratingStars = [];
    if (typeof rating === 'number') {
        if (rating > 5) { rating = 5; }
        ratingStars = getRatingStars(rating)
    }

    let scrollStyle = {};
    if (scrollTitle) {
        let scrollVal = titleRef.current.scrollWidth - titleRef.current.clientWidth;
        scrollStyle = { "--scrollWidth" : `-${scrollVal}px` };
    }

    return (
        <div className="song">
            <div className="">{band}</div>
            <div className="song-type">{type}</div>
            <div ref={titleRef} className={`song-title ${scrollTitle ? 'scroll-title' : ''}`}
                style={scrollStyle}
                onMouseEnter={() => checkTitleClip()}
                onMouseLeave={() => { setScrollTitle(false) }}
            >{title}</div>
            <div className="rating">{ratingStars}</div>
            <div className="">{`@${username}`}</div>
        </div>
    );
}

export default Song;