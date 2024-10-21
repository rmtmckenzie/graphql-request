import type { Schema } from '../../generator/generators/Schema.js'
import type { SchemaKit } from '../../types/Schema/__.js'
import type { Field } from './Field.js'

export type ScalarsWildcard<
  $SelectionSet,
  $Index extends Schema,
  $Node extends SchemaKit.OutputObject,
> = {
  [$Key in keyof PickScalarFields<$Node>]: Field<$SelectionSet, $Node['fields'][$Key], $Index>
}

// dprint-ignore
type PickScalarFields<$Object extends SchemaKit.OutputObject> = {
  [
    $Key in keyof $Object['fields']
    as SchemaKit.GetNamedType<$Object['fields'][$Key]['type']> extends SchemaKit.ScalarLikeTypes 
      ? $Key
      : never
  ]: $Object['fields'][$Key]
}
