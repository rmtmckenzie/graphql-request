import { create } from './create.js'
import { JavaScriptScalarCodecs } from './JavaScriptScalarCodecs.js'

export const String = create(`String`, JavaScriptScalarCodecs.String)

export const ID = create(`ID`, JavaScriptScalarCodecs.String)

export const Int = create(`Int`, JavaScriptScalarCodecs.Number)

export const Float = create(`Float`, JavaScriptScalarCodecs.Number)

export const Boolean = create(`Boolean`, JavaScriptScalarCodecs.Boolean)

export type ID = typeof ID

export type String = typeof String

export type Int = typeof Int

export type Boolean = typeof Boolean

export type Float = typeof Float
