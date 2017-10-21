import React from 'react'
import { observer, inject } from 'mobx-react'
import { Page, Card, CardGroup } from 'components'


const Flights = observer(({ store: { flight: { searchResults } } }) => (
  <Page>
    {searchResults.trips.map((flight, i) => (
      <div key={`${i}-${flight.di}`}>
        {flight.departure_name}
      </div>
    ))}
  </Page>
))

export default inject('store')(Flights)