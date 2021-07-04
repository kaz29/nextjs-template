import React from 'react'
import { NextPage } from 'next'
import ForecastView from '~/containers/views/Forecast'
import { useRouter } from 'next/router'

type Props = React.ComponentProps<typeof ForecastView>

const ForecastPage: NextPage<Props> = () => {
  const router = useRouter()

  return (
    <ForecastView code={String(router.query.code)} />
  )
}

export default ForecastPage
