import type { TSErrorDescriptive } from '../../lib/ts-error.js'
import type { NamedTypes } from './typeGroups.js'
import type { __typename } from './types/__typename.js'
import type { List } from './types/List.js'
import type { Nullable } from './types/Nullable.js'

// todo extends any because of infinite depth issue in generated schema types
// dprint-ignore
export type GetNamedType<$Type> =
      $Type extends List<infer $innerType>      ? GetNamedType<$innerType> :
      $Type extends Nullable<infer $innerType>  ? GetNamedType<$innerType> :
      $Type extends __typename                  ? $Type :
      $Type extends NamedTypes                  ? $Type : 
                                                  TSErrorDescriptive<'Unwrap', 'Unknown $Type', { $Type: $Type }>
