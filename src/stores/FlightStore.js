import { observable, action } from 'mobx'


export default class FlightStore {
  @observable location = ''
  @observable date = Date.now()
  @observable searchResults = []

  constructor () {
    this.searchResults = [
      {
        arrives_at: "2017-10-25T23:26-07:00",
        date: "2017-10-25",
        departs_at: "2017-10-25T22:35-07:00",
        id: "2081",
        price: "USD110.20"
      },
      {
        arrives_at: "2017-10-25T23:23-01:00",
        date: "2017-10-25",
        departs_at: "2017-10-25T21:3-10:00",
        id: "2031",
        price: "USD510.10"
      },
      {
        arrives_at: "2017-10-25T23:21-03:00",
        date: "2017-10-25",
        departs_at: "2017-10-25T22:35-01:00",
        id: "2051",
        price: "USD134.20"
      },
    ]
    // this.searchResults = {
    //   id: "T5dJTxtxQv-uQ6OuYtaWkw",
    //   key: "[SYD:LON:2014-01-24:2014-01-29]~1~0~XX~SG",
    //   trips: Array.from({ length: 15 }, (_, i) => ({
    //     id: "SYD:LON:2014-01-24:2014-01-29",
    //     departure_code: "SYD",
    //     departure_name: "Sydney",
    //     departure_state_code: "NSW",
    //     departure_country_code: "AU",
    //     departure_country_name: "Australia",
    //     arrival_code: "LON",
    //     arrival_name: "London",
    //     arrival_city: true,
    //     arrival_country_code: "GB",
    //     arrival_country_name: "United Kingdom",
    //     outbound_date: "2014-01-24",
    //     inbound_date: "2014-01-29",
    //     trip_type: "standard"
    //   })),
    //   cabin: "economy",
    //   adults_count: 1,
    //   country_site_code: "XX",
    //   user_country_code: "SG",
    //   created_at: "2014-01-24T12:51:59.050+08:00"
    // }
  }
  @action.bound
  async search () {
    // api call to use this.location & this.date
    console.log('SEARCHING FLIGHTS :p')
  }
}