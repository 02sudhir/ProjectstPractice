import './App.css';
import Header from './components/Header';
import Balance  from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import Transaction from './components/Transaction';
import AddTransaction from './components/AddTransaction';


function App() {
  return (
    <div >
    <Header/>
    <div class="container">
    <Balance/>
    <IncomeExpenses/>
    <Transaction/>
    <AddTransaction/>

    
    
      
      </div>
      
    </div>
  );
}

export default App;
