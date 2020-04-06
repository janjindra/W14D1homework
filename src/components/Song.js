import React from "react";

const Song = (props) => {
  return (
    <div className="song-item">

    <h4>#{props.position}. {props.singer} -- {props.song}</h4>

    <img src={props.photo} alt="" />

    <audio controls>
    <source src={props.mp4} type="audio/mp3"/>
    </audio>

    </div>
  )
}

export default Song;
