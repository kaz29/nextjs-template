import { observable, action } from 'mobx'

class AppStore {
  @observable isLoading: boolean = false

  constructor(init: Partial<AppStore> = {}) {
    Object.assign(this, init)
  }

  @action showLoading = () => {
    this.isLoading = true
  }

  @action hideLoading = () => {
    this.isLoading = false
  }
}

export default AppStore
