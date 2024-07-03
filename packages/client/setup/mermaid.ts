import type { MermaidOptions } from '@smslidev/types'
import { defineMermaidSetup } from '@smslidev/types'
import setups from '#slidev/setups/mermaid'

export default defineMermaidSetup(() => {
  const setupReturn: MermaidOptions = {
    theme: 'default',
  }

  for (const setup of setups)
    Object.assign(setupReturn, setup())

  return setupReturn
})
