//Expense Reducer 
let expenseReducerDefaultState = [];
export const expenseReducer = (state = expenseReducerDefaultState, action) => {
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