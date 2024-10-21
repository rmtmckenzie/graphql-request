import type { Schema } from '../../types/Schema/__.js'
import type { InlineFragmentTypeConditional } from './InlineFragment.js'

// dprint-ignore
export type Union<$SelectionSet, $Schema extends Schema, $Type extends Schema.Union> =
  InlineFragmentTypeConditional<$SelectionSet, $Type['members'][number], $Schema>
