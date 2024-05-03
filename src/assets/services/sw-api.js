const baseUrl = "https://swapi.dev/api"

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships/`)
  return res.json()
}

export async function getStarshipDetails(starShipId) {
  const res = await fetch(`${baseUrl}/starships/${starShipId}/`)
  return res.json()
}