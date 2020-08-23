import {default as getConfigNext } from 'next/config'

const getConfig = (name: string): string | undefined => {
  let publicRuntimeConfig
  try {
    const config = getConfigNext()
    publicRuntimeConfig = config.publicRuntimeConfig
  } catch (error) {
    /**
     * MEMO: SSG時のgetStaticPathsでは、publicRuntimeConfig使用できないためenvから取得する
     * @see https://nextjs.org/docs/api-reference/next.config.js/environment-variables
     */
    publicRuntimeConfig = process.env
  }
  const result = publicRuntimeConfig[name]

  return result ? result: undefined
}
export default getConfig
