import React from 'react'
import { NextPage } from 'next'
import ForecastView from '~/containers/views/Forecast'

type Props = React.ComponentProps<typeof ForecastView>

const ForecastPage: NextPage<Props> = (props) => {
  return (
    <ForecastView {...props} />
  )
}

export const getStaticPaths = async () => {
  return  {
    paths: [
      {params: {code: 'tokyo'}},
      {params: {code: 'osaka'}},
    ],
    fallback: false,
  }
}

export const getStaticProps = async ({params} : any) => {
  return {
    props: {
      code: String(params.code),
    },
  }
}

export default ForecastPage
