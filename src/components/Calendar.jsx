import { useEffect, useState } from 'react';
import styles from './calendar.module.scss'

export default function Calendar({changeData}) {

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const d = new Date()

  const [dateNow, setDateNow] = useState(new Date())
  
  const nextPeriod = () => {
    setDateNow (state => {
      const newState = new Date(state)
      newState.setMonth(newState.getMonth()+1)
      return newState
    });

    const month = dateNow
    changeData(month)
  }

  const prevPeriod = () => {

    setDateNow (state => {
      const newState = new Date(state)
      newState.setMonth(newState.getMonth()-1)
      return newState
    });
    
    const month = dateNow
    changeData(month)
  }

  const dateView = `${months[dateNow.getMonth()]} ${dateNow.getFullYear()}`

  return (
    <div className={styles.calendar}>
      <span className={styles.icon} onClick={prevPeriod}>icon p</span>
      {/* <span className={styles['left-icon']}></span> */}

      <span className={styles.date}>{dateView}</span>
      <span className={styles.icon} onClick={nextPeriod}>icon n</span>
    </div>
  )
}