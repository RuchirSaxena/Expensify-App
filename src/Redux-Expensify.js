import { createStore, combineReducers } from 'redux';
//import { uuid } from 'uuid';
//combineReducers =>its a functions that takes an object which can take multiple reducers to simplify complex app where we have huge state



function UUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};

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
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ]; //OR state.concat(action.expense);
            break;
        case "REMOVE_EXPENSE":
            return state.filter((item) => {
                return item.id !== action.id;
            });
            break;
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updatedExpense
                    }
                } else {
                    return expense;
                }
            });
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
        case "SET_TEXT_FILTER":
              
            return {
                ...state,
                text: action.text
            }
            break;
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: action.date
            }
            break;
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: action.amount
            }
            break;
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
            break;
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
            break;
        default:
            return state;
            break;
    }
}

//Store creation
const store = createStore(combineReducers({
    expenses: expenseReducer,
    filter: filterReducer
}));

console.log(store.getState());

/*Actions for this expnsify app
================================*/
// 1.ADD_EXPENSE
const addExpense = (
    //default Arguments for the function
    { description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => {

    return {

        type: "ADD_EXPENSE",
        expense: {
            id: UUID(),
            description, //== description :description
            note,
            amount,
            createdAt

        }
    }
};

//subscribe to the store
store.subscribe(() => {
    console.log(store.getState());
});

//Dispatch action =>Expense one
const expenseOne = store.dispatch(addExpense({ description: 'Rent', note: 'Rent paid for the month', amount: 10000, createdAt: '20/07/2018' }));

//Dispatch action =>Expense two
const expenseTwo = store.dispatch(addExpense({
    description: 'Car',
    note: 'car service',
    createdAt: '21/08/2018',
    amount: 5000
}));


// 2.REMOVE_EXPENSE
const removeExpense = (id = 0) => {
    return {
        type: "REMOVE_EXPENSE",
        id: id
    }
};
console.info("Expense one:", expenseOne);
store.dispatch(removeExpense(expenseOne.expense.id));

// 3.EDIT_EXPENSE
const editExpense = (id = 0, updatedExpense = {}) => {
    return {
        type: "EDIT_EXPENSE",
        id,
        updatedExpense
    }
};

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 25000 }));

// 4.SET_TEXT_FILTER
const setTextFilter = (text = '') => {
    return {
        type: "SET_TEXT_FILTER",
        text
    }

};

store.dispatch(setTextFilter("car price filter"));

// 5.SORT_BY_DATE
const sortByDate = (date = '') => {
    return {
        type: "SORT_BY_DATE",
        date
    }
};

store.dispatch(sortByDate({ sortBy: 'Date' }));
// 6.SORT_BY_AMOUNT
const sortByAmount = (amount = '') => {
    return {
        type: "SORT_BY_AMOUNT",
        amount
    }
};

store.dispatch(sortByDate({ sortBy: 'Amount' }));
// 7.SET_START_DATE
const setStartDate = (startDate = '') => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}

store.dispatch(setStartDate(124));
// 8.SET_END_DATE

const setEndDate = (endDate = '') => {
      
    return {
        type: 'SET_END_DATE',
        endDate
    }
}

store.dispatch(setEndDate(456));




