import type {Config} from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    },
    moduleFileExtensions: [
      'ts',
      'tsx',
      'js',
      'jsx',
      'json',
      'node',
    ],
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    testPathIgnorePatterns: [
      '/node_modules/',
    ],
    collectCoverage: true,
    collectCoverageFrom: [
      '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    ],
  verbose: true,
};

export default config;