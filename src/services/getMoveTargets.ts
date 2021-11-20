
import axios from 'axios'
import { IMoveTarget } from '../interfaces/PokeApi'

export default async function getMoveTargets(id: number): Promise<IMoveTarget> {
  const url: string = 'https://pokeapi.co/api/v2/move-target/' + String(id)
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
