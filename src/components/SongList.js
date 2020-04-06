import React, { Component } from "react";
import Song from './Song';

class SongList extends Component{
  constructor(props){
    super(props);
    this.state = {
      songs: []
    }

  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"

    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
    .catch(err => console.error());
  }

  render(){
    const songNodes = this.state.songs.map(song => {

        return (
        <Song singer={song['im:artist'].label}
              key={song.id.attributes['im:id']}
              song={song['im:name'].label}
              position={this.state.songs.indexOf(song)+1}
              photo={song['im:image'][0].label}
              mp4={song.link[1].attributes.href}>
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
