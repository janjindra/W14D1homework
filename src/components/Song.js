import React from "react";

const Song = (props) => {
  return (
  <div>

    <h4>{props.singer}</h4>
    <p>{props.song}</p>
  </div>
  )
}

export default Song;
