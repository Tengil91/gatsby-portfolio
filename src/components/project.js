import React from 'react';

class Project extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
  }
  render(){
    let lis = this.props.tags.split(' ').map((tag, i) => {
      return <li key={`${tag}${i}`}>{tag}</li>
    });
    let ul = <ul>{lis}</ul>;
    return (
      <div className={"project-container " + this.props.className}>
        <a href={this.props.href} className="full-div-link"></a>
        <img className="project-image element-hidden" src={`/static/${this.props.src}`} />
        <div className="tags-div element-hidden">
          {
            ul
          }
        </div>
        <h2><a href={this.props.href}>{this.props.title}</a></h2>
      </div>
    );
  }
}
export default Project;