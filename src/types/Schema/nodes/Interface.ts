import type { OutputObject } from './OutputObject.js'

export type Interface<
  $Name extends string = string,
  // $Fields extends SomeFields = SomeFields,
  $Fields extends any = any,
  $Implementors extends [OutputObject, ...OutputObject[]] = [OutputObject, ...OutputObject[]],
> = {
  kind: 'Interface'
  name: $Name
  fields: $Fields
  implementors: $Implementors
}
