import React from "react";
import './Song.css'

function Song({ band, type, title, rating, username }) {
    return (
        <div className="song">
            <div className="">{band}</div>
            <div className="song-type ">{type}</div>
            <div className="song-title">{title}</div>
            <div className="">{rating}</div>
            <div className="">{`@${username}`}</div>
        </div>
    );
}

export default Song;