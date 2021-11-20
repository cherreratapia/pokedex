
import axios from 'axios'
import { ILanguage } from '../interfaces/PokeApi'

export default async function getLanguages(id: number): Promise<ILanguage> {
  const url: string = 'https://pokeapi.co/api/v2/language/' + String(id)
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
