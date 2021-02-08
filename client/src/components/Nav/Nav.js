import React, {Fragment} from 'react';

import {Link} from 'react-router-dom';
import './Header.scss';

const Nav = () => {
  return (
    <Fragment>

      <div className="header">
        <div className="search-div">
          <input type="text" placeholder="search" /> <i className="fas fa-search"></i>
        </div>
        <div><h1>Makian</h1></div>
        <div className="right-div">
          <ul>
            <li> <a href="/"><i class="far fa-heart"></i></a> </li>
            <li> <a href="/"><i class="fas fa-shopping-bag"></i></a> </li>
          </ul>
        </div>
      </div>


      <div className="navbar">
        <Link to='/' className='item'>
          <div className="nav-item">
            Home
          </div>
        </Link>


        <Link to='/products' className='item'>
          <div className="nav-item">
            Products
          </div>
        </Link>


        <Link to='/lifestyle' className='item'>
          <div className="nav-item">
            LifeStyle
          </div>
        </Link>
      </div>
    </Fragment>

  );
}

export default Nav;