// npm modules
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

// services 
import { getAllStarships } from '../../assets/services/sw-api'

const Starships = () => {
  const [starshipsList, setStarshipsList] = useState([])

  useEffect(()=> {
    const fetchStarshipsList = async () => {
      // API CALL
      const starshipsData = await getAllStarships()
      // Put the data in state
      setStarshipsList(starshipsData.results)
      console.log(starshipsData)
    }
    fetchStarshipsList()
    console.log("component has loaded")
  },[])
  
  if(!starshipsList.length) return <h1>Loading Starships...</h1>

  return (  
    <div>
      <h1>CHOOSE YOUR </h1>
      {starshipsList.map((starship, idx) =>
      <div key={idx} className=''>
        <Link to={`/starships/${starship.url.substring(32, starship.url.length -1)}`}>{starship.name}</Link>
      </div>
      )}
    </div>
  )
}

export default Starships;