import React from 'react'
import { Page, PillButton, Navigation as Navbar } from 'components'
import { clientID } from 'utils'
import capitalOneLogo from "../../img/capital-one-logo.png"

import styles from "./styles.scss"

const redirectURL = 'http://localhost:3000/points-dashboard'
const capitalOneLoginURL = `https://api-sandbox.capitalone.com/oauth2/authorize?redirect_uri=${redirectURL}&scope=read_rewards_account_info&client_id=${clientID}&response_type=code`

const Login = () => (
  <Page>
    <Navbar />
    <div className={styles.wrapper}>
      <div className={styles.signInBox}>
        <h1 className={styles.header}>Let's get started.</h1>
        <h2 className={styles.subheader}>Sign up to start selling rewards points<br /> for cash!</h2>
        <div className={styles.keyline} />
        <PillButton
          capitalOne={true}
          className={styles.button}
          onClick={() => window.location = capitalOneLoginURL}>
          Sign in with
          <img src={capitalOneLogo} alt="Capital One Logo" className={styles.capLogo} />
        </PillButton>
      </div>
    </div>
  </Page>
)

export default Login