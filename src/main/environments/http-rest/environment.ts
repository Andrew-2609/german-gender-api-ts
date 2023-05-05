import express from 'express'

export class HttpRestEnvironment {
  constructor(private readonly port: number, private readonly version: string) { }

  handler = express()

  start(): void {
    this.handler.use(express.json())
    this.handler.disable('x-powered-by')
    const URL = `/tasafe/${this.version}`
    this.handler.listen(this.port, () =>
      console.log(` \n \n \n Listening on address ${this.port} \n \n \n`)
    )
  }
}
