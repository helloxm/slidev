// Types for virtual modules
// `#slidev/*` is an alias for `/@slidev/*`, because TS will consider `/@slidev/*` as an absolute path that we can't override

declare module '#slidev/configs' {
  import type { SlidevConfig } from '@smslidev/types'

  const configs: SlidevConfig & { slidesTitle: string }
  export default configs
}

declare module '#slidev/global-layers' {
  import type { ComponentOptions } from 'vue'

  export const GlobalTop: ComponentOptions
  export const GlobalBottom: ComponentOptions

  export const SlideTop: ComponentOptions
  export const SlideBottom: ComponentOptions
}

declare module '#slidev/slides' {
  import type { ShallowRef } from 'vue'
  import type { SlideRoute } from '@smslidev/types'

  const slides: ShallowRef<SlideRoute[]>
  export { slides }
}

declare module '#slidev/title-renderer' {
  import type { ComponentOptions } from 'vue'

  const component: ComponentOptions
  export default component
}

declare module '#slidev/custom-nav-controls' {
  import type { ComponentOptions } from 'vue'

  const component: ComponentOptions
  export default component
}

declare module '#slidev/shiki' {
  import type { ShikiHighlighterCore } from 'shiki/core'
  import type { BundledLanguage, BundledTheme, CodeToHastOptions } from 'shiki'

  export { shikiToMonaco } from '@shikijs/monaco'

  export const langs: BundledLanguage[]
  export const themes: BundledTheme | Record<string, BundledTheme>
  export const shiki: Promise<ShikiHighlighterCore>
  export function getHighlighter(): Promise<(code: string, lang: string, options?: Partial<CodeToHastOptions>) => string>
}

declare module '#slidev/setups/monaco' {
  import type { MonacoSetup } from '@smslidev/types'

  const setups: MonacoSetup[]
  export default setups
}

declare module '#slidev/setups/code-runners' {
  import type { CodeRunnersSetup } from '@smslidev/types'

  const setups: CodeRunnersSetup[]
  export default setups
}

declare module '#slidev/setups/mermaid' {
  import type { MermaidSetup } from '@smslidev/types'

  const setups: MermaidSetup[]
  export default setups
}

declare module '#slidev/setups/main' {
  import type { AppSetup } from '@smslidev/types'

  const setups: AppSetup[]
  export default setups
}

declare module '#slidev/setups/root' {
  import type { RootSetup } from '@smslidev/types'

  const setups: RootSetup[]
  export default setups
}

declare module '#slidev/setups/shortcuts' {
  import type { ShortcutsSetup } from '@smslidev/types'

  const setups: ShortcutsSetup[]
  export default setups
}

declare module '#slidev/setups/routes' {
  import type { RoutesSetup } from '@smslidev/types'

  const setups: RoutesSetup[]
  export default setups
}

declare module '#slidev/setups/context-menu' {
  import type { ContextMenuSetup } from '@smslidev/types'

  const setups: ContextMenuSetup[]
  export default setups
}

declare module '#slidev/styles' {
  // side-effects only
}

declare module '#slidev/monaco-types' {
  // side-effects only
}

declare module '#slidev/monaco-run-deps' {
  const modules: Recored<string, unknown>
  export default modules
}
