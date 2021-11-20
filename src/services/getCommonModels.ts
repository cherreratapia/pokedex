
import axios from 'axios'
import { undefined } from '../interfaces/PokeApi'

export default async function getCommonModels(id: number): Promise<undefined> {
  const url: string = 'https://pokeapi.co/apiundefined/' + String(id)
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
