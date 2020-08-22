import React from 'react'
import { NextPage } from 'next'
import CurrentContainerView from '~/containers/views/CurrentWrather'

type Props = React.ComponentProps<typeof CurrentContainerView>

const CurrentWeather: NextPage<Props> = (props) => {
  return (
    <CurrentContainerView {...props} />
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

export default CurrentWeather
