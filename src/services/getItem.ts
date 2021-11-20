
import axios from 'axios'
import { IItem } from '../interfaces/PokeApi'

export default async function getItem(id: number): Promise<IItem> {
  const url: string = 'https://pokeapi.co/api/v2/item/' + String(id)
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
