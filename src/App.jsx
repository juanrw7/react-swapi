// npm modules
import { Route, Routes } from "react-router-dom"

// components
import NavBar from './components/NavBar/NavBar'

// pages
import Starships from './Pages/Starships/Starships'
import StarshipDetails from "./Pages/StarshipDetails/StarshipDetails"

// css
import './App.css'


function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Starships/>}/>
        <Route path="/starships/:starShipId" element={<StarshipDetails/>}/>
      </Routes>
    </>
  )
}

export default App
