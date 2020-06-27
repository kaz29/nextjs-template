import {default as getConfigNext } from 'next/config'

const getConfig = (name: string): string | undefined => {
  if (!getConfigNext()) {
    return undefined
  }
  const { publicRuntimeConfig } = getConfigNext()
  const result = publicRuntimeConfig[name]
  return result ? result: undefined
}
export default getConfig
