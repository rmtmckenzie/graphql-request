import type { Schema } from '../../types/Schema/__.js'
import type { Field } from './Field.js'

export type ScalarsWildcard<
  $SelectionSet,
  $Schema extends Schema,
  $Node extends Schema.OutputObject,
> = {
  [$Key in keyof PickScalarFields<$Node>]: Field<$SelectionSet, $Node['fields'][$Key], $Schema>
}

// dprint-ignore
type PickScalarFields<$Object extends Schema.OutputObject> = {
  [
    $Key in keyof $Object['fields']
    as Schema.GetNamedType<$Object['fields'][$Key]['type']> extends Schema.ScalarLikeTypes 
      ? $Key
      : never
  ]: $Object['fields'][$Key]
}
