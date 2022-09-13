import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { fetchCustomers } from './asyncActions/customers';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers)

  function addCash(cash) {
    dispatch({ type: "ADD_CASH", payload: cash })
  }
  function getCash(cash) {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className='app'>
      <div className='balance'>
        <span>Ваш счет: {cash}$</span>
      </div>
      <div className='buttons'>
        <button className='buttons__button' onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button className='buttons__button' onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button className='buttons__button' onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button className='buttons__button' onClick={() => dispatch(fetchCustomers())}>Получить клиентов</button>
      </div>
      {customers.length > 0 ?
        <div className="clients">
          {customers.map(customer => {
            return <div onClick={() => removeCustomer(customer)} key={customer.id}>{customer.name}</div>
          })}
        </div>
        :
        <div className="noclients">Клиенты отсутсвуют!</div>
      }
    </div>
  );
}

export default App;

