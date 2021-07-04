import { useSnackbar } from 'notistack'
import { useAsync } from 'react-use'
import client from '~/requests/client'
import WeatherAPI from '~/requests/WeatherAPI'

interface Props {
  code?: string
}

export const useCurrentWeather = ({ code }: Props) => {
  const { enqueueSnackbar } = useSnackbar()

  const { loading, value } = useAsync(async () => {
    if (!code) return

    try {
      const { response } = await client.request(WeatherAPI.getCurrent({
        q: code,
        key: WeatherAPI.getApiKey(),
      }))

      return response
    } catch (error) {
      enqueueSnackbar('Error', { variant: 'error'})
    }
  }, [code])

  return {
    loading,
    currentWeather: value || undefined,
  }
}