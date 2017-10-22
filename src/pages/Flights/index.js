import React from 'react'
import { observer, inject } from 'mobx-react'
import { Page, Card, CardGroup } from 'components'
import { Link } from "react-router-dom"
import moment from "moment"
import styles from "./styles.scss"

const Flights = observer(({ store: { flight: { searchResults } } }) => (
  <Page>
    <div className={styles.searchHeader}>
      <CardGroup>
        <h1 className={styles.header}>Search</h1>
        <div className={styles.keyline} />
        <div className={styles.searchDetails}>
          <div className={styles.data}>
            <label>Flights to</label>
            <div>Singapore Changi Airport</div>
          </div>
          <div className={styles.data}>
            <label>On</label>
            <div>{moment("2017-10-25T22:35-07:00").format("MMMM Do, YYYY")}</div>
          </div>
        </div>
      </CardGroup>
    </div>

    <CardGroup>
      <Card className={styles.flightContainer}>
        {searchResults.map(({ arrives_at, departs_at, date, price, id }) => (
          <Link key={id} className={styles.flight} to={`/flights/${id}`}>
            <div className={styles.data}>
              <label>Date</label>
              <div>{moment(departs_at).format("MMMM Do, YYYY")}</div>
            </div>
            <div className={styles.data}>
              <label>Departs At</label>
              <div>{moment(departs_at).format('LT')}</div>
            </div>
            <div className={styles.data}>
              <label>Arrives At</label>
              <div>{moment(arrives_at).format('LT')}</div>
            </div>
            <div className={styles.data}>
              <label>Price</label>
              <div>{price}</div>
            </div>
          </Link>
        ))}
      </Card>
    </CardGroup>
  </Page>
))

export default inject('store')(Flights)