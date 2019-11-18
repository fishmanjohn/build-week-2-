import React from 'react';

const PropertyDetails = (props) => {
  return (
    <div>
      <img alt='' src={props.data.img_url}/>
       <h1>{props.data.name}</h1>
        <h2>{props.data.address}</h2>
        <p>{props.data.description}</p>
        
        <span>
          <h2>Utilitys</h2>
          <h3>Electric hook ups: {}</h3>
          <h3>Water Hook ups: {props.data.has_water}</h3>
          <h3>Has Restrooms: {props.data.has_toilets}</h3>
        </span>
    </div>
  )
}

export default PropertyDetails
