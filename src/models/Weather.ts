export type Weather = {
  last_updated: string
  temp_c: number
  temp_f: number
  is_day: number
  condition: {
    icon: string
  },
  wind_mph: number,
  wind_kph: number,
  wind_degree: number,
  wind_dir: string,
  // ...
}