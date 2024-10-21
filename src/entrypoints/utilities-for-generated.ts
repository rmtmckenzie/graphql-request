export { type Simplify } from 'type-fest'
export { type Schema as SchemaIndexBase } from '../generator/generators/Schema.js'
export * from '../layers/2_Select/__.js'
export { type ClientContext } from '../layers/6_client/fluent.js'
export type {
  ConfigGetOutputError,
  HandleOutput,
  HandleOutputGraffleRootField,
} from '../layers/6_client/handleOutput.js'
export { type DocumentRunner } from '../layers/6_client/requestMethods/document.js'
export type { Config } from '../layers/6_client/Settings/Config.js'
export { type Exact, type ExactNonEmpty, type UnionExpanded } from '../lib/prelude.js'
export { TypeFunction } from '../lib/type-function/__.js'
export { type GlobalRegistry } from '../types/GlobalRegistry/GlobalRegistry.js'
export { SchemaKit } from '../types/Schema/__.js'
export { type SchemaDrivenDataMap } from '../types/SchemaDrivenDataMap/__.js'
