import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { stringify } from 'query-string'
import { Page, Navigation as Navbar } from 'components'
import { clientID, clientSecret } from 'utils'


@observer
export default class PointsDashboard extends Component {
  async componentDidMount() {
    const { location: { search } } = this.props
    const queryParams = stringify({
      code: new URLSearchParams(search).get('code'),
      client_id: clientID,
      client_secret: clientSecret,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000/points-dashboard'
    })

    try {
      const data = await fetch(`https://api-sandbox.capitalone.com/oauth2/token?${queryParams}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      }).then(res => res.json())
      // const data = await fetch(`https://api-sandbox.capitalone.com/oauth2/token`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //   },
      //   body: {
      //     code,
      //     client_id: clientID,
      //     client_secret: clientSecret,
      //     grant_type: 'authorization_code',
      //     redirect_uri: 'http://localhost:3000/points-dashboard'
      //   }
      // })
      console.log('DATA: ', data)
    } catch (e) {
      console.log('ERROR: ', e)
    }
    // curl
    //   -i -k --tlsv1
    //   -H "Content-Type:application/x-www-form-urlencoded"
    //   -d "code=4cb656c112df460cb4821cf7787c553b&client_id=enterpriseapi-sb-tJOw55ype3LktRNB5zY7oIHq&client_secret=175384eb1888f2dded491e8d7242398f0c5901db&grant_type=authorization_code&redirect_uri=https://developer.capitalone.com/products/playground"
    //   -X POST https://api-sandbox.capitalone.com/oauth2/token
  }

  render () {
    const { location: { search } } = this.props
    return (
      <Page>
        <Navbar />
        <h1>The CapitalOne Code: <code>{new URLSearchParams(search).get('code')}</code></h1>
        WELCOME TO THE POINTS DASHBOARD :p
      </Page>
    )
  }
}