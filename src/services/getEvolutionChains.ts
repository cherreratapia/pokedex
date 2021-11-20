
import axios from 'axios'
import { IEvolutionChain } from '../interfaces/PokeApi'

export default async function getEvolutionChains(id: number): Promise<IEvolutionChain> {
  const url: string = 'https://pokeapi.co/api/v2/evolution-chain/' + String(id)
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
