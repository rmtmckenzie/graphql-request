import type { Mapper } from './codec.js'
import type { Scalar } from './Scalar.js'
import { String } from './scalars.js'

export type GetEncoded<$Scalar> = $Scalar extends Scalar<infer _, infer _, infer $Encoded> ? $Encoded : never

export type GetDecoded<$Scalar> = $Scalar extends Scalar<infer _, infer $Decoded, infer __> ? $Decoded
  : never

export type ScalarMap = Record<string, Scalar>

// dprint-ignore
export type LookupCustomScalarOrFallbackToString<$Name extends string, $Scalars extends ScalarMap> =
  $Name extends keyof $Scalars ? $Scalars[$Name] : String

export const lookupCustomScalarOrFallbackToString = (scalars: ScalarMap, name: string): Scalar => {
  const scalar = scalars[name]
  if (scalar) return scalar
  return String
}

/**
 * Apply a codec's mapper function (decode or encode) to a GraphQL value.
 *
 * If value is an array then its members are traversed recursively.
 *
 * Null values are returned as is.
 */
export const applyCodec = <$Mapper extends Mapper>(
  mapper: $Mapper,
  value: any,
): null | ReturnType<$Mapper> | ReturnType<$Mapper>[] => {
  if (value === null) {
    return null
  }

  if (Array.isArray(value)) {
    return value.map(item => applyCodec(mapper, item)) as ReturnType<$Mapper>
  }

  return mapper(value) as ReturnType<$Mapper>
}

export const isScalar = (value: unknown): value is Scalar =>
  typeof value === `object` && value !== null && `codec` in value && typeof value.codec === `object`
