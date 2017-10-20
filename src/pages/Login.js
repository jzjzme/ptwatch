import React from 'react'
import { Page, Navigation as Navbar } from 'components'
import { clientID } from 'utils'

const redirectURL = 'http://localhost:3000/points-dashboard'
const capitalOneLoginURL = `https://api-sandbox.capitalone.com/oauth2/authorize?redirect_uri=${redirectURL}&scope=read_rewards_account_info&client_id=${clientID}&response_type=code`

const Login = () => (
  <Page>
    <Navbar />
    <button onClick={() => window.location = capitalOneLoginURL}>
      Signup/Login With CapitalOne
    </button>
  </Page>
)

export default Login