import React from 'react'
import { NextPage } from 'next'

type Props ={
  test: string
}

const Index: NextPage<Props> = () => {

  return (
    <div>Hello
    </div>
  )
}

Index.getInitialProps = () => {
  return { test: 'Hello, world' }
}

export default Index
