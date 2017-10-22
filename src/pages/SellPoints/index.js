import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { stringify } from 'query-string'
import { Page, Card, CardGroup, Loading, PillButton, PillInput } from 'components'
import { clientID, clientSecret } from 'utils'
import styles from "./styles.scss"


@inject('store') @observer
export default class SellPoints extends Component {
  getJsonFromUrl () {
    var query = this.props.location.search.substr(1);
    var result = {};
    query.split("&").forEach(function(part) {
      var item = part.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
  }

  render () {
    const points = parseInt(this.getJsonFromUrl().points)

    return (
      <Page>
        <CardGroup>
          <Card>
            <h1>Youre almost done!</h1>
            <label>Number of points to sell</label>
            <div>{points}</div>
            <br />
            <label>Amount to receive</label>
            <div>${Math.round(points * 1.5) / 100}</div>
          </Card>
          <PillButton className={styles.button} onClick={() => alert("You've sold your points!")
           }>Sell Points</PillButton>
        </CardGroup>
      </Page>
    )
  }
}