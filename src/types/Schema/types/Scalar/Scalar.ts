import type { Grafaid } from '../../../../lib/grafaid/__.js'
import type { Codec } from './codec.js'

export * as Scalar from './_.js'

export interface Scalar<
  $Name extends string = string,
  $Decoded = unknown,
  $Encoded extends Grafaid.Schema.StandardScalarRuntimeTypes = Grafaid.Schema.StandardScalarRuntimeTypes,
> {
  kind: 'Scalar'
  name: $Name
  codec: Codec<$Decoded, $Encoded>
}
