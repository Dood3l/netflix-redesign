import React from 'react';
// import Movies from '../Movies';
// import './Movies.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
    <div className='nav' id='nav'>
    <Link to="/"><img src="accountimages/Netflix_2015_logo.svg"  alt="logo" class="logo"/></Link>
    </div>
    </nav>
  )
}


export default Nav;