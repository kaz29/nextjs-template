import { Menu } from './types'

export const menus: Menu[] = [
  {
    label: 'Home',
    path: '/',
    as: '/',
  },{
    label: 'Current - Tokyo',
  },{
    label: 'Current - Tokyo',
    path: '/current/[code]',
    as: '/current/tokyo',
  },{
    label: 'Current - Osaka',
    path: '/current/[code]',
    as: '/current/osaka',
  },{
    label: 'Current - Tokyo',
  },{
    label: 'Forecast - Tokyo',
    path: '/forecast/[code]',
    as: '/forecast/tokyo',
  },{
    label: 'Forecast - Osaka',
    path: '/forecast/[code]',
    as: '/forecast/osaka',
  },
]
