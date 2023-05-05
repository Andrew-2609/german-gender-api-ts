import { FakeGetNounRepository } from '@/../__tests__/fakes/repositories'
import { GetNounService } from '@/modules/noun/data/services/implementations'

type SutTypes = {
  sut: GetNounService
  getNounByValueSpy: jest.SpyInstance
}

export const makeSut = (): SutTypes => {
  const getNoun = new FakeGetNounRepository()

  const sut = new GetNounService(getNoun)

  const getNounByValueSpy = jest.spyOn(getNoun, 'getByValue')

  return { sut, getNounByValueSpy }
}
