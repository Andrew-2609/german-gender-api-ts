import { Noun } from '@/modules/noun/entities'
import { GetNounRepository } from '../../repositories'
import { GetNoun } from '../contracts'
import { NounNotFoundError } from '@/common/errors'

export class GetNounService implements GetNoun {
  constructor(private readonly getNoun: GetNounRepository) { }

  async getByValue({ noun }: { noun: string }): Promise<Noun> {
    const foundNoun = await this.getNoun.getByValue({ noun })

    if (!foundNoun) {
      throw new NounNotFoundError(noun)
    }

    return foundNoun
  }
}
