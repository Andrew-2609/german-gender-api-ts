import { Noun } from '../../entities'

export interface GetNounRepository {
  getByValue: (input: { noun: string }) => Promise<Noun>
}
