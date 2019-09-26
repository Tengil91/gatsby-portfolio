import React from 'react';
import Project from './project';
import { isElementInViewport, checkForVisibility, isElementPartInViewport } from './scrollutils';

class Projects extends React.Component {
  constructor(data){
    super();
    this.data = data;
  }
  componentDidMount = function(){
    window.addEventListener('scroll', () => {
      let targets = document.querySelectorAll('.project-image');
      let triggers = document.querySelectorAll('.project-container h2');
      checkForVisibility(triggers, targets);
      let targets2 = document.querySelectorAll('.tags-div');
      let triggers2 = document.querySelectorAll('.project-container h2');
      checkForVisibility(triggers2, targets2);
    })
  }
  render(){
    let projects = this.data.data.allMarkdownRemark.edges.map( (node, i) => {
      return (
        <Project
          src={node.node.frontmatter.src}
          title={node.node.frontmatter.title}
          href={node.node.frontmatter.href} 
          className={`project-position-${i % 2 + 1}`} 
          tags={node.node.frontmatter.tags} 
          href={node.node.fields.slug}
          key={`p${i}`}
        />
      )
    });
    return (
      <div className="projects-wrapper" id="projects">
        <main className="projects-container">
          <h2 className="big-header" id="projects">Web Pages</h2>
          {projects}
        </main>
      </div>
    );
  }
}
export default Projects;
