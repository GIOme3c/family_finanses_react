const dataExpensesMock = {
  general: {
    income: '3000',
    expenses: '833',
    balance: '2167',
  },
  period: {
    '01.01': [
      {
        category: 'DSVFBFD',
        note:'VDSVDSVS',
        sum:'1200',
        // date:'',
        isIncome: false,
      }
    ]
  }
}


export default function Expenses({dataExpenses}) {

  const generalValuesJSX = 
  <>
    <div>Br {dataExpensesMock.general.income} <span>Income</span></div>
    <div>Br {dataExpensesMock.general.expenses} <span>Expenses</span></div>
    <div>Br {dataExpensesMock.general.balance} <span>Balance</span></div>
  </>

  const expensesJSX = Object.keys(dataExpensesMock.period).map(date=> {
    const expense = dataExpensesMock.period[date];

    return (
      <div>
        <div>{date}</div>

        {expense.map(item => 
        <div>
          <span>ICON</span>
          <div>
            {item.note}
            {item.category}
          </div>

          {item.sum}
        </div>
        )}
    </div>
    )
  })


  return (
    <div>
      {generalValuesJSX}
      {expensesJSX}
    </div>
  )
}