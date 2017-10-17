import { observable } from 'mobx'


class AppStore {
  // @observable loading = true

  constructor () {
    // this.loading = false
  }
}


const store = window.store = new AppStore()
export default store