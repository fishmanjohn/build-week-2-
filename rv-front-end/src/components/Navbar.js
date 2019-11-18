import React from 'react';
import {Router,Link,Route} from 'react-router';
import Catalog from './Catalog'
const Navbar = () => {
  return (
    <div className = 'navbar'>
      <Router>
        <Link to ='/'>Home</Link>
        <Link to = '/Catalog'>Listed Campsites.</Link>
        <Route path = '/Catalog' component = {Catalog}/>
      </Router>
      </div>
  )
}

export default Navbar
