import React from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Page, Navigation } from 'components'
import './Home.css'


const Home = observer(({ store: { user, flight }, history }) => (
  <Page>
    <Navigation />
    <div className="App">
      <div className="App-intro">
        <b>The user's info is... Name: {`${user.firstName} ${user.lastName}`}, Email: {user.email}</b>
      </div>
      <input onChange={({ target: { value } }) => flight.location = value} value={flight.location} />
      <input onChange={({ target: { value } }) => flight.date = value} value={flight.date} />
      <button onClick={() => {
        flight.search()
        history.push('/flights')
      }}>
        Find Flights
      </button>
    </div>
  </Page>
))

export default inject('store')(withRouter(Home))