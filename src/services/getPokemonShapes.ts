
import axios from 'axios'
import { IPokemonShape } from '../interfaces/PokeApi'

export default async function getPokemonShapes(id: number): Promise<IPokemonShape> {
  const url: string = 'https://pokeapi.co/api/v2/pokemon-shape/' + String(id)
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
