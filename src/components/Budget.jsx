import { useState } from "react"
import Calendar from "./Calendar";

import styles from './budget.module.scss'
import BudgetWidget from "./BudgetWidget";
import PlanBudget from "./PlanBudget";
import EditBudget from "./EditBudget";

export default function Overview() {

  const [isPlane, setIsPlane] = useState(true)
  const [dataBudget, setDataBudget] = useState([])
  const {dataForWidget, setDataForWidget} = useState([]);

  const openPlane = () => {
    setIsPlane(true);
  }

  const openEdit = () => {
    setIsPlane(false);
  }


  const changeData = (month) => {
    const dataFromServer = {
      budget: [],
      widget: [],
    }
    //запрос на сервер чтобы подтянуть данные за определенный месяц и отобразить их на страничке budget
    setDataBudget(dataFromServer.budget);
    setDataForWidget(dataFromServer.widget);
  }

  return (
    <div className={styles.budget}>

      <div className={styles['budget-widget-background']}>
        {isPlane ? <BudgetWidget data={dataForWidget}/> : <></>}

        <div className={styles['budget-button-container']}>
          <div className={styles['budget-button__item']} onClick={openPlane}>Plan</div>
          <div className={styles['budget-button__item']} onClick={openEdit}>Edit</div>
        </div>   
      </div>   

      <Calendar changeData={changeData}/>

      {isPlane ? <PlanBudget dataPlanBudget={dataBudget}/> : <EditBudget dataForEdit={dataBudget}/>}
      {/* Возможно здесь же нужно передать открытие модалки с просмотром расхода чтобы компонент просто отображал все и не нужна была ему логика */}

    </div>
  )
}