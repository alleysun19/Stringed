import React, { useRef, useState } from "react";
import './Song.css'

function Song({ band, type, title, rating, username }) {

    const [scrollTitle, setScrollTitle] = useState(false);
    const titleRef = useRef(null);

    const checkTitleClip = () => {
        if (titleRef.current) {
            // Check if the title is clipped by comparing scrollWidth and clientWidth
            const isTitleClipped = titleRef.current.scrollWidth > titleRef.current.clientWidth ? true : false;
            setScrollTitle(true);
        }
    };

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
            <div className="">{rating}</div>
            <div className="">{`@${username}`}</div>
        </div>
    );
}

export default Song;