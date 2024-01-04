import { useState } from "react"
import Calendar from "./Calendar";
import Expenses from "./Expenses";
import NewTransactionComponent from "./NewTransactionComponent";

// const dataExpensesMock = [
//   '01.01'= [
//     {
//       category: '',
//       note:'',
//       sum:'',
//       date:'',
//       isIncome: false,
//     }
//   ]
// ]

export default function Overview() {

  const {dataExpenses, setDataExpenses} = useState([]);

  const changeData = (month) => {
    const dataFromServer = []
    //запрос на сервер чтобы подтянуть данные за определенный месяц и отобразить их на страничке overview
    setDataExpenses(dataFromServer);
  }

  return (
    <div>
      <Calendar changeData={changeData}/>

      <Expenses dataExpenses={dataExpenses}/>

      <NewTransactionComponent/> 
      {/* открывается модалка для добавления нового расхода */}

      HELLO OVER
    </div>
  )
}