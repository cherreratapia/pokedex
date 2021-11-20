
import axios from 'axios'
import { IMoveBattleStyle } from '../interfaces/PokeApi'

export default async function getMoveBattleStyles(id: number): Promise<IMoveBattleStyle> {
  const url: string = 'https://pokeapi.co/api/v2/move-battle-style/' + String(id)
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
