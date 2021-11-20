
import axios from 'axios'
import { ICharacteristic } from '../interfaces/PokeApi'

export default async function getCharacteristics(id: number): Promise<ICharacteristic> {
  const url: string = 'https://pokeapi.co/api/v2/characteristic/' + String(id)
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
