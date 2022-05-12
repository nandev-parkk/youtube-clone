import React from "react";

export default function VideoItem(props) {
  return <h1>{props.video.snippet.title}</h1>;
}
