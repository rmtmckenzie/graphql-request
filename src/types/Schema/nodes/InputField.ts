import type { InputTypes } from '../typeGroups.js'

export interface InputField<
  $Type extends InputTypes,
> // $NamedType extends NamedOutputTypes,
{
  type: $Type
  // namedType: $NamedType
}
