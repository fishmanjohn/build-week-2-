import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import PropertyDetails from './PropertyDetails'
import styled from 'styled-components'

const StyledImg = styled.img`
height: 250px; 
margin: 15px;
`

const CatalogCard = (props) => {
    const camp = props.data
    return (
      <div>
         <StyledImg alt='' src ={camp.img_url}/>
         <h1>{camp.name}</h1>
          <h2>{camp.address}</h2>
          <p>{camp.description}</p>
          
          
    
      </div>
    )
  }
  
  export default CatalogCard
  