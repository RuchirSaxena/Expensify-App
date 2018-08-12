//Filter Reducer
let filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
export const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            debugger;
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