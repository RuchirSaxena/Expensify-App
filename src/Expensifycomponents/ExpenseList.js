import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';


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
            <table border="1">
                <tbody>
                    {expenseList}
                </tbody>
            </table>
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
        expenses: state.expenses
    };
};
export default connect(mapStateToProps)(ExpenseList);