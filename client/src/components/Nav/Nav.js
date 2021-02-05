import React from 'react';

import {Link} from 'react-router-dom';

const Nav = () => {
  return (
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
  );
}

export default Nav;