import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Redux without react
//import { } from "./ReduxDemo2";
//import { } from "./Redux-Expensify";

//Redux with React 
import  configureStore  from './store/configureStore';
import { addExpense,removeExpense,editExpense } from "./actions/expenses";
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate } from "./actions/filters";
import  getVisibleExpense from './selectors/expenses';


const store = configureStore();


//subscribe to the store to monitor state changes 
store.subscribe(() => {

    console.log(store.getState());
});

store.dispatch(addExpense({
  note:'water bill',
  description:'paid bill',
  amount:2000,
  createdAt:234
}));


store.dispatch(addExpense({
    note:'Gas bill',
    description:'Not Paid bill',
    createdAt:'11/08/2018',
    amount:600
}));


store.dispatch(setTextFilter("bill"));

const state=store.getState();
const visibleExpense = getVisibleExpense(state.expenses, state.filters);
console.log(visibleExpense);

ReactDOM.render(<App />, document.getElementById('root'));

