import { useState } from "react"

import styles from './newTransactionComponent.module.scss'
import CategoryChoose from "./CategoryChoose";

export default function NewTransactionComponent() {

  const [isOpen, setIsOpen] = useState(false)

  const [sum, setSum] = useState(0);

  const [bigCategory, setBigCategory] = useState('1')
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('')
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  const changeSum = (e) => {
    setSum(e.target.value)
  }

  const changeBigCategory = (e) => {
    setBigCategory(e.target.id)
  }

  const changeCategory = (category) => { 
    setCategory(category)
  }

  const changeNote = (e) => {
    setNote(e.target.value)
  }

  const changeDate = (e) => {
    // console.log(e)
    console.log(e.target.value)
    setDate(e.target.value)
  }


  const onSave = () => {
    console.log(sum, bigCategory, category, note, date)
  }

  const newTransactionButton = <div onClick={open} className={styles.addButton}>+</div>

  const newTransactionModal = 
  // <div className={styles.modalBg} onClick={close}>
    <div className={styles.modal}>
      <div onClick={close} className={styles.closeButton}> x </div>
      <div className={styles.newTransaction}>New Transaction</div>
      <div className={styles.sum}>
        Br <input type="text" value={sum} onChange={(e) => changeSum(e)}/>
      </div>

      {/* <div className={styles.types}>
        <span>Expense</span><span>Income</span>
      </div> */}

      <div className={styles.types}>
        <span className={bigCategory === '1' ? styles.types__active : ''} onClick={(e) => changeBigCategory(e)} id='1'>Income</span>
        <span className={bigCategory == '2' ? styles.types__active : ''} onClick={(e) => changeBigCategory(e)} id='2'>Regular</span>
        <span className={bigCategory === '3' ? styles.types__active : ''} onClick={(e) => changeBigCategory(e)} id='3'>Other</span>
      </div>

      <div className={styles.categoryContainer}>
        Category:
        <CategoryChoose bigCategoryId={bigCategory} changeCategory={changeCategory}/>
      </div>

      <input className={styles.note} type="text" placeholder="Note" value={note} onChange={(e) => changeNote(e)}/>

      {/* <input className={styles.date} type="date" defaultValue={new Date().toISOString().slice(0, 10)} onChange={(e) => changeDate(e)}/> */}
      <input className={styles.date} type="date" value={date} onChange={(e) => changeDate(e)}/>

      <button className={styles.saveButton} onClick={onSave}>Save</button>
    </div>
  // </div>

  return (
    <>
      {isOpen ? newTransactionModal : newTransactionButton}
    </>
  )
}