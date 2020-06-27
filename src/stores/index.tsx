import { configure } from 'mobx'
import AppStore from './AppStore'

// stateの書き換えはactionを介すことを必須とする
configure({ enforceActions: 'observed' })

export type Store = {
  app: AppStore
}

export default function makeStore(state: Partial<Store> = {}): Store {
  return {
    app: new AppStore(state.app),
  }
}
