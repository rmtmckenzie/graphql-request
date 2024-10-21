import type { Simplify } from 'type-fest'
import type { Schema } from '../../generator/generators/Schema.js'
import type { TSErrorDescriptive } from '../../lib/ts-error.js'
import type { SchemaKit } from '../../types/Schema/__.js'
import type { Select } from '../2_Select/__.js'
import type { Interface } from './Interface.js'
import type { Object } from './Object.js'
import type { Union } from './Union.js'

// dprint-ignore
export type Field<$SelectionSet, $Field extends SchemaKit.SomeField, $Schema extends Schema> =
  Simplify<
    $SelectionSet extends Select.Directive.Include.FieldStates.Negative | Select.Directive.Skip.FieldStates.Positive ?
       null :
       (
          | FieldDirectiveInclude<$SelectionSet>
          | FieldDirectiveSkip<$SelectionSet>
          | FieldType<Omit<$SelectionSet, '$'>, $Field['type'], $Schema>
        )
  >

// dprint-ignore
type FieldType<
  $SelectionSet,
  $Type extends SchemaKit.OutputTypes,
  $Schema extends Schema
> = 
  $Type extends SchemaKit.__typename<infer $Value>                                      ? $Value :
  $Type extends SchemaKit.Nullable<infer $InnerType extends SchemaKit.OutputTypes>      ? null | FieldType<$SelectionSet, $InnerType, $Schema> :
  $Type extends SchemaKit.List<infer $InnerType extends SchemaKit.OutputTypes>          ? Array<FieldType<$SelectionSet, $InnerType, $Schema>> :
  $Type extends SchemaKit.Enum<infer _, infer $Members>                                 ? $Members[number] :
  $Type extends SchemaKit.Scalar                                                        ? ReturnType<$Type['codec']['decode']> :
  $Type extends SchemaKit.Scalar.ScalarCodecless                                        ? ReturnType<GetCodecForCodecless<$Type, $Schema>['codec']['decode']> :
  $Type extends SchemaKit.OutputObject                                                      ? Object<$SelectionSet, $Schema, $Type> :
  $Type extends SchemaKit.Interface                                                     ? Interface<$SelectionSet, $Schema, $Type> :
  $Type extends SchemaKit.Union                                                         ? Union<$SelectionSet, $Schema, $Type> :
                                                                                          TSErrorDescriptive<'FieldType', `Unknown type`, { $Type: $Type; $SelectionSet: $SelectionSet; $Schema:$Schema }>

// dprint-ignore
type GetCodecForCodecless<
  $Type extends SchemaKit.Scalar.ScalarCodecless,
  $Schema extends Schema
> =
  $Type['name'] extends keyof $Schema['scalars']
    ? $Schema['scalars'][$Type['name']]
    : SchemaKit.Scalar.String

// dprint-ignore
type FieldDirectiveInclude<$SelectionSet> =
  $SelectionSet extends Select.Directive.Include.Field  ? $SelectionSet extends Select.Directive.Include.FieldStates.Positive ? never
																																																															: null
																												: never

// dprint-ignore
type FieldDirectiveSkip<$SelectionSet> =
  $SelectionSet extends Select.Directive.Skip.Field     ? $SelectionSet extends Select.Directive.Skip.FieldStates.Negative 	? never 
																																																														: null
																												: never
