import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { asyncDecrementCreator, asyncIncrementCreator } from './store/countReducer';
// import { fetchCustomers } from './asyncActions/customers';
import { decrementCreator, incrementCreator } from './store/countUsers/countReducer';
import { fetchUsers } from './store/userReducer';
// import { addCustomerAction, removeCustomerAction } from './store/userReducer';

// function App() {
//   const dispatch = useDispatch();
//   const cash = useSelector(state => state.cash.cash);
//   const customers = useSelector(state => state.customers.customers)

//   function addCash(cash) {
//     dispatch({ type: "ADD_CASH", payload: cash })
//   }
//   function getCash(cash) {
//     dispatch({ type: "GET_CASH", payload: cash })
//   }

//   const addCustomer = (name) => {
//     const customer = {
//       name,
//       id: Date.now(),
//     }
//     dispatch(addCustomerAction(customer))
//   }

//   const removeCustomer = (customer) => {
//     dispatch(removeCustomerAction(customer.id))
//   }

//   return (
//     <div className='app'>
//       <div className='balance'>
//         <span>Ваш счет: {cash}$</span>
//       </div>
//       <div className='buttons'>
//         <button className='buttons__button' onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
//         <button className='buttons__button' onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
//         <button className='buttons__button' onClick={() => addCustomer(prompt())}>Добавить клиента</button>
//         <button className='buttons__button' onClick={() => dispatch(fetchCustomers())}>Получить клиентов</button>
//       </div>
//       {customers.length > 0 ?
//         <div className="clients">
//           {customers.map(customer => {
//             return <div onClick={() => removeCustomer(customer)} key={customer.id}>{customer.name}</div>
//           })}
//         </div>
//         :
//         <div className="noclients">Клиенты отсутсвуют!</div>
//       }
//     </div>
//   );
// }

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.users)

  return (
    <div className="app">
      <div className="balance">
        {count}
      </div>
      <div className="buttons">
        <button className="buttons__button" onClick={() => dispatch(asyncIncrementCreator())}>Инкремент++</button>
        <button className="buttons__button" onClick={() => dispatch(asyncDecrementCreator())}>Декремент--</button>
        <button className="buttons__button" onClick={() => dispatch(fetchUsers())}>Получить юзеров</button>
      </div>
      <div className="users">
        {users.map(user =>
          <div key={user.id} className='clients'>
            {user.name}
          </div>
        )}
      </div>
    </div>
  )
}

export default App;

