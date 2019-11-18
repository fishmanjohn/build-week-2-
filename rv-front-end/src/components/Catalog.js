import React from 'react';
import PropertyDetails from './PropertyDetails'
const dummyData = [
  {
    owner_id: 0,
    name: 'Ocean Cove Camp',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    sites: 50,
    state:'California',
    address: '23150 CA-1, Jenner, CA 95450',
    has_electicty: true,
    has_water: true,
    has_toilets: true,
    price: 35,
    img_url: 'https://unsplash.com/photos/lp0IFw6YqZg'
  },
  {
    owner_id: 1,
    name: 'Oregon Outback Station',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    sites: 600,
    state:'Oregon',
    address: '76231 OR-31, La Pine, OR 97739',
    has_electicty: false,
    has_water: false,
    has_toilets: true,
    price: 0,
    img_url: 'https://unsplash.com/photos/ozOLRDOkk34'
  },
  {
    owner_id: 2,
    name: 'Galbrath Mountain',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    sites: 4,
    state:'Washington',
    address: '4474 Friday Creek Rd, Burlington, WA 98233',
    has_electicty: false,
    has_water: false,
    has_toilets: false,
    price: 15,
    img_url: 'https://unsplash.com/photos/sp-p7uuT0tw'
  },
  {
    owner_id: 3,
    name: 'Bootleg Canyon',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    sites: 15,
    state:'Nevada',
    address: '1000 Yucca St, Boulder City, NV 89005',
    has_electicty: false,
    has_water: true,
    has_toilets: true,
    price: 25,
    img_url: ''
  },
  {
    owner_id: 4,
    name: 'Whitefish Lake',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    sites: 35,
    state:'Montana',
    address: ' 1615 W Lakeshore Dr, Whitefish, MT 59937',
    has_electicty: true,
    has_water: true,
    has_toilets: true,
    price: 40,
    img_url: 'https://unsplash.com/photos/FGU1h7GoD8I'
  }, 
  {
    owner_id: 5,
    name: 'San Elijo',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    sites: '60',
    state:'California ',
    address: '2050 S Coast Hwy 101, Cardiff, CA 92007',
    has_electicty: true,
    has_water: true,
    has_toilets: true,
    price: 55,
    img_url: 'https://unsplash.com/photos/OD9EOzfSOh0'
  }
];
console.log(dummyData)


const Catalog = () => {
  return (
    <div>
     {dummyData.map( (data, index) => {
              return <PropertyDetails data = {data} key={index}/>
          })}
      
    </div>
  )
}

export default Catalog
