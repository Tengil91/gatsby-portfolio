import React from 'react';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.clicked = false;
    this.onClick = this.onClick.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }
  onClick = function(){
    let navMenu = document.querySelector('.nav-menu-part');
    let lis = document.querySelectorAll('.nav-menu-part li');
    if(this.clicked){
      navMenu.style.transform =  `translateX(calc(100% - 35px))`;
      setTimeout(() => {
        lis.forEach(li => {
          li.style.opacity = 0;
        });
      }, 300);
    } else {
      navMenu.style.transform =  `translateX(0)`;
      setTimeout(() => {
        lis.forEach((li, i) => {
          setTimeout(() => {
            li.style.opacity = 1;
          }, 500*i);
        });
      }, 300);
    }
    this.clicked = this.clicked ? false : true;
  }
  onScroll = function(){
    let navMenu = document.querySelector('.nav-menu-part');
    let lis = document.querySelectorAll('.nav-menu-part li');
    let a = document.querySelectorAll('.nav-menu-part a')
    if(document.getElementById('home').getBoundingClientRect().top < 20){
      a[0].classList.add('active');
      a[1].classList.remove('active');
      a[2].classList.remove('active');
      if(document.getElementById('projects').getBoundingClientRect().top < 20){
        a[0].classList.remove('active');
        a[1].classList.add('active');
        a[2].classList.remove('active');
        if(document.getElementById('contact').getBoundingClientRect().top < 20){
          a[0].classList.remove('active');
          a[1].classList.remove('active');
          a[2].classList.add('active'); 
        } 
      } 
    }

    if(this.clicked){
      navMenu.style.transform =  `translateX(calc(100% - 35px))`;
      setTimeout(() => {
        lis.forEach(li => {
          li.style.opacity = 0;
        });
      }, 300);
    }
    this.clicked = false;
  }
  componentDidMount = function(){
    window.addEventListener('scroll', this.onScroll);
  }
  render(){
    return (
      <nav className="main-nav">
        <div className="nav-menu-part">
          <div className="main-nav-burger" onClick={this.onClick}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;