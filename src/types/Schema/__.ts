export * as Schema from './_.js'

import type { GlobalRegistry } from '../GlobalRegistry/GlobalRegistry.js'
import type { Enum } from './types/Enum.js'
import type { Interface } from './types/Interface.js'
import type { OutputObject } from './types/OutputObject.js'
import type { Scalar } from './types/Scalar/Scalar.js'
import type { Union } from './types/Union.js'
import type { ObjectMutation, ObjectQuery, ObjectSubscription, RootType } from './typeTypes.js'

/**
 * A generic schema type. Any particular schema will be a subtype of this, with
 * additional specificity such as on objects where here `Record` is used.
 */
export interface Schema<
  $Extensions extends GlobalRegistry.TypeExtensions = GlobalRegistry.TypeExtensions,
  $Scalars extends Scalar.ScalarMap = Scalar.ScalarMap,
> {
  name: GlobalRegistry.ClientNames
  RootTypesPresent: ('Query' | 'Mutation' | 'Subscription')[]
  RootUnion: RootType
  Root: {
    Query: null | ObjectQuery
    Mutation: null | ObjectMutation
    Subscription: null | ObjectSubscription
  }
  allTypes: Record<
    string,
    | Enum
    | ObjectQuery
    | ObjectMutation
    | OutputObject
    | Union
    | Interface
  >
  objects: Record<string, OutputObject>
  unions: Record<string, Union>
  interfaces: Record<string, Interface>
  /**
   * A map of scalar definitions. Useful for custom scalars.
   */
  scalars: $Scalars
  extensions: $Extensions
}
