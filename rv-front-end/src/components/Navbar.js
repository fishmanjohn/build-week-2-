import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Catalog from './Catalog';
import OwnerPropertys from './OwnerProperties';
import styled from 'styled-components';

const FlexDiv = styled.div`
display:flex;
justify-content:space-evenly;
text-decoration:none;
color:black;
`

const Navbar = () => {
  return (
    <div className = 'navbar'>
      <Router>
        <h1>Unit 2 Build Demonstaration (not Rv air BnB)</h1>
        <FlexDiv>
        <Link to = '/Catalog'>Home</Link>
        <Link to='/OwnerPropertys' >Get a joke...</Link>
        </FlexDiv>
        <Route path = '/Catalog' component = {Catalog}/>
        
       <Route path ='/Ownerpropertys' component = {OwnerPropertys}/> 

      </Router>
      </div>
  )
}

export default Navbar
