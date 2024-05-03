// npm modules
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

// services 
import { getAllStarships } from '../../assets/services/sw-api'

//css 
import "./Starships.css"

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
  
  if(!starshipsList.length) return <div className='starships-page'><h1>Loading Starships...</h1></div> 

  return (  
    <div className='starships-page'>
      
      <h1>CHOOSE YOUR STARSHIP</h1>
      <div className="card-container">
      {starshipsList.map((starship, idx) =>
        <Link key={idx} to={`/starships/${starship.url.substring(32, starship.url.length -1)}`}>
          <div className='starship-card'>
            {starship.name}
          </div>
        </Link>
      )}
      </div>
    </div>
  )
}

export default Starships;