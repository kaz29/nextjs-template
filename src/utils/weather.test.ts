import { getWindIconDegree } from './weather'

describe('getWindTransformDegree', () => {
  test('should return valid degree', () => {
    expect(getWindIconDegree(0)).toBe(180)
    expect(getWindIconDegree(45)).toBe(225)
    expect(getWindIconDegree(90)).toBe(270)
    expect(getWindIconDegree(135)).toBe(315)
    expect(getWindIconDegree(180)).toBe(0)
    expect(getWindIconDegree(225)).toBe(45)
    expect(getWindIconDegree(270)).toBe(90)
    expect(getWindIconDegree(315)).toBe(135)
  })
})