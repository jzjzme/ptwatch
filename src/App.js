import React, { Component } from 'react';
import { Provider as MobxProvider, observer } from 'mobx-react'
import logo from './logo.svg';
import './App.css';
import { Loading } from 'components'


export const App = observer(({ store }) => store.loading ? <Loading /> : (
  <MobxProvider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  </MobxProvider>
))

// const Loading = () => <h1>Loading...</h1>