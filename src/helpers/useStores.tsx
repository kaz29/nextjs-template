import { useContext } from 'react'
import { Store } from '~/stores'
import { MobXProviderContext } from 'mobx-react'

export const useStores = (): Store => {
  return useContext(MobXProviderContext) as Store
}
