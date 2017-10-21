
import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navigation } from "components"
import styles from "./styles.scss"

export const AppLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={(matchProps) => (
      <div className={styles.layout}>
        <Navigation />
        <Component {...matchProps} />
      </div>
    )} />
  )
};
