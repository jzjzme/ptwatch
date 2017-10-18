import React from 'react'
import { observer, inject } from 'mobx-react'
import { Page } from 'components'
import logo from './logo.svg';
import './Home.css';


const Home = observer(({ store: { user } }) => (
  <Page>
    <nav>
      <h1>I am a navbar.</h1>
    </nav>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="App-intro">
        <b>The user's info is... Name: {`${user.firstName} ${user.lastName}`}, Email: {user.email}</b>
      </div>
    </div>
  </Page>
))

export default inject('store')(Home)