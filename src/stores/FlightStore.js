import { observable, action } from 'mobx'


export default class FlightStore {
  @observable location = ''
  @observable date = Date.now()

  @action.bound
  async search () {
    // api call to use this.location & this.date
    console.log('SEARCHING FLIGHTS :p')
  }
}