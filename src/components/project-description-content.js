import React from "react";

export default (props) => {
  let images = props.srcs.split(' ').map(src => {
    return (
      <img src={`/static/${src}`} className="project-description-image" />
    );
  })
  return (
    <div className="project-description-content">
      {images}
    </div>
  )
}