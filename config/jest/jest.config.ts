import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules'],
  rootDir: '../../',
  moduleFileExtensions: ['ts', 'tsx'],
  modulePaths: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
};

export default config;
