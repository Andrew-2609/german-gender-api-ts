import { NounNotFoundError } from '@/common/errors'
import { makeSut } from './make-sut'
import { NounBuilder } from '@/../__tests__/fakes/builders'

describe('GetNounService', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should search for noun with the correct parameter', async () => {
    const { sut, getNounByValueSpy } = makeSut()
    const noun = 'Apfel'

    await sut.getByValue({ noun })

    expect(getNounByValueSpy).toHaveBeenCalledTimes(1)
    expect(getNounByValueSpy).toHaveBeenCalledWith({ noun })
  })

  test("should return a NounNotFoundError if noun doesn't exist", async () => {
    const { sut, getNounByValueSpy } = makeSut()
    const noun = 'None'

    getNounByValueSpy.mockImplementation(async () => await Promise.resolve(null))

    const promise = sut.getByValue({ noun })

    await expect(promise).rejects.toThrow()

    try {
      await promise
    } catch (err) {
      expect(err).toBeInstanceOf(NounNotFoundError)
      expect(err.message).toBe(`The noun ${noun} wasn't found!`)
    }
  })

  test('should successfully return the searched noun', async () => {
    const { sut, getNounByValueSpy } = makeSut()
    const fakeNoun = new NounBuilder().withNoun('Frau').toEntity()

    getNounByValueSpy.mockImplementationOnce(async () => await Promise.resolve(fakeNoun))

    const result = await sut.getByValue({ noun: fakeNoun.noun })

    expect(result).toStrictEqual(fakeNoun)
  })
})
