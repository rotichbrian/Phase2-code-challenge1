import './App.css';
import TableTransaction from './Components/TableTransaction';
function App() {
  let TransactionRecords = [
    { date: "2024-04-01", description: "Paycheck from Bob's Burgers", category: "Income", amount: 150.00 },
    { date: "2024-04-03", description: "Office lunch", category: "food", amount: 12.99 },
    { date: "2024-04-04", description: "Sunglasses, Urban Outfitters", category: "Fashion", amount: 40.00 },
    { date: "2024-04-05", description: "Birthday Check from Grandma", category: "Gift", amount: 8.50 },
    { date: "2024-04-06", description: "Lyft Ride", category: "Transportation", amount: 60.00 },
    { date: "2024-04-10", description: "Venmo, Pay Roommate for Rent", category: "Housing", amount: 120.00 }
];
  return (
    <div className="App">
      <div className='Title'>The Royal Bank of Flatiron</div>
      <TableTransaction records={TransactionRecords}/>
    </div>
  );
}

export default App;