import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpense from "../selectors/expenses";


const ExpenseList = (props) => {
    let expenseList = props.expenses.map((expense) => {
        /* return <ExpenseListItem
             key={expense.id}
             description={expense.description}
             amount={expense.amount}
             createdAt={expense.createdAt}
        />
        OR 
        */
        return <ExpenseListItem
            key={expense.id} {...expense} />

    });
    return (
        <div>
            <h1>Expense List</h1>
            {expenseList.length>0 &&
                <table border="1">
                    <thead>
                        <td>Description</td>
                        <td>Amount</td>
                        <td>Due Date</td>
                    </thead>
                    <tbody>
                        {expenseList}
                    </tbody>
                </table>
            }
        </div>

    );
};

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses
//     };
// })(ExpenseList);


//A better way to implement above code
const mapStateToProps = (state) => {
    return {
        expenses: selectExpense(state.expenses, state.filters)

    };
};
export default connect(mapStateToProps)(ExpenseList);