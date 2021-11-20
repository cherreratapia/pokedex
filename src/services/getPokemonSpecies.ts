
import axios from 'axios'
import { IPokemonSpeciesGender } from '../interfaces/PokeApi'

export default async function getPokemonSpecies(id: number): Promise<IPokemonSpeciesGender> {
  const url: string = 'https://pokeapi.co/api/v2/pokemon-species/' + String(id)
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
