
import axios from 'axios'
import { IRegion } from '../interfaces/PokeApi'

export default async function getRegions(id: number): Promise<IRegion> {
  const url: string = 'https://pokeapi.co/api/v2/region/' + String(id)
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
