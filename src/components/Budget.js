import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value, 10);

        if (value > 20000) {
            alert("The value cannot exceed 20000");
            return;
        }

        if (value < expenses.reduce((total, item) => total + item.cost, 0)) {
            alert("You cannot reduce the budget value lower than the spending.");
            return;
        }

        setNewBudget(value);
        dispatch({ type: 'SET_BUDGET', payload: value });
    }
    
    return (
        <div className='alert alert-secondary'>
           <span>Budget: {currency}</span>
           <input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
      
    );
};
export default Budget;

