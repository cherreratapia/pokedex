
import axios from 'axios'
import { IEvolutionTrigger } from '../interfaces/PokeApi'

export default async function getEvolutionTriggers(id: number): Promise<IEvolutionTrigger> {
  const url: string = 'https://pokeapi.co/api/v2/evolution-trigger/' + String(id)
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
