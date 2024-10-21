import type { Grafaid } from '../../../lib/grafaid/__.js'
import type { OutputObject, SomeFields } from '../_.js'

export interface Query<
  $Fields extends SomeFields = SomeFields,
> extends OutputObject<Grafaid.Schema.RootTypeNameQuery, $Fields> {}

export interface Mutation<
  $Fields extends SomeFields = SomeFields,
> extends OutputObject<Grafaid.Schema.RootTypeNameMutation, $Fields> {}

export interface Subscription<
  $Fields extends SomeFields = SomeFields,
> extends OutputObject<Grafaid.Schema.RootTypeNameSubscription, $Fields> {}

export type RootType = Query | Mutation | Subscription
