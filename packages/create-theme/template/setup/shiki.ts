import type { ShikiSetupReturn } from '@smslidev/types'
import { defineShikiSetup } from '@smslidev/types'

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
  }
})
