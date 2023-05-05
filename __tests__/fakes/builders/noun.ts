import { Article, Gender, Noun } from '@/modules/noun/entities'

export class NounBuilder {
  private _noun: string
  private _gender: Gender
  private _article: Article

  constructor() {
    this._noun = 'Apfel'
    this._gender = Gender.MASCULINE
    this._article = Article.DER
  }

  toEntity(): Noun {
    return new Noun({ noun: this._noun, gender: this._gender, article: this._article })
  }

  withNoun(noun: string): NounBuilder {
    this._noun = noun
    return this
  }

  withGender(gender: Gender): NounBuilder {
    this._gender = gender
    return this
  }

  withArticle(article: Article): NounBuilder {
    this._article = article
    return this
  }
}
