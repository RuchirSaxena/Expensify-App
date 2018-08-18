
import React, { Component } from 'react';
import moment from 'moment';

import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
//import 'react-dates/initialize';

class ExpenseForm extends Component {
    state = {
        descrption: '',
        amount: '',
        note: '',
        createdAt: moment(),
        calenderFocused: false,
        error:''
    };
    onDescriptionChange = (e) => {
        const descrption = e.target.value;
        this.setState(() => {
            return {
                descrption: descrption
            }
        });
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        this.setState(() => {
            return {
                amount: amount
            }
        });
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => {
            return {
                note: note
            }
        });
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => {
                return {
                    createdAt: createdAt
                }
            });
        }
    }
    onFocusChange = (focused) => {
        this.setState(() => {
            return {
                calenderFocused: focused
            }
        });
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.descrption || !this.state.amount){
           this.setState(()=>{
               return {
                error:'please provide descrption and amout'
               }
           });
        }else{
           this.setState(()=>({error:''}));
           console.log('submitted');
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p> }
                <form  onSubmit={this.onSubmit}>
                    <input type="text"
                        placeholder="Descrption"
                        autoFocus
                        value={this.state.descrption}
                        onChange={this.onDescriptionChange}
                    /><br />
                    <input type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    /><br />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <input type="textarea"
                        placeholder="Add your note"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    /><br />
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;



