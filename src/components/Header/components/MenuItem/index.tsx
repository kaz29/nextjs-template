import React from 'react'
import { default as MaterialUIMenuItem } from '@material-ui/core/MenuItem'

type Props = {
  label: string
  currentPath: string
  path: string
  onClick: (path: string) => void
}

const MenuItem: React.FC<Props> = ({
  label,
  currentPath,
  path,
  onClick,
}) => {

  return <MaterialUIMenuItem
    selected={currentPath === path}
    onClick={() => onClick(path)}>
    {label}
  </MaterialUIMenuItem>
}

export default MenuItem
