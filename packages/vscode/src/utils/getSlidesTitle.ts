import type { LoadedSlidevData } from '@smslidev/parser/fs'

export function getSlidesTitle(data: LoadedSlidevData): string | undefined {
  // If the title is set via headmatter, it has already been the first slide's title
  return data.slides[0].title
}
