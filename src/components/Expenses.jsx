import styles from './expenses.module.scss'

const dataExpensesMock = {
  general: {
    income: '3 000',
    expenses: '833',
    balance: '2 167',
  },
  period: {
    '01.01': [
      {
        category: 'DSVFBFD',
        note:'VDSVDSVS',
        sum:'1 200',
        // date:'',
        isIncome: false,
      },
      {
        category: 'Food',
        note:'Evroopt',
        sum:'129',
        // date:'',
        isIncome: false,
      },
      {
        category: 'Food',
        note:'Evroopt',
        sum:'129',
        // date:'',
        isIncome: false,
      },
      {
        category: 'Food',
        note:'Evroopt',
        sum:'129',
        // date:'',
        isIncome: false,
      },

    ],
    '04.01': [
      {
        category: 'Food',
        note:'Evroopt',
        sum:'129',
        // date:'',
        isIncome: false,
      },
    ],
  }
}


export default function Expenses({dataExpenses}) {

  const generalValuesJSX = 
  <div className={styles.generalValues}>
    <div className={styles['generalValues__item']}>Br {dataExpensesMock.general.income} <span>Income</span></div>
    <div className={styles['generalValues__item']}>Br {dataExpensesMock.general.expenses} <span>Expenses</span></div>
    <div className={styles['generalValues__item']}>Br {dataExpensesMock.general.balance} <span>Balance</span></div>
  </div>

  const expensesJSX = Object.keys(dataExpensesMock.period).map(date=> {
    const expense = dataExpensesMock.period[date];

    return (
      <div>
        <div className={styles.date}>{date}</div> 
        {/* добавить сюда день недели ?? и сокр мес а не цифрой ? и потом отсортировать в обратном порядке массив чтобы расходы шли от сегодняшнего числа и до первого вниз */}

        {expense.map(item => 
        <div className={styles['expense__item']}>
          
          <div className={styles.expense__helper}>
            <span>ICON</span>
            <div className={styles['expense__names']}>
              <span>{item.note}</span>
              <span>{item.category}</span>
            </div>
          </div>

          <span className={styles.sum}>{item.sum}</span>
        </div>
        )}
    </div>
    )
  })


  return (
    <div className={styles.expensesContainer}>
      {generalValuesJSX}
      {expensesJSX}
    </div>
  )
}