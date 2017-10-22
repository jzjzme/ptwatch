import React from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Page, PillButton, PillInput, VideoBackground } from 'components'
import styles from "./styles.scss"

const Home = observer(({ store: { user, flight }, history }) => (
  <Page>
    <section className={styles.splash}>
      <VideoBackground />
      <div className={styles.splashCopy}>
        <h1 className={styles.header}>Buy flights to anywhere for cheap without any extra hassle.</h1>
        <h2 className={styles.subHeader}>Utilize the PointWatch marketplace.</h2>
      </div>
      <div className={styles.searchWrapper}>
        <PillInput
          className={styles.input}
          placeholder="Pick a place"
          onChange={({ target: { value } }) => flight.location = value}
          value={flight.location} />
        
        <PillInput
          className={styles.input}
          placeholder="Choose a date"
          onChange={({ target: { value } }) => flight.date = value}
          value={flight.date} />

        <PillButton onClick={() => {
          flight.search()
          history.push('/flights')
        }}>Find Flights</PillButton>
      </div>
    </section>
  </Page>
))

export default inject('store')(withRouter(Home))
