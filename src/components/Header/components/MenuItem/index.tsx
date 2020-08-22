import React from 'react'
import { default as MaterialUIMenuItem } from '@material-ui/core/MenuItem'

type Props = {
  label: string
  currentPath: string
  path: string
  as: string
  onClick: (path: string, as: string) => void
}

const MenuItem: React.FC<Props> = ({
  label,
  currentPath,
  path,
  as,
  onClick,
}) => {

  return <MaterialUIMenuItem
    selected={currentPath === as}
    onClick={() => onClick(path, as)}>
    {label}
  </MaterialUIMenuItem>
}

export default MenuItem
