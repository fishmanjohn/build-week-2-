import React from 'react';

const PropertyDetails = (props) => {
  return (
    <div>
     <img alt='' src={props.camp.img_url}/>
         <h1>{props.camp.name}</h1>
         <h2>{props.camp.state}</h2>
          <h2>{props.camp.address}</h2>

          <p>{props.camp.description}</p>
          
          <div>
            <h2>Utilitys</h2>
            <h3>Electric hook ups: {props.camp.has_electicty ? 'Yes' : 'No'}</h3>
            <h3>Water Hook ups: {props.camp.has_water ? 'Yes' : 'No' }</h3>
            <h3>Has Restrooms: {props.camp.has_toilets ? 'Yes' : 'No' }</h3>
          </div>
         <button>Contact to Book a campsite</button>
    </div>
  )
}

export default PropertyDetails
