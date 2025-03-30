import React, { Component } from 'react';
// import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
// import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className='headarea'>
          <div className='brand'>
            <a href='/'>Job Hunt</a>
          </div>
          <div className='links'>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/add-job'>Add Job</a>
              </li>
            </ul>
          </div>
          <br/>
          <br/>
          {/* <hr className='divider'></hr> */}
        </div>
    );
  }
}
