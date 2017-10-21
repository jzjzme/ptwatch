import React from 'react'
import { observer, inject } from 'mobx-react'
import { Page, Card, CardGroup } from 'components'


const Flights = observer(({ store: { flight: { searchResults } } }) => (
  <Page>
    <CardGroup>
      {searchResults.trips.map((flight, i) => (
        <Card key={`${i}-${flight.di}`}>
          {flight.departure_name}
        </Card>
      ))}
    </CardGroup>
  </Page>
))

export default inject('store')(Flights)