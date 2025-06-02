// import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
// import { Link } from 'react-router-dom';
import '../css/components/NavMenu.css';

export function NavMenu() {
  
    return (
      <div className='headarea'>
          <div className='brand'>
            <a href='/'>Job Hunt</a>
          </div>
          <div className='links'>
            <ul className='navlist'>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/add-job'>Add Job</a>
              </li>
            </ul>
          </div><br/><br/>
        </div>
    );
  }

