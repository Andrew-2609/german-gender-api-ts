import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  roots: ['<rootDir>/__tests__'],
  collectCoverageFrom: [
    '<rootDir>/src/**',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/@types/**',
    '!<rootDir>/src/**/migrations/**'
  ],
  coverageDirectory: 'coverage',
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
  moduleNameMapper: {
    '@/(.+)': '<rootDir>/src/$1'
  },
  preset: 'ts-jest',
  transform: {
    '.*\\.ts$': 'ts-jest'
  }
}

export default config
