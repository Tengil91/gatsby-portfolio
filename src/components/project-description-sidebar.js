import React from "react";
import { Link } from "gatsby";

export default (props) => {
  let tags = props.tags.split(' ').map(tag => {
    return <span className="project-description-sidebar-tag">{tag}</span>
  })
  return (
    <div className="project-description-sidebar">
      <h1>{props.title}</h1>
      <div className="project-description-sidebar-tags-container">{tags}</div>
      <a href={props.pagelink} target="_blank" className="project-description-button">Visit site</a>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
      <Link to="/" className="project-description-button">Home</Link>
    </div>
  )
}