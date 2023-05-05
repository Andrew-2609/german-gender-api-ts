import { HttpRestEnvironment } from '../http-rest/environment'

export class App {
  async start(): Promise<void> {
    this.httpRest().start()
  }

  private httpRest(): HttpRestEnvironment {
    return new HttpRestEnvironment(3000, 'v1')
  }
}
