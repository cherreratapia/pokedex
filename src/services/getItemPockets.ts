
import axios from 'axios'
import { IItemPocket } from '../interfaces/PokeApi'

export default async function getItemPockets(id: number): Promise<IItemPocket> {
  const url: string = 'https://pokeapi.co/api/v2/item-pocket/' + String(id)
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
