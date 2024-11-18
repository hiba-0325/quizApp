

import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';


function App() {

    const [expenses, setExpenses] = useState(() => {
     
      const savedExpenses = localStorage.getItem('expenses');
      return savedExpenses ? JSON.parse(savedExpenses) : [];
    });
    const [filter, setFilter] = useState('everything');

     useEffect(() => {
        localStorage.setItem('expense', JSON.stringify(expenses));
      }, [expenses]);

      const addExpense = (expense) => {
        setExpenses((prevExpenses) => [...prevExpenses, expense]);
      };

       const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredExp = expenses.filter((expense) => {
    return filter === 'All' || expense.category === filter;
  });
       
  const filteredexp = expenses.filter((expense)) => {
    return filter === "everything" || expense.category=== filter;
  }
  
  
const total = filteredExp.reduce((total, expense) => total + expenses.amount, 0);

  return(
    <div>
     <h1>Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseFilter filter={filter} onFilterChange={handleFilterChange} />
      <h3>Total : {total}</h3>
      <ExpenseList expenses={filteredExp} />
    </div>
  
  )}
  
  export default App