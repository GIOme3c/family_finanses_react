import styles from './planBudget.module.scss'
import './expenses-diagram.scss'
import BudgetDiagram from './BudgetDiagram'

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

        let percent = 0;
        if(categoriesData[category].left) {
          percent = (categoriesData[category].all - categoriesData[category].left) * 100 / categoriesData[category].all;
        } else {
          percent = 100;
        }
          

        return (
        <div className={styles.smallCategories__item}>
          <BudgetDiagram percent={percent}/>
          <span className={styles.smallCategories__name}>{category}</span>
          <span className={styles.smallCategories__money}>{categoriesData[category].left ? <>Br  {categoriesData[category].left} left</> : <>Br {categoriesData[category].all}</>}</span>
        </div>
        )
      })
    )
  }

  const planBudgetJSX = 
  <div>
    <div className={styles.bigCategory__container}>
      <div className={styles.bigCategory}><span>Income</span><span>Br {dataPlanBudgetMock.income.count}</span></div>
      <div className={styles.smallCategories}>
        {showSectionCategories(dataPlanBudgetMock.income.categories)}
      </div>
    </div>
    <div className={styles.bigCategory__container}>
      <div className={styles.bigCategory}><span>Housing</span><span>Br {dataPlanBudgetMock.housing.count}</span></div>
      <div className={styles.smallCategories}>
        {showSectionCategories(dataPlanBudgetMock.housing.categories)}
      </div>
    </div>
    <div className={styles.bigCategory__container}>
      <div className={styles.bigCategory}><span>Other expenses</span><span>Br {dataPlanBudgetMock.otherExpenses.count}</span></div>
      <div className={styles.smallCategories}>
        {showSectionCategories(dataPlanBudgetMock.otherExpenses.categories)}
      </div>
    </div>
    
  </div>

  return (
    <div>
      {/* По нажатию на категорию открывается все расходы из этой категории за текущий месяц запрос на сервер /food или другая любая категория*/}

      {planBudgetJSX}



      {/* <div class="pie" style={{"--p":20}}> 20%</div> */}
      <div class="pie animate no-round" style={{"--p":80,"--c":"orange;"}}> 80%</div>
      {/* <div class="pie" style="--p:40;--c:darkblue;--b:10px"> 40%</div> */}
      {/* <div class="pie no-round" style="--p:60;--c:purple;--b:15px"> 60%</div> */}
      {/* <div class="pie animate" style="--p:90;--c:lightgreen"> 90%</div> */}


    </div>
  )
}