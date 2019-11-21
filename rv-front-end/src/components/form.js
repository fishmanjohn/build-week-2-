import React, {useState,useEffect} from 'react';
import {withFormik,Form,Field} from 'formik';

const Campform = ({values, touched, errors,status}) => {
  

  



  return (
    <div>
      <Form>
        <Field 
        type='text'
        name='name' 
        placeholder='Campground Name'/>
        <br/>
        <Field
        type='text'
        name = 'description'
        placeholder = 'Campground Description'
        />
        <br/>
        <Field
        type='text'
        name = 'sites'
        placeholder = 'Number of Campsites'
        />
        <br/>
        <Field
        type = 'text'
        name = 'state'
        placeholder ='Your campground is in whatt state?'
        />
        <Field
        type ='text'
        name ='adress'
        placeholder ='Campground Address'
        />
        <label>
        <Field 
        type='checkBox'
        name='has_electicty'
        placeholder='Does your campground have electric hookups?'/>
       Does your campground have electric hookups? </label>
       <label>
        <Field
        type='checkBox'
        name='has_water'
        placeholder='Does your campground have electric hookups?'
        />
        Does your campground have electric hookups?
        </label>
        <label>
        <Field
         type='checkBox'
        name='has_toilets'
        placeholder='Does your campground have toilets?'/>
        </label>
        <Field
        type = 'text'
        name ='price'
        placeholder='How much does it cost to stay at your campground.'
        />

        <Field
        type ='text'
        name = 'img_url'
        placeholder = 'Put an immage url here.'
        />
        <button type = 'submit'>submit</button>
      </Form>
      
    </div>
  )
}

const FormikCampForm = withFormik({
      mapPropsToValues({name,description,sites,state,address,has_electicty,has_water,has_toilets,price,img_url}){
        return{
        name:name || '',
        description: description || '',
        sites:sites || Number,
        state:state || '',
        address:address || '',
        has_electicty:has_electicty || false,
        has_water:has_water|| false,
        has_toilets: has_toilets|| false,
        price:price||Number,
        img_url:img_url || ''

        }
      },

})

export default FormikCampForm
