
import axios from 'axios'
import { IPokeathlonStat } from '../interfaces/PokeApi'

export default async function getPokeathlonStats(id: number): Promise<IPokeathlonStat> {
  const url: string = 'https://pokeapi.co/api/v2/pokeathlon-stat/' + String(id)
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
