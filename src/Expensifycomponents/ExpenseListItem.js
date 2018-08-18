import React from 'react';

//const ExpenseListItem = (props) => { OR using spread operator
const ExpenseListItem = ({ description, amount, createdAt}) => {
    return (
        <tr>
            <td>{description}</td>
            <td>{amount}</td>
            <td>{createdAt}</td>
        </tr>
    );

};

export default ExpenseListItem;