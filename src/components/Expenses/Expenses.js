import React, {useState} from 'react';

import ExpenseFilter from "./ExpenseFilter";
import Card from '../UI/Card';

import './Expenses.css'
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const onFilterChangeHandler = (year) => {
        setFilteredYear(year);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter
                    selected={filteredYear}
                    onFilterChange={onFilterChangeHandler}
                />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;