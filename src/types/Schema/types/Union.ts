import type { OutputObject } from './OutputObject.js'

export type Union<
  $Name extends string = string,
  $Members extends [OutputObject, ...OutputObject[]] = [OutputObject, ...OutputObject[]],
> = {
  kind: `Union`
  name: $Name
  members: $Members
}

export const Union = <
  $Name extends string,
  $Members extends [OutputObject, ...OutputObject[]],
>(
  name: $Name,
  members: $Members,
): Union<$Name, $Members> => ({
  kind: `Union`,
  name,
  members,
})
