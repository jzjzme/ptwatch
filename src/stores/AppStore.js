import { observable } from 'mobx'
import UserStore from './UserStore'


class AppStore {
  @observable loading = true

  constructor () {
    this.user = new UserStore()
    setTimeout(() => {
      this.loading = false
    }, 2000);
  }
}


const store = window.store = new AppStore()
export default store