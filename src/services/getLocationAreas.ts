
import axios from 'axios'
import { ILocationArea } from '../interfaces/PokeApi'

export default async function getLocationAreas(id: number): Promise<ILocationArea> {
  const url: string = 'https://pokeapi.co/api/v2/location-area/' + String(id)
  try {
    const { data } = await axios({
      url,
      method: 'GET'
    })
    return data
  } catch (error) {
    console.error('error', error)
    return null
  }
}
