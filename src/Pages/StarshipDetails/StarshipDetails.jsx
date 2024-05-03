// npm modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'

// services 
import { getStarshipDetails } from '../../assets/services/sw-api'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipsDetails] = useState({})
  const {starShipId} = useParams()

  useEffect(()=> {
    console.log(starShipId)
    const fetchDetails = async () => {
      // API CALL
      const starshipData = await getStarshipDetails(starShipId)
      // Put the data in state
      setStarshipsDetails(starshipData)
    }
    fetchDetails()
    console.log("component has loaded")
  },[starShipId])

  console.log(starshipDetails)

  if(!starshipDetails) return <h1>Loading Details...</h1>

  return ( 
    <div className="starship-details-container">
      <h1>Starship Details</h1>
      <div className="starship-details-card">
      <h2>Name: {starshipDetails.name}</h2>
      <h2>Model: {starshipDetails.model}</h2>
      <Link to={"/"}><h2>Return</h2></Link>
      </div>

    </div>
  )
}

export default StarshipDetails;