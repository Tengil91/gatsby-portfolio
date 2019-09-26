import React from "react";

class Header extends React.Component {
  constructor(props){
    super(props);
    this.dark = false;
    this.headerHandler = this.headerHandler.bind(this);
  }
  headerHandler(){
    let header = document.querySelector('.main-header');
    let darkness1 = document.querySelector('.header-darkness1');
    let darkness2 = document.querySelector('.header-darkness2');
    let headerHeight = header.offsetHeight;
    let headerWidth = header.offsetWidth;
    let darknessSpeed = 1.5;
    let darknessOffset = (((document.documentElement.scrollTop * darknessSpeed - headerHeight) / headerHeight - .6) * headerWidth + headerWidth);
    if(darknessOffset < 0){
      darkness1.style.transform = `translateX(${darknessOffset}px)`;
      darkness2.style.transform = `translateX(${-darknessOffset}px)`;
    } else if(!this.dark){
      darkness1.style.transform = `translateX(0px)`;
      darkness2.style.transform = `translateX(-1px)`;
    }
    this.dark = darknessOffset > 0;
  }
  componentDidMount(){
    if(window.innerWidth >= 800){
        
      setTimeout(() => {
        let darkness1 = document.querySelector('.header-darkness1');
        let darkness2 = document.querySelector('.header-darkness2');

        darkness1.style.transition = `all 1500ms`;
        darkness2.style.transition = `all 1500ms`;
        darkness1.style.transform = `translateX(-60vw)`;
        darkness2.style.transform = `translateX(60vw)`;
        setTimeout(() => {
          darkness1.style.transition = `all 0ms`;
          darkness2.style.transition = `all 0ms`;
          window.addEventListener('scroll', this.headerHandler);
        }, 1000);
        
      }, 300);
    }
  }
  render(){
    return (
    <header className="main-header" id="home">
      <div className="main-header-texts">
        <h1>Niklas Silfverhielm</h1>
        <h2>Frontend Developer</h2>
        <p>This is a site that contains some of my school projects</p>
      </div>
      <div className="header-darkness1"></div>
      <div className="header-darkness2"></div>
    </header>
    )
  }
}

export default Header
