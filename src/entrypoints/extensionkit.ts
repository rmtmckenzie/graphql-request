export { createBuilderExtension, createExtension, createTypeHooks } from '../extension/extension.js'
export { createExtension as createGeneratorExtension } from '../generator/extension/create.js'
// todo: no deep imports, rethink these utilities and/or how they are exported from the graffle package.
export type { Context } from '../client/context.js'
export type { Extension } from '../extension/extension.js'
export type { Builder } from '../lib/builder/__.js'
export { Errors } from '../lib/errors/__.js'
