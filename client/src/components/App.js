import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import history from '../history';

import Nav from './Nav/Nav';
import Home from './Home/Home';
import Footer from './Footer/Footer';

import Products from '../components/Products/Products';
import ProductsShow from '../components/Products/PruductShow';

import LifeStyle from '../components/LifeStyle/LifeStyle';
import LifeStylePost from '../components/LifeStyle/LifeStylePost';


import './App.scss';

const App = (props) => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/products' exact component={Products} />
            <Route path='/products/:id' exact component={ProductsShow} />
            <Route path='/lifestyle' exact component={LifeStyle} />
            <Route path='/lifestyle/:id' exact component={LifeStylePost} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;