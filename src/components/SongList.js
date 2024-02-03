import React from "react";
import './SongList.css'
import Song from './Song'

function SongList({ header, title }) {
    return (
        <div className='song-list'>
            <div className='list-banner' style={{backgroundImage : header}}>
                <div className="list-title">{title}</div>
            </div>
            <Song band='Brand New' type='Tab' title="Okay I Believe You But My Tommy Gun Don't" rating={4.5} numRatings= {1234} username='alleysun19'/>
        </div>
    );
}

export default SongList;