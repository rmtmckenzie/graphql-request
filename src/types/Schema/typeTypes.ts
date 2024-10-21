import type { Grafaid } from '../../lib/grafaid/__.js'
import type { OutputObject, SomeFields } from './_.js'

export interface ObjectQuery<
  $Fields extends SomeFields = SomeFields,
> extends OutputObject<Grafaid.Schema.RootTypeNameQuery, $Fields> {}

export interface ObjectMutation<
  $Fields extends SomeFields = SomeFields,
> extends OutputObject<Grafaid.Schema.RootTypeNameMutation, $Fields> {}

export interface ObjectSubscription<
  $Fields extends SomeFields = SomeFields,
> extends OutputObject<Grafaid.Schema.RootTypeNameSubscription, $Fields> {}

export type RootType = ObjectQuery | ObjectMutation | ObjectSubscription
