import React from "react";
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";

const ExpenseListFilter = (props) => {
    console.log(props);
    return (
        <div>
            <label >Enter Filter Text:</label>
            <input type="text" value={props.filter.text}
                onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value));
                    console.log(e.target.value);
                }} />
            <br />
            <label htmlFor="">Sort By:</label>
            <select
                value={props.filter.sortBy}
            onChange={(e) => {
                console.log(e.target.value)
                if (e.target.value === 'date') {
                    props.dispatch(sortByDate())
                } else {
                    props.dispatch(sortByAmount())
                }
            }}>
                <option value="date" >Date</option>
                <option value="amount" >Amount</option>
            </select>
        </div>
    );
};

const mappedStateToProps = (state) => {
    return {
        filter: state.filters
    };
};

export default connect(mappedStateToProps)(ExpenseListFilter);