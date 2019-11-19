import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';

const CatalogCard = (props) => {
    return (
      <div>
        <img alt='' src={props.data.img_url}/>
         <h1>{props.data.name}</h1>
          <h2>{props.data.address}</h2>
          <p>{props.data.description}</p>
          
          <span>
            <h2>Utilitys</h2>
            <h3>Electric hook ups: {props.data.has_electicty ? 'Yes' : 'No'}</h3>
            <h3>Water Hook ups: {props.data.has_water ? 'Yes' : 'No' }</h3>
            <h3>Has Restrooms: {props.data.has_toilets ? 'Yes' : 'No' }</h3>
          </span>
      </div>
    )
  }
  
  export default CatalogCard
  