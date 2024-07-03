import type { ShikiSetupReturn } from '@smslidev/types'
import { defineShikiSetup } from '@smslidev/types'

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    langs: [
      'ts',
      'js',
      'vue',
      'html',
    ],
  }
})
