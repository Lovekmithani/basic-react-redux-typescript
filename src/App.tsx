import './App.css';
import { useDispatch , useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators , reducersType } from './state';

function App() {
  const dispatch = useDispatch();
  const amount = useSelector((state: reducersType) => state.bank)
  const { depositMoney , withdrawMoney , bankruptMoney } = bindActionCreators(actionCreators , dispatch)
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>Withdraw</button>
      <button onClick={() => bankruptMoney()}>Bankrupt</button>
    </div>
  );
}

export default App;
