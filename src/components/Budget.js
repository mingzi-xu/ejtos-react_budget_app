import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, Currency,remaining,dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        if(remaining>0) {
          
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        })}
        else{
            alert("You cannot reduce the budget value lower than the spending");
            setNewBudget(budget);
            return;
        }
    }
    return (
    <div className='alert alert-secondary'>
        Budget: {Currency}<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        
    </div>
    );
};
export default Budget;
