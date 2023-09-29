import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isAddNewExpense, setIsAddNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAddNewExpense(false);
  };

  const onCancelButtonClickedHandler = () => {
    setIsAddNewExpense(false);
  }

  return (
    <div className='new-expense'>
      {isAddNewExpense && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelButtonClicked={onCancelButtonClickedHandler}/>
      )}
      {!isAddNewExpense && (
        <button onClick={() => setIsAddNewExpense(true)}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
