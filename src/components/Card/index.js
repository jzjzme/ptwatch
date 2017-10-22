
import React from "react"
import { Link } from "react-router-dom"
import styles from "./styles.scss"

export const Card = ({ className, children, to }) => {
  if (to)
    return (<Link to={to} className={`${styles.card} ${className}`}>{children}</Link>)

  return (<div className={`${styles.card} ${className}`}>{children}</div>)
}

export const CardGroup = ({ className, children }) => (
  <div className={`${styles.cardGroup} ${className}`}>{children}</div>
)
