import { Noun } from '@/modules/noun/entities'

export interface GetNoun {
  getByValue: (input: { noun: string }) => Promise<Noun>
}
