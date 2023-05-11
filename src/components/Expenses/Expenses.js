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

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter onFilterChange={onFilterChangeHandler} />
                {props.items.map((expense) =>
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )};
            </Card>
        </div>
    )
}

export default Expenses;