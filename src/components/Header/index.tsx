import React, { } from 'react'
import Presentational from './components'
import Router, { useRouter } from 'next/router'
import { menus } from './constants'

type Props = {
}

const Header: React.FC<Props> = (props) => {
  const router = useRouter()

  const handleMenuSelect = (path: string, as: string) => {
    Router.push(path, as)
  }

  return (
    <Presentational
      menus={menus}
      currentPath={router.pathname}
      handleMenuSelect={handleMenuSelect}
      {...props}
    />
  )
}

export default Header
