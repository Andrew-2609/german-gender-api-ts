type ErrorBody = {
  message: string
}

abstract class ClientError extends Error {
  constructor(readonly body: ErrorBody) {
    super(body.message)
  }
}

export class NounNotFoundError extends ClientError {
  constructor(readonly value: string) {
    super({ message: `The noun ${value} wasn't found!` })
  }
}
