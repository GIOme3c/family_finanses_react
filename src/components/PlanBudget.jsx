const dataPlanBudgetMock = {
  income : {
    count: '0',
    categories: {
      salary: {
        left: '0',
        all: '3000',
      },
    },
  },
  housing: {
    count: '230',
    categories: {
      rent: {
        left: '0',
        all: '700',
      },
      electricity: {
        left: 70,
        all: 70,
      },
    },
    
  },
  otherExpenses: {
    count: '230', 
    categories: {
      food: {
        all: '133',
      },
    },
    
  }
}

export default function PlanBudget ({dataPlanBudget}) {

  const showSectionCategories = (categoriesData) => {
    
    return (
      Object.keys(categoriesData).map(category => {
        return (
        <div>
          {/* <BudgetDiagram /> */}
          <p>{category}</p>
          <p>{categoriesData[category].left ? categoriesData[category].left : categoriesData[category].all}</p>
        </div>
        )
      })
    )
  }

  const planBudgetJSX = 
  <div>
    <div>
      <div><span>Income</span><span>{dataPlanBudgetMock.income.count}</span></div>
      {showSectionCategories(dataPlanBudgetMock.income.categories)}
    </div>
    <div>
      <div><span>Housing</span><span>{dataPlanBudgetMock.housing.count}</span></div>
      {showSectionCategories(dataPlanBudgetMock.housing.categories)}
    </div>
    <div>
      <div><span>Other expenses</span><span>{dataPlanBudgetMock.otherExpenses.count}</span></div>
      {showSectionCategories(dataPlanBudgetMock.otherExpenses.categories)}
    </div>
    
  </div>

  return (
    <div>
      {/* По нажатию на категорию открывается все расходы из этой категории за текущий месяц запрос на сервер /food или другая любая категория*/}

      {planBudgetJSX}
      PB
    </div>
  )
}