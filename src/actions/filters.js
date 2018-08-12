// 1.SET_TEXT_FILTER
export const setTextFilter = (text = '') => {
    return {
        type: "SET_TEXT_FILTER",
        text
    }

};



// 2.SORT_BY_DATE
export const sortByDate = (date = '') => {
    return {
        type: "SORT_BY_DATE",
        date
    }
};


// 3.SORT_BY_AMOUNT
export const sortByAmount = (amount = '') => {
    return {
        type: "SORT_BY_AMOUNT",
        amount
    }
};


// 4.SET_START_DATE
export const setStartDate = (startDate = '') => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}


// 5.SET_END_DATE
export const setEndDate = (endDate = '') => {
    debugger;
    return {
        type: 'SET_END_DATE',
        endDate
    }
}






