import { useState } from "react"

import styles from './newTransactionComponent.module.scss'
import CategoryChoose from "./CategoryChoose";

export default function PlanExpenseComponent() {

  const [isOpen, setIsOpen] = useState(false)
  const [sum, setSum] = useState(0);
  const [bigCategory, setBigCategory] = useState('1')
  const [category, setCategory] = useState('');

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


  const onSave = () => {

    const dataToServer = {
      sum,
      bigCategory,
      category,
    }
    // console.log("save", dataToServer)
    
  }

  const planExpenseButton = <div className={styles.planButton} onClick={open}> <span>+</span> Add Category </div>

  const planExpenseModal = 
    <div className={styles.modal}>
      <div onClick={close} className={styles.closeButton}> x </div>
      <div className={styles.newTransaction}>Plan Budget</div>
      <div className={styles.sum}>
        Br <input type="text" value={sum} onChange={(e) => changeSum(e)}/>
      </div>

      <div className={styles.types}>
        <span className={bigCategory === '1' ? styles.types__active : ''} onClick={(e) => changeBigCategory(e)} id='1'>Income</span>
        <span className={bigCategory == '2' ? styles.types__active : ''} onClick={(e) => changeBigCategory(e)} id='2'>Regular</span>
        <span className={bigCategory === '3' ? styles.types__active : ''} onClick={(e) => changeBigCategory(e)} id='3'>Other</span>
      </div>

      <div className={styles.categoryContainer}>
        Category:
        <CategoryChoose bigCategoryId={bigCategory} changeCategory={changeCategory}/>
      </div>      

      <button className={styles.saveButton} onClick={onSave}>Save</button>
    </div>

  return (
    <div>
      {isOpen ?  planExpenseModal : planExpenseButton}
    </div>
  )
}
