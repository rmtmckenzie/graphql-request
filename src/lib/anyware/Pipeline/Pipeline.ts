import type { FindValueAfter, IsLastValue } from '../../prelude.js'
import type { Private } from '../../private.js'
import type { HookDefinitionMap, HookSequence } from '../hook/definition.js'
import type { HookPrivateInput, HookResultError, PrivateHook } from '../hook/private.js'
export * as Pipeline from './builder.js'

// dprint-ignore
export type Pipeline<
  $HookSequence extends HookSequence = HookSequence,
  $HookMap extends HookDefinitionMap<$HookSequence> = HookDefinitionMap<$HookSequence>,
  $Result = unknown,
> =
  // todo what is the point of private here? Its usually for hiding fields on a user facing interface. But is this type actually user facing?
  Private.Add<
    {
      hookSequence: $HookSequence
      hookMap: $HookMap
      result: $Result
    },
    {
      hookNamesOrderedBySequence: $HookSequence
      hooks: {
        [$HookName in $HookSequence[number]]:
          PrivateHook<
            $HookMap[$HookName]['slots'],
            HookPrivateInput<
               $HookMap[$HookName]['input'],
               $HookMap[$HookName]['slots']
            >,
            IsLastValue<$HookName, $HookSequence> extends true
              ? $Result
              : $HookMap[FindValueAfter<$HookName, $HookSequence>]
          >
      }
      passthroughErrorInstanceOf?: Function[]
      passthroughErrorWith?: (signal: HookResultError) => boolean
    }
  >
