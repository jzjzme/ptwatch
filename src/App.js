import React, { Component } from 'react';
import { Provider as MobxProvider, observer } from 'mobx-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Flights } from './pages'
import { Loading } from 'components'


export const App = observer(({ store }) => store.loading ? <Loading /> : (
  <MobxProvider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/flights' component={Flights} />
      </Switch>
    </Router>
  </MobxProvider>
))