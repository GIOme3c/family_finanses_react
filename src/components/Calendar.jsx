import { useState } from 'react';
import styles from './calendar.module.scss'

export default function Calendar({changeData}) {

  const [dateNow, setDateNow] = useState('January 2024')  //просчитать формулой

  const nextPeriod = () => {
    setDateNow (dateNow+1);
    const month = dateNow //просчитать месяц или дату просто отправлять ??
    changeData(month)
  }

  const prevPeriod = () => {
    setDateNow (dateNow-1);
    const month = dateNow
    changeData(month)
  }

  return (
    <div className={styles.calendar}>
      <span className={styles.icon} onClick={prevPeriod}>icon p</span>
      {/* <span className={styles['left-icon']}></span> */}

      <span className={styles.date}>{dateNow}</span>
      <span className={styles.icon} onClick={nextPeriod}>icon n</span>
    </div>
  )
}