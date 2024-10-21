import type { Directive } from '../Directive.js'
import { Scalar } from '../types/Scalar/Scalar.js'

export const SkipDirective: Directive = {
  name: `skip`,
  arguments: {
    if: {
      name: `if`,
      type: Scalar.Boolean,
    },
  },
}
