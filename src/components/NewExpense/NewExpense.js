import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [form, setForm] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        stopFormHandler();

        props.onSavePassData(expenseData);
    };

    const openFormHandler = () => {
        setForm(true);
    }

    const stopFormHandler = () => {
        setForm(false);
    }

    return (
        <div className='new-expense'>
            {!form && <button onClick={openFormHandler}>Add New Expense</button>}
            {form && <ExpenseForm
                onSaveExpenseData={onSaveExpenseDataHandler}
                onCancel={stopFormHandler}
            />}
        </div>
    )
}

export default NewExpense;