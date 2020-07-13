import camelcaseKeys from 'camelcase-keys'
import snakecaseKeys from 'snakecase-keys'
import { AnyObject } from '~/types'

/**
 *
 * @param data
 */
export const convertFormValue = <T>(data: { [key: string]: any }): T => {
  const convertData: { [key: string]: any } = {}
  Object.keys(data).forEach((key) => {
    const value = data[key]

    // 文字列でなければそのまま格納
    if (typeof value !== 'string') {
      convertData[key] = value
      return
    }

    // 数字に変換できる場合
    if (enableConvertToNumber(value)) {
      convertData[key] = Number(value)
      return
    }

    // Booleanに変換できる場合
    if (enableConvertToBoolean(value)) {
      convertData[key] = value === 'true' ? true : false
      return
    }

    // ただの文字列の場合
    convertData[key] = value
  })
  return convertData as T
}

/**
 * 文字列が数値に変換できるか
 * @param value
 */
export const enableConvertToNumber = (value: string): boolean => {
  if (value === '') {
    return false
  }
  return !isNaN(Number(value))
}

/**
 * 文字列がBooleanに変換できるか
 * @param value
 */
export const enableConvertToBoolean = (value: string): boolean => {
  return (value === 'true') || (value === 'false')
}

/**
 * Objectのkeyの形式を変換します
 */
export const changeKeyFormat = (data: AnyObject, format?: 'camel' | 'snake'): unknown => {
  switch (format) {
    case 'camel':
      return camelcaseKeys(data, { deep: true }) as unknown
    case 'snake':
      return snakecaseKeys(data, { deep: true }) as unknown
    default:
      return data
  }
}
