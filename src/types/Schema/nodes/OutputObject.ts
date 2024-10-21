import type { __typename } from './__typename.js'
import type { Field, SomeFields } from './OutputField.js'

export interface OutputObject<
  $Name extends string = string,
  $Fields extends SomeFields = SomeFields,
> {
  kind: 'Object'
  fields: {
    __typename: Field<'__typename', __typename<$Name>, null>
  } & $Fields
}
