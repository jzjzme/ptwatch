import { observable } from 'mobx'


class AppStore {
  @observable loading = true

  constructor () {
    setTimeout(() => {
      this.loading = false
    }, 2000);
  }
}


const store = window.store = new AppStore()
export default store