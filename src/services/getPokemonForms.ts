
import axios from 'axios'
import { IPokemonFormType } from '../interfaces/PokeApi'

export default async function getPokemonForms(id: number): Promise<IPokemonFormType> {
  const url: string = 'https://pokeapi.co/api/v2/pokemon-form/' + String(id)
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
