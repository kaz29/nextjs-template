import React from 'react'
import { NextPage } from 'next'
import HomeContainer from '~/containers/Home'

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
