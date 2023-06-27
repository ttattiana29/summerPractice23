import React from 'react'
import styles from './partButton.module.scss'
import light from './images/light.png'
import Button from '../button/Button'

const PartButton = () => {
  return (
    <div className={styles.main}>
        <h2 className={styles.mainTitle}>
            Участвуй <br />в акселераторе
        </h2>
        <Button />
        <img src={light}/>
    </div>
  )
}

export default PartButton