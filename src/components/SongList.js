import React, { Component } from "react";
import Song from './Song';

class SongList extends Component{
  render(){
    const songNodes = this.props.songs.map(song => {
      return (
        <Song singer={song['im:artist'].label} key={song.id.attributes['im:id']} song={song['im:name'].label}>        
        </Song>
      );
    });
    return(
      <ul>
        {songNodes}
      </ul>
    )
  }
}

export default SongList;
