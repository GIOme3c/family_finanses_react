import { useState } from "react"

import styles from './newTransactionComponent.module.scss'
import CategoryChoose from "./CategoryChoose";

export default function NewTransactionComponent() {

  const [isOpen, setIsOpen] = useState(false)

  const [sum, setSum] = useState(0);
  const [category, setCategory] = useState('Food');

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  const changeSum = (e) => {
    setSum(e.target.value)
  }

  const changeCategory = (category) => { 
    setCategory(category)
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
      <div className={styles.types}>
        <span>Expense</span><span>Income</span>
      </div>
      <div className={styles.categoryContainer}>
        Category:
        <CategoryChoose changeCategory={changeCategory}/>
      </div>
      <input className={styles.note} type="text" placeholder="Note"/>
      <input className={styles.date} type="date"/>
      <button className={styles.saveButton}>Save</button>
    </div>
  // </div>

  return (
    <>
      {isOpen ? newTransactionModal : newTransactionButton}
    </>
  )
}