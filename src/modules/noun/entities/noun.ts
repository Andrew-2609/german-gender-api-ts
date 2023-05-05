export enum Gender {
  MASCULINE = 'masculine',
  FEMININE = 'feminine',
  NEUTER = 'neuter'
}

export enum Article {
  DER = 'der',
  DIE = 'die',
  DAS = 'das'
}

export class Noun {
  noun: string
  gender: Gender
  article: Article

  constructor(data: Noun) {
    this.noun = data.noun
    this.gender = data.gender
    this.article = data.article

    Object.freeze(this)
  }
}
