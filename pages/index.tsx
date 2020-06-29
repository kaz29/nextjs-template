import React from 'react'
import { NextPage } from 'next'
import { Typography } from '@material-ui/core'

type Props ={
  message: string
}

const Index: NextPage<Props> = ({
  message,
}) => {

  return (
    <>
      <Typography variant={'body1'} display={'block'} noWrap={true}>
        {message}
      </Typography>
      <Typography variant={'body1'} display={'block'} noWrap={true}>
        {message}
      </Typography>
    </>
  )
}

Index.getInitialProps = () => {
  return { message: 'Hello, worldHello, worldHello, worldHello, worldHello, worldHello, worldHello, worldHello, worldHello, worldHello, worldHello, worldHello, worldHello, worldHello, world' }
}

export default Index
