import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Catalog from './Catalog';
import OwnerPropertys from './OwnerProperties';
const Navbar = () => {
  return (
    <div className = 'navbar'>
      <Router>
        <Link to ='/'>Home</Link>
        <Link to = '/Catalog'>Listed Campsites.</Link>
        <Route path = '/Catalog' component = {Catalog}/>
        <Link to='/OwnerPropertys' >Create Listing</Link>
        <Route path ='/Ownerpropertys' component = {OwnerPropertys}/>
      </Router>
      </div>
  )
}

export default Navbar
