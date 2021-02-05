import React from 'react';

import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navbar">
      <div>
        <Link to='/' className='item'>
          Home
      </Link>
      </div>
      <div>
        <Link to='/products' className='item'>
          Products
      </Link>
      </div>
      <div>
        <Link to='/lifestyle' className='item'>
          LifeStyle
      </Link>
      </div>


    </div>
  );
}

export default Nav;