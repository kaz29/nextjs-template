import React from 'react'
import DefaultLayout from './default'

type Props = {
  pathname: string
}

enum LayoutType {
  DEFAULT = 'default',
}

const getLayoutType = (pathname: string): LayoutType => {
  switch (pathname) {
    default:
      return LayoutType.DEFAULT
  }
}

const Layout: React.FC<Props> = ({ pathname, ...rest }) => {
  const layoutType = getLayoutType(pathname)

  switch(layoutType) {
    default:
      return (<DefaultLayout {...rest} />)
  }
}

export default Layout