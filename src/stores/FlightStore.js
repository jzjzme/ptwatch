import { observable, action } from 'mobx'


export default class FlightStore {
  @observable location = ''
  @observable date = Date.now()
  @observable searchResults = []

  constructor () {
    this.searchResults = fakeSearchResults
  }

  @action.bound
  async search () {
    // api call to use this.location & this.date
    /**
     * Params:
     * adults = 1
     * origin = 'SFO'
     * price  = 'USD900'
     * dest   = 'LAS'
     * date   = '2017-10-25'
     */
    console.log('SEARCHING FLIGHTS :p')
  }
}


const fakeSearchResults = [
  {
    arrives_at: "2017-10-26T00:08-07:00",
    date: "2017-10-25",
    departs_at: "2017-10-25T22:35-07:00",
    id: "455",
    price: "USD66.20"
  },
  {
    arrives_at: "2017-10-25T07:54-07:00",
    date: "2017-10-25",
    departs_at: "2017-10-25T06:20-07:00",
    id: "614",
    price: "USD66.20"
  },
  {
    arrives_at: "2017-10-25T20:53-07:00",
    date: "2017-10-25",
    departs_at: "2017-10-25T19:25-07:00",
    id: "19182",
    price: "USD66.20"
  },
  {
    arrives_at: "2017-10-25T21:44-07:00",
    date: "2017-10-25",
    departs_at: "2017-10-25T20:10-07:00",
    id: "681",
    price: "USD66.20"
  },
  {
    arrives_at: "2017-10-25T14:15-07:00",
    date: "2017-10-25",
    departs_at: "2017-10-25T12:42-07:00",
    id: "19062",
    price: "USD66.20"
  },
  {
    arrives_at: "2017-10-25T18:44-07:00",
    date: "2017-10-25",
    departs_at: "2017-10-25T17:20-07:00",
    id: "19142",
    price: "USD66.20"
  },
  {
    arrives_at: "2017-10-25T18:44-07:00",
    date: "2017-10-25",
    departs_at: "2017-10-25T17:20-07:00",
    id: "1914",
    price: "USD66.20"
  },
  {
    arrives_at: "2017-10-25T14:15-07:00",
    date: "2017-10-25",
    departs_at: "2017-10-25T12:42-07:00",
    id: "1906",
    price: "USD66.20"
  },
  {
    arrives_at: "2017-10-25T15:06-07:00",
    date: "2017-10-25",
    departs_at: "2017-10-25T13:35-07:00",
    id: "19082",
    price: "USD66.20"
  },
  {
    arrives_at: "2017-10-25T20:53-07:00",
    date: "2017-10-25",
    departs_at: "2017-10-25T19:25-07:00",
    id: "1918",
    price: "USD66.20"
  },
  {
    arrives_at: "2017-10-25T17:44-07:00",
    date: "2017-10-25",
    departs_at: "2017-10-25T16:10-07:00",
    id: "1416",
    price: "USD66.20"
  },
  {
    arrives_at: "2017-10-25T20:38-07:00",
    date: "2017-10-25",
    departs_at: "2017-10-25T19:05-07:00",
    id: "394",
    price: "USD66.20"
  },
  {
    arrives_at: "2017-10-25T15:06-07:00",
    date: "2017-10-25",
    departs_at: "2017-10-25T13:35-07:00",
    id: "1908",
    price: "USD66.20"
  },
  {
    arrives_at: "2017-10-25T08:12-07:00",
    date: "2017-10-25",
    departs_at: "2017-10-25T06:40-07:00",
    id: "2288",
    price: "USD67.00"
  },
  {
    arrives_at: "2017-10-25T20:41-07:00",
    date: "2017-10-25",
    departs_at: "2017-10-25T19:11-07:00",
    id: "188",
    price: "USD67.00"
  }
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