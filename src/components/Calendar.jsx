import { useState } from 'react';
import styles from './calendar.module.scss'

export default function Calendar({changeData}) {

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const d = new Date()

  const [dateNow, setDateNow] = useState(new Date())  //просчитать формулой

  // console.log()
  
  


  const nextPeriod = () => {
    // setDateNow (dateNow+1);

    setDateNow ([dateNow.getMonth()+1]);

    // dateNow.setMonth(dateNow.getMonth()+1)  Как изменить дату через стейт а не сетмонс

    const month = dateNow //просчитать месяц или дату просто отправлять ??
    // changeData(month)
  }

  const prevPeriod = () => {
    setDateNow (dateNow-1);
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