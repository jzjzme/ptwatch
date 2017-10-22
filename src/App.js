import React from 'react';
import { Provider as MobxProvider, observer } from 'mobx-react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Home, Flights, Login, PointsDashboard } from './pages'
import { Loading } from 'components'
import { AppLayout } from './layouts'


export const App = observer(({ store }) => store.loading ? <Loading /> : (
  <MobxProvider store={store}>
    <Router>
      <Switch>
        <AppLayout exact path='/' component={Home} />
        <AppLayout path='/flights' component={Flights} />
        <AppLayout path='/login' component={Login} />
        <AppLayout path='/points-dashboard' component={PointsDashboard} />
      </Switch>
    </Router>
  </MobxProvider>
))