import type { Simplify } from 'type-fest'
import type { Schema } from '../../generator/generators/Schema.js'
import { type StringKeyof } from '../../lib/prelude.js'
import type { TSErrorDescriptive } from '../../lib/ts-error.js'
import type { SchemaKit } from '../../types/Schema/__.js'
import type { Select } from '../2_Select/__.js'
import type { Alias } from './Alias.js'
import type { Field } from './Field.js'
import type { ScalarsWildcard } from './ScalarsWildcard.js'

// dprint-ignore
export type Object<$SelectionSet, $Schema extends Schema, $Node extends SchemaKit.OutputObject> =
  Select.SelectScalarsWildcard.IsSelectScalarsWildcard<$SelectionSet> extends true
    // todo what about when scalars wildcard is combined with other fields like relations?
    ? ScalarsWildcard<$SelectionSet, $Schema,$Node>
    :
      Simplify<
        & SelectionNonSelectAlias<$SelectionSet, $Schema, $Node>
        & Alias<$SelectionSet, $Schema, $Node>
      >

// dprint-ignore
type SelectionNonSelectAlias<$SelectionSet , $Schema extends Schema, $SchemaNode extends SchemaKit.OutputObject> =
  {
    [$Key in PickSelectsPositiveIndicatorAndNotSelectAlias<$SelectionSet>]:
      $Key extends keyof $SchemaNode['fields']
        ? Field<$SelectionSet[$Key], $SchemaNode['fields'][$Key], $Schema>
        : Errors.UnknownFieldName<$Key, $SchemaNode>
  }

// dprint-ignore
export namespace Errors {
  export type UnknownFieldName<$FieldName extends string, $Object extends SchemaKit.RootType | SchemaKit.OutputObject> =
    TSErrorDescriptive<'Object', `field "${$FieldName}" does not exist on object "${$Object['fields']['__typename']['type']['type']}"`>
}

// dprint-ignore
export type PickSelectsPositiveIndicatorAndNotSelectAlias<$SelectionSet> = StringKeyof<{
  [
    $FieldName in keyof $SelectionSet as $SelectionSet[$FieldName] extends Select.Indicator.Negative
      ? never
      : $SelectionSet[$FieldName] extends any[]
      ? never
       : $FieldName
  ]: 0
}>
