import React, {useState} from 'react';

import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const onFilterChangeHandler = (year) => {
        setFilteredYear(year);
    }

    console.log(props.items.filter(e => e.date.getFullYear() === 2021));

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter onFilterChange={onFilterChangeHandler}/>
                {props.items.filter(expense => expense.date.getFullYear() === Number(filteredYear))
                    .map(filteredExpense =>
                        <ExpenseItem
                            key={filteredExpense.id}
                            title={filteredExpense.title}
                            amount={filteredExpense.amount}
                            date={filteredExpense.date}
                        />
                )};
            </Card>
        </div>
    )
}

export default Expenses;