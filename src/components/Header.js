import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='App'>
      <NavLink activeClassName='is-active' exact to='/'>
        Home
      </NavLink>{' '}
      |
      <NavLink activeClassName='is-active' exact to='/about'>
        About
      </NavLink>{' '}
      |
      <NavLink activeClassName='is-active' exact to='/contact'>
        Contact
      </NavLink>{' '}
      |
      <NavLink activeClassName='is-active' exact to='/posts'>
        posts
      </NavLink>
      |
      <NavLink to='/login' activeClassName='is-active'>
        Login
      </NavLink>
      |
      <NavLink to='/register' activeClassName='is-active'>
        Register
      </NavLink>
      |
      <NavLink to='/tasks' activeClassName='is-active'>
        Tasks
      </NavLink>
    </div>
  );
}

export default Header;
