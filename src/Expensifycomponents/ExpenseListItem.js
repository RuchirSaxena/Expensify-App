import React from 'react';
import {connect} from 'react-redux';
import { removeExpense } from "../actions/expenses";

//const ExpenseListItem = (props) => { OR using spread operator
const ExpenseListItem = ({dispatch,id, description, amount, createdAt}) => {
    return (
        <tr>
            <td>{description}</td>
            <td>{amount}</td>
            <td>{createdAt}</td>
            <td onClick={(e)=>{
                dispatch(removeExpense(id));
                console.log("clicked")}} ><a href="#" >Remove</a></td>
        </tr>
    );

};


export default connect()(ExpenseListItem);