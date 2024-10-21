import type { InputObject } from './_.js'
import type { __typename } from './types/__typename.js'
import type { Enum } from './types/Enum.js'
import type { Interface } from './types/Interface.js'
import type { List } from './types/List.js'
import type { Nullable } from './types/Nullable.js'
import type { OutputObject } from './types/OutputObject.js'
import type { Scalar } from './types/Scalar/Scalar.js'
import type { Union } from './types/Union.js'

export type NamedTypes = NamedInputTypes | NamedOutputTypes

export type OutputTypes =
  | InlineTypes
  | NamedOutputTypes
  | __typename

export type NamedOutputTypes =
  | Interface
  | Enum
  | OutputObject
  | Union<string, [OutputObject, ...OutputObject[]]>
  | Scalar
  | Scalar.ScalarCodecless

export type InputTypes =
  | InlineTypes
  | NamedInputTypes

export type NamedInputTypes = Enum | Scalar | InputObject | Scalar.ScalarCodecless

export type InlineTypes =
  | List
  | Nullable

export type ScalarLikeTypes =
  | Scalar
  | Enum
  | Scalar.ScalarCodecless
  | __typename
