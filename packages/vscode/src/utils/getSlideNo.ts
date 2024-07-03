import type { SourceSlideInfo } from '@smslidev/types'
import type { LoadedSlidevData } from '@smslidev/parser/fs'

function arrayShallowEqual<T>(a: T[], b: T[]) {
  return a.length === b.length && a.every((v, i) => v === b[i])
}

export function getSlideNo(data: LoadedSlidevData | undefined, source: SourceSlideInfo, importChain?: SourceSlideInfo[]) {
  if (!data)
    return null
  const index = data?.slides.find((s) => {
    if (s.importChain?.includes(source))
      return true
    if (s.source !== source)
      return false
    return !importChain || arrayShallowEqual(s.importChain ?? [], importChain)
  })?.index
  return index != null ? index + 1 : null
}
