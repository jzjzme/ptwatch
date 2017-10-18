
import React, {Component} from "react"
import { Link } from "react-router-dom"
import styles from "./styles.scss"

export class PillButton extends Component {
  render () {
    const { className, children, to } = this.props

    return (
      <Link to={to}><button className={`${styles.button} ${className}`}>{children}</button></Link>
    )
  }
}
