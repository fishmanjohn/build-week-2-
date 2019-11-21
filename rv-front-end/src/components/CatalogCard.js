import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import PropertyDetails from './PropertyDetails'


const CatalogCard = (props) => {
    const camp = props.data
    return (
      <div>
         <img alt='' src ={camp.img_url}/>
         <h1>{camp.name}</h1>
          <h2>{camp.address}</h2>
          <p>{camp.description}</p>
          
          <Link to = '/PropertyDetails'>View This Property</Link>
        <Route path = '/PropertyDetails'  render= {(props)=><PropertyDetails {...props} camp={camp} />} />
    
      </div>
    )
  }
  
  export default CatalogCard
  