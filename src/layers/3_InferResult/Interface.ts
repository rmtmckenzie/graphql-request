import type { Schema } from '../../generator/generators/Schema.js'
import type { SchemaKit } from '../../types/Schema/__.js'
import type { InlineFragmentTypeConditional } from './InlineFragment.js'

// dprint-ignore
export type Interface<$SelectionSet, $Index extends Schema, $Node extends SchemaKit.Interface> =
  InlineFragmentTypeConditional<$SelectionSet, $Node['implementors'][number], $Index>
