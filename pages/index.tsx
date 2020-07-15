import React from 'react'
import { NextPage } from 'next'
import HomeContainer from '~/containers/views/Home'

type Props ={
}

const Index: NextPage<Props> = () => {
  return (
    <HomeContainer />
  )
}

Index.getInitialProps = async () => {
  return {}
}

export default Index
