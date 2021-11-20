
import axios from 'axios'
import { IMoveStatChange } from '../interfaces/PokeApi'

export default async function getStats(id: number): Promise<IMoveStatChange> {
  const url: string = 'https://pokeapi.co/api/v2/stat/' + String(id)
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
