
import axios from 'axios'
import { ILocation } from '../interfaces/PokeApi'

export default async function getLocations(id: number): Promise<ILocation> {
  const url: string = 'https://pokeapi.co/api/v2/location/' + String(id)
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
