import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Cars',
      amount: 150.13,
      date:  new Date(2022, 5, 6) ,
    },
    {id: 'e2', title: 'New TV',amount: 1432.49,date: new Date(2022, 6, 6)},
    {
      id: 'e3',
      title: 'PS5 Games',
      amount: 1550.13,
      date: new Date(2022, 6, 6),
    },
    {
      id: 'e4',
      title: 'Computer parts',
      amount: 150.13,
      date: new Date(2022, 6, 6),
    },
  ];

  const addExpenseHandler = expense =>{
    console.log('In APP.js');
    console.log(expense)
  };

  return(
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
    
}

export default App;