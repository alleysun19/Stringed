import React from "react";
import './SongList.css'
import Song from './Song'
import songList from "../assets/songList";

function SongList({ header, title }) {

    const songs = songList.map(({ artist, type, title, rating, numRatings, username }) =>
        <Song
            band={artist}
            type={type}
            title={title}
            rating={rating}
            numRatings={numRatings}
            username={username} />);

    return (
        <div className='song-list'>
            <div className='list-banner' style={{ backgroundImage: header }}>
                <div className="list-title">{title}</div>
            </div>
            {songs}
        </div>
    );
}

export default SongList;