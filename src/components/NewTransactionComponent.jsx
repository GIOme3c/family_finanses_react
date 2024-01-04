import { useState } from "react"

export default function NewTransactionComponent() {

  const [isOpen, setIsOpen] = useState(false)

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  const newTransactionButton = <div onClick={open}>+</div>
  const newTransactionModal = <div>
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
  </div>;

  return (
    <>
      {isOpen ? newTransactionModal : newTransactionButton}
    </>
  )
}