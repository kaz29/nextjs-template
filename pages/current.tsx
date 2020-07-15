import React from 'react'
import { NextPage } from 'next'
import HomeContainer from '~/containers/views/Home'
import client from '~/requests/client'
import WeatherAPI from '~/requests/WeatherAPI'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { apikey } = publicRuntimeConfig

type Props ={
}

const Index: NextPage<Props> = () => {
  return (
    <HomeContainer />
  )
}

Index.getInitialProps = async () => {

  const {response: { current, location }} = await client.request(WeatherAPI.getCurrent({
    q: 'Tokyo',
    key: apikey,
  }))

  console.log(current)
  console.log(location)

  return {}
}

export default Index
