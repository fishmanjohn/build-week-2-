import React,{useState, useEffect} from 'react';
import axios from 'axios'; 




const OwnerProperties = () => {
 
  const [chuckJoke, setChuckJoke] = useState({});

  useEffect(()=>{
    axios.get('https://api.chucknorris.io/jokes/random')
.then(res => {console.log(res.data)
setChuckJoke(res.data)
})
.catch(err=>{console.log(err.response)})

  },[])
console.log(chuckJoke)

  return (
    <div>
      <h2>Route Router works</h2>
      <h3>heres a Chuck Noris Joke to demonstrate that I now how to do a get request.</h3>
      <div>
      <img alt='' src={chuckJoke.icon_url}/>
      <p>{chuckJoke.value}</p>
      </div> 
    </div>
  )
}



export default OwnerProperties
