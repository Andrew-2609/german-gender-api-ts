import { GetNounRepository } from '@/modules/noun/data/repositories'
import { Noun } from '@/modules/noun/entities';
import { NounBuilder } from '../builders';

export class FakeGetNounRepository implements GetNounRepository {
  async getByValue(_input: { noun: string; }): Promise<Noun> {
    return await Promise.resolve(new NounBuilder().toEntity())
  }
}
