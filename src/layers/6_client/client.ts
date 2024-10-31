import { defaultName } from '../../generator/config/defaults.js'
import type { Chain } from '../../lib/chain/__.js'
import { proxyGet } from '../../lib/prelude.js'
import type { GlobalRegistry } from '../../types/GlobalRegistry/GlobalRegistry.js'
import { Schema } from '../../types/Schema/__.js'
import { type Anyware_, AnywareExtension } from './chainExtensions/anyware.js'
import type { Internal_ } from './chainExtensions/internal.js'
import { type Scalar_, scalarProperties } from './chainExtensions/scalar.js'
import { type With_, withProperties } from './chainExtensions/with.js'
import { type Context, type ContextWithoutConfig, createContext, type TypeHooksEmpty } from './context.js'
import { type Use_, useProperties } from './extension/use.js'
import { type Gql_, gqlProperties } from './gql/gql.js'
import { type RequestMethods_, requestMethodsProperties } from './requestMethods/requestMethods.js' // todo
import { type InputStatic } from './Settings/Input.js'
import { type NormalizeInput } from './Settings/InputToConfig.js'

export type Client<$Context extends Context> = Chain.Definition.MaterializeWithNewContext<
  Chain.Definition.ExtendMany<
    Chain.Definition.Empty,
    [
      Internal_,
      RequestMethods_,
      With_,
      Use_,
      Anyware_,
      Gql_,
      Scalar_,
    ]
  >,
  $Context
>

// dprint-ignore
type Create = <$Input extends InputStatic>(input: $Input) =>
  // todo fixme
  // eslint-disable-next-line
  // @ts-ignore
  Client<{
    name: HandleName<$Input>
    input: $Input
    config: NormalizeInput<$Input>
    retry: null
    extensions: []
    scalars: {}
    typeHooks: TypeHooksEmpty,
  }>

export const create: Create = (input) => {
  const initialContext = createContext({
    name: input.name ?? defaultName,
    extensions: [],
    scalars: Schema.Scalar.Registry.empty,
    // retry: null,
    input,
  })
  return createWithContext(initialContext)
}

export const createWithContext = (
  initialContext: ContextWithoutConfig,
) => {
  const context = createContext(initialContext)

  // @ts-expect-error ignoreme
  const clientDirect: Client = {
    _: context,
    ...gqlProperties(createWithContext, context),
    ...withProperties(createWithContext, context),
    ...useProperties(createWithContext, context),
    ...AnywareExtension(createWithContext, context),
    ...scalarProperties(createWithContext, context),
  }

  // todo test that access to this works without generation in a unit like test. We discovered bug and covered this in an e2e test.
  Object.assign(clientDirect, {
    ...requestMethodsProperties(createWithContext, context),
  })

  const clientProxy = proxyGet(clientDirect, ({ path, property }) => {
    // eslint-disable-next-line
    // @ts-ignore fixme "Type instantiation is excessively deep and possibly infinite"
    const onGetHandlers = context.extensions.map(_ => _.onBuilderGet).filter(_ => _ !== undefined)

    for (const onGetHandler of onGetHandlers) {
      const result = onGetHandler({
        client: clientDirect,
        path,
        property,
      })
      if (result !== undefined) return result
    }

    return undefined
  }) as any

  return clientProxy
}

type HandleName<$Input extends InputStatic> = $Input['name'] extends string ? $Input['name']
  : GlobalRegistry.DefaultClientName
