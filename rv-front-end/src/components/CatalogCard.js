import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import PropertyDetails from './PropertyDetails'

const CatalogCard = (props) => {
    
    return (
      <div>
         <img alt='' src ={props.data.img_url}/>
         <h1>{props.data.name}</h1>
          <h2>{props.data.address}</h2>
          <p>{props.data.description}</p>
          
          <Link to = '/PropertyDetails'>View This Property</Link>
        <Route path = '/PropertyDetails'  render= {PropertyDetails} />
    
      </div>
    )
  }
  
  export default CatalogCard
  