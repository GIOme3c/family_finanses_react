import { useState } from "react"

import styles from './newTransactionComponent.module.scss'

export default function NewTransactionComponent() {

  const [isOpen, setIsOpen] = useState(false)

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  const newTransactionButton = <div onClick={open} className={styles.addButton}>+</div>

  const newTransactionModal = 
  <div className={styles.modalBg} onClick={close}>
    <div className={styles.modal}>
      <div onClick={close}> CLOSE </div>
      <div>
        Br <input type="text" value="0"/>
      </div>
      <div>
        <span>Expense</span><span>Income</span>
      </div>
      <div>
        Category:
      </div>
      <input type="text" placeholder="Note"/>
      <input type="date"/>
      <button>Save</button>
    </div>
  </div>

  return (
    <>
      {isOpen ? newTransactionModal : newTransactionButton}
    </>
  )
}