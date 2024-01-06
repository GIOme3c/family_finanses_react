import { useState } from "react"

import styles from './planExpenseComponent.module.scss'

const categories = ['Food', 'Huyud']

export default function PlanExpenseComponent({type}) {

  const [isOpen, setIsOpen] = useState(false);

  const [sum, setSum] = useState(0);
  const [category, setCategory] = useState(categories[0]);



  const open = () => {
    setIsOpen(true);
  }

  const close = () => {
    setIsOpen(false);
  }

  const changeSum = (e) => {
    setSum(e.target.value)
  }

  const changeCategory = (e) => {
    setCategory(e.target.value)
  }

  const onSave = () => {
    
    const dataToServer = {
      sum,
      category,
      isIncome: false,
    }
    console.log("save", dataToServer)
  }

  const planExpenseButton = <div className={styles.button} onClick={open}> <span>+</span> Add Category </div>

  const planExpenseModal = 
  // <div onClick={close}>
    <div>
      <div onClick={close}> CLOSE </div>
      <div>
        Br <input type="text" value={sum} onChange={(e) => changeSum(e)}/>
      </div>
      <div>
        <span>Expense</span> <span>Income</span>
      </div>
      <div>

        Category: <select value={category} onChange={(e)=>changeCategory(e)}>
          {categories.map(item => {
            return <option> {item} </option>
          })}
          
        </select>
      </div>
      <button onClick={onSave}>Save</button>
    </div> 
  // </div>


  return (
    <div>
      {isOpen ?  planExpenseModal : planExpenseButton}
    </div>
  )
}