import styles from './calendar.module.scss'

export default function Calendar({changeData}) {

  const dateNow = 'January 2024' //просчитать формулой

  return (
    <div className={styles.calendar}>
      <span>icon previous</span>
      <span>{dateNow}</span>
      <span>icon next</span>
    </div>
  )
}