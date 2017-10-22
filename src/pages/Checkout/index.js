import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Page, Card, CardGroup, PillButton, PillInput } from 'components'
import moment from "moment"
import styles from "../Flights/styles.scss"

@inject('store') @observer
export default class Checkout extends Component {

  getFlight () {
    const { store, match } = this.props
    const { searchResults } = store.flight
    const id = match.params.id

    return searchResults.find((el) => {
      if (el.id === id) {
        return el
      }
    })
  }

  render () {
    const {id, departs_at, arrives_at, price} = this.getFlight()

    return (
      <Page>
        <div className={styles.searchHeader}>
          <CardGroup>
            <h1 className={styles.header}>Flight to Singapore Changi Airport</h1>
            <div className={styles.keyline} />
            <div className={styles.searchDetails}>
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
            </div>
          </CardGroup>
        </div>

        <CardGroup>
          <Card>
            <h1>Passenger Information</h1>
            <PillInput placeholder="First Name" />
            <PillInput placeholder="Last Name" />
            <PillInput placeholder="Email" type="email" />
            <PillInput placeholder="Date of Birth" type="date" />
            <select placeholder="gender">
              <option>Male</option>
              <option>Female</option>
            </select>
          </Card>
        </CardGroup>
      </Page>
    )
  }
}
