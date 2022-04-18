import React from 'react';

import "./ExpenseItem"
import ExpenseItem from "./ExpenseItem";
import "./Expense.css"
import "../UI/Card"
import Card from "../UI/Card";

import ExpensesFilter from './Filter/ExpensesFilter';

const Expense = (props) => {

    const saveChangeYearHandler = (year) => {
        console.log('In Expense.js')
        console.log(year);
    }


    return (   
        <Card className="expenses">
            <ExpensesFilter onChangeYear={saveChangeYearHandler}/>
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}
            ></ExpenseItem>
        </Card>
    );
}

export default Expense;