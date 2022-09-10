import { useDispatch, useSelector } from 'react-redux';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash)

  function addCash(cash) {
    dispatch({ type: "ADD_CASH", payload: cash })
  }
  function getCash(cash) {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  return (
    <div className='app'>
      <div className='balance'>
        <span>Ваш счет: {cash}$</span>
      </div>
      <div className='buttons'>
        <button className='buttons__button' onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button className='buttons__button' onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
      </div>
    </div>
  );
}

export default App;
