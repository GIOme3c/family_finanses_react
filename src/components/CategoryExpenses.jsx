import { useState } from 'react'
import BudgetDiagram from './BudgetDiagram'
import styles from './planBudget.module.scss'


// /id ?? /january24 ???
const categoryExpensesMock = {
  name: 'food',
  count: '233',
  all: '0',
  expenses: {
    '01.01': [
      {
        category: 'food',
        note: 'Evroopt',
        sum: '23',
      },
      {
        category: 'food',
        note: 'Evroopt',
        sum: '55',
      },
    ],
  },
}


export default function CategoryExpenses({category, categoriesData, percent}) {

  const [isOpen, setIsOpen] = useState(false);
  const [categoryExpensesData, setCategoryExpensesData] = useState(categoryExpensesMock)

  const open = () => {
    setIsOpen(true);
  }

  const close = () => {
    setIsOpen(false);
  }

  const categoryExpenseButton = 
    <div className={styles.smallCategories__item} onClick={open}>
      <BudgetDiagram percent={percent}/>
      <span className={styles.smallCategories__name}>{category}</span>
      <span className={styles.smallCategories__money}>{categoriesData[category].left ? <>Br  {categoriesData[category].left} left</> : <>Br {categoriesData[category].all}</>}</span>
    </div>

  const categoryExpenseList = 
  <div>
    <span onClick={close}>{'<'}</span>
    <div>
      <div>{category}</div>
      {/* <span>{date}</span>  С датой пока непоняткиии ее нужно сюда передавать и использовать в запросе чтобы бек знал за какой период нужны расходы эти*/}
      <span>Br {categoryExpensesData.count} / Br {categoryExpensesData.all}</span>

      {Object.keys(categoryExpensesData.expenses).map(date => {

        let allCount = 0;

        const expenseBlock = categoryExpensesData.expenses[date].map(expense => {
          console.log(expense)
          allCount += +expense.sum;
          console.log(allCount)

          return (
            <div className={styles.categoryExpenseContainer}>
              <div className={styles.categoryExpenseName}>
                <span>ICON</span>
                <div>
                  <div>{expense.category}</div>
                  <div>{expense.note}</div>
                </div>
              </div>
              <div>
                Br {expense.sum}
              </div>
            </div>
          )
        })

        return (
          <div className={styles.categoryExpenses}>
            <div className={styles.dateExpenses}><span>{date}</span> <span>{allCount}</span></div>

            {expenseBlock}

          </div>
        )
      })}

    </div>

  </div>

  return (
    <div>
      {isOpen ? categoryExpenseList : categoryExpenseButton}
    </div>
  )
}