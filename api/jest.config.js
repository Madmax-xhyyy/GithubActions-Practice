import { createDefaultPreset } from 'ts-jest'

const tsJestTransformCfg = createDefaultPreset().transform

/** @type {import("jest").Config} **/
// eslint-disable-next-line no-undef
export default {
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    ...tsJestTransformCfg,
  },
}
