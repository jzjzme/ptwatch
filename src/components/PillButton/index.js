
import React, {Component} from "react"
import { Link } from "react-router-dom"
import styles from "./styles.scss"

export class PillButton extends Component {
  render () {
    const { className, children, to, hollow } = this.props

    const buttonClassName = `${styles.button} ${hollow && styles.mHollow}`

    return (
      <Link to={to} className={className}><button className={buttonClassName}>{children}</button></Link>
    )
  }
}
