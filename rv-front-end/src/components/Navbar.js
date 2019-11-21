import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Catalog from './Catalog';
import OwnerPropertys from './OwnerProperties';
const Navbar = () => {
  return (
    <div className = 'navbar'>
      <Router>
        <h1>RV Air B and B.</h1>
        <Link to = '/Catalog'>Home</Link>
        <Link to='/OwnerPropertys' >Create Listing</Link>
        <Route path = '/Catalog' component = {Catalog}/>
        
       <Route path ='/Ownerpropertys' component = {OwnerPropertys}/> 

      </Router>
      </div>
  )
}

export default Navbar
