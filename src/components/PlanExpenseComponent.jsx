import { useState } from "react"

export default function PlanExpenseComponent({type}) {

  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  }

  const close = () => {
    setIsOpen(false);
  }

  const planExpenseButton = <div onClick={open}> + Plan Category </div>
  const planExpenseModal = <div>
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
    <button>Save</button>
    

  </div>


  return (
    <div>
      {isOpen ?  planExpenseModal : planExpenseButton}
    </div>
  )
}