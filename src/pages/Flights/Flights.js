import React from 'react'
import { observer, inject } from 'mobx-react'
import { Page, Card, CardGroup } from 'components'


const Flights = observer(({ store: { flight: { searchResults } } }) => (
  <Page>
    <CardGroup>
      {/* {searchResults.trips.map((flight, i) => ( */}
      {searchResults.map(({ arrives_at, departs_at, date, price, id }) => (
        <Card key={id}>
          <div>Departs: {departs_at}</div>
          <div>Arrives: {arrives_at}</div>
          <div>Price: {price}</div>
        </Card>
      ))}
    </CardGroup>
  </Page>
))

export default inject('store')(Flights)