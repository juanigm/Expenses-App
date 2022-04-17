import React, {useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const tittleChangeHandler = (e) => {
        setUserInput((prevState) => {
            return{...prevState, enteredTitle: e.target.value}
        });
    };

    const amountChangeHandler = (e) => {
        setUserInput((prevState) => {
            return{...prevState, enteredAmount: e.target.value}
        });
    };

    const dateChangeHandler = (e) => {
        setUserInput((prevState) => {
            return{...prevState, enteredDate: e.target.value}
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: userInput.enteredDate
        };

        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: '',
                enteredAmount: '',
                enteredDate: ''
                }
        });

        props.onSaveExpenseData(expenseData);
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' min='0.01' step='0.01' required={true} value={userInput.enteredTitle} onChange={tittleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' required={true} value={userInput.enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2022-01-01" max="2025-12-31" required={true} value={userInput.enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;