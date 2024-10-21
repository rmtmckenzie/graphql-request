import type { Schema } from '../../generator/generators/Schema.js'
import type { SchemaKit } from '../../types/Schema/__.js'
import type { InlineFragmentTypeConditional } from './InlineFragment.js'

// dprint-ignore
export type Union<$SelectionSet, $Index extends Schema, $Type extends SchemaKit.Union> =
  InlineFragmentTypeConditional<$SelectionSet, $Type['members'][number], $Index>
