import type { Config } from 'jest';

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const config: Config = {
  globals: {},
  clearMocks: true,
  maxWorkers: '50%',
  preset: 'ts-jest',
  runner: 'jest-runner',
  collectCoverage: false,
  errorOnDeprecated: true,
  testEnvironment: 'jest-environment-node',
};

export default config;
