import PlanExpenseComponent from "./PlanExpenseComponent"

import styles from './editBudget.module.scss'

const dataForEditMock = {
  income : {
    count: '0',
    categories: {
      salary: {
        left: '0',
        all: '3 000',
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
        left: '70',
        all: '70',
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

export default function EditBudget ({dataForEdit}) {

  const showEditBudgetCategories = (name) => {
    return (
      <div>
        {Object.keys(dataForEditMock[name].categories).map(category => {
          return <div className={styles.smallCategoryContainer}><span className={styles.smallCategoryName}>{category}</span> <input type='text' value={dataForEditMock[name].categories[category].all}/></div>
        })}
      </div>
    )
  }


  return (
    <div>
      {/* <EditBudgetWidget/> */}
      <div className={styles.container}>
        <div className={styles.bigCategoryName}>Income</div>
        {showEditBudgetCategories('income')}
        <PlanExpenseComponent type="income"/>
      </div>
      <div className={styles.container}>
        <div className={styles.bigCategoryName}>Housing</div>
        {showEditBudgetCategories('housing')}
        <PlanExpenseComponent type="housing"/>
      </div>
    </div>
  )
}