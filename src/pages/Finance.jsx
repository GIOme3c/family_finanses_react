import { useState } from 'react'
import styles from './finance.module.scss'

import Overview from '../components/Overview'
import Budget from '../components/Budget'

export default function Finance() {

  const [isOverview, setIsOverview] = useState(true)

  const openOverview = () => {
    setIsOverview(true);
  }

  const openBudget = () => {
    setIsOverview(false);
  }

  return (
  <div>

    {isOverview ? <Overview/> : <Budget/>}

    <div className={styles['button-container']}>
      <div className={styles['button-container__button']} onClick={openOverview}>OVERVIEW</div>
      <div className={styles['button-container__button']} onClick={openBudget}>BUDGET</div>
    </div>
  </div>
  )
}