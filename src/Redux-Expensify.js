import { createStore, combineReducers } from 'redux';

//combineReducers =>its a functions that takes an object which can take multiple reducers to simplify complex app where we have huge state

//Application initail State
const expenseState = {
    expenses: [
        {
            id: 'X12ABC',
            description: "Janauray Rent",
            note: 'This a payment for my rent for the month of january',
            address: 'sec-77 Noida',
            amount: 10000,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount',//Amount/Dat
        startDate: undefined,
        endDate: undefined
    }
};

//Expense Reducer 
let expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case "value":

            break;

        default:
            return state;
            break;
    }
}

//Filter Reducer
let filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case "value":

            break;

        default:
            return state;
            break;
    }
}

//Store creation
const store = createStore(combineReducers({
    expenses:expenseReducer,
    filter: filterReducer
}));

console.log(store.getState());

/*Actions for this expnsify app
================================
1.ADD_EXPENSE
2.REMOVE_EXPENSE
3.EDIT_EXPENSE
4.SET_TEXT_FILTER
5.SORT_BY_DATE
6.SORT_BY_AMOUNT
7.SET_START_DATE
8.SET_END_DATE
*/



